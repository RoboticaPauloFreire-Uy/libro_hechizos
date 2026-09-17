#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generador del Libro de Hechizos en formato PDF
Colegio Paulo Freire · Proyecto de Arte Digital
"""

import os
import re
import json
import base64
from playwright.sync_api import sync_playwright

WORKSPACE = os.path.dirname(os.path.abspath(__file__))

def img_to_b64(rel_path):
    full_path = os.path.join(WORKSPACE, rel_path)
    if not os.path.exists(full_path):
        return ""
    ext = os.path.splitext(full_path)[1].lower()
    mime = "image/png" if ext == ".png" else "image/jpeg"
    with open(full_path, "rb") as f:
        data = base64.b64encode(f.read()).decode("utf-8")
    return f"data:{mime};base64,{data}"

def load_spells():
    spells_file = os.path.join(WORKSPACE, "spells.js")
    with open(spells_file, "r", encoding="utf-8") as f:
        content = f.read()

    import subprocess
    node_script = """
    const fs = require('fs');
    const content = fs.readFileSync('spells.js', 'utf8');
    const start = content.indexOf('const SPELLS = [');
    const end = content.indexOf('];\\n\\n// ── Estructura Dinámica');
    const sub = content.substring(start, end + 2).replace('const SPELLS =', 'global.SPELLS =');
    eval(sub);
    console.log(JSON.stringify(global.SPELLS));
    """
    res = subprocess.run(["node", "-e", node_script], cwd=WORKSPACE, capture_output=True, text=True, encoding="utf-8")
    if res.returncode == 0:
        return json.loads(res.stdout.strip())
    else:
        print("Error al extraer hechizos con node:", res.stderr)
        return []

def generate_html(spells):
    logo_b64 = "img/logo-colegio.png"
    foto_antes_b64 = "img/foto-antes.png"

    html = f"""<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Libro de Hechizos — Colegio Paulo Freire</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cinzel:wght@600;700;800&family=IM+Fell+English:ital@0;1&family=UnifrakturMaguntia&family=Segoe+UI:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    @page {{
      size: A4 portrait;
      margin: 0;
    }}
    *, *::before, *::after {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}
    body {{
      font-family: 'IM Fell English', Georgia, serif;
      background: #fdfbf7;
      color: #1a0f0a;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }}

    /* Botón flotante para imprimir si se abre en navegador */
    .no-print-bar {{
      position: fixed;
      top: 15px;
      right: 15px;
      z-index: 9999;
      background: rgba(20, 10, 15, 0.95);
      border: 1px solid #c9a84c;
      border-radius: 8px;
      padding: 8px 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.4);
      display: flex;
      gap: 10px;
      align-items: center;
    }}
    .no-print-bar button {{
      background: linear-gradient(135deg, #c9a84c, #9a7b2c);
      color: #fff;
      border: none;
      padding: 8px 16px;
      font-family: 'Segoe UI', sans-serif;
      font-size: 0.85rem;
      font-weight: 700;
      border-radius: 6px;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }}
    .no-print-bar a {{
      color: #e8c97a;
      text-decoration: none;
      font-family: 'Segoe UI', sans-serif;
      font-size: 0.82rem;
      font-weight: 600;
    }}
    @media print {{
      .no-print-bar {{ display: none !important; }}
    }}

    /* Cada página ocupa exactamente 1 hoja A4 */
    .pdf-page {{
      width: 210mm;
      height: 297mm;
      position: relative;
      page-break-after: always;
      break-after: page;
      overflow: hidden;
      padding: 16mm 18mm 14mm 18mm;
      background: #fbf7ec;
      background-image:
        radial-gradient(ellipse at 15% 15%, rgba(212, 184, 112, 0.15) 0%, transparent 60%),
        radial-gradient(ellipse at 85% 85%, rgba(139, 90, 43, 0.1) 0%, transparent 60%);
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(139, 90, 43, 0.2);
    }}

    /* Marco decorativo de página pergamino */
    .page-frame {{
      position: absolute;
      inset: 8mm;
      border: 2px solid #b89848;
      border-radius: 8px;
      pointer-events: none;
      box-sizing: border-box;
    }}
    .page-frame-inner {{
      position: absolute;
      inset: 2.5mm;
      border: 1px solid rgba(184, 152, 72, 0.45);
      border-radius: 5px;
      pointer-events: none;
    }}
    .page-frame-corner {{
      position: absolute;
      width: 14mm;
      height: 14mm;
      border-color: #8a652a;
      border-style: solid;
      pointer-events: none;
    }}
    .pfc-tl {{ top: 8mm; left: 8mm; border-width: 3px 0 0 3px; border-top-left-radius: 8px; }}
    .pfc-tr {{ top: 8mm; right: 8mm; border-width: 3px 3px 0 0; border-top-right-radius: 8px; }}
    .pfc-bl {{ bottom: 8mm; left: 8mm; border-width: 0 0 3px 3px; border-bottom-left-radius: 8px; }}
    .pfc-br {{ bottom: 8mm; right: 8mm; border-width: 0 3px 3px 0; border-bottom-right-radius: 8px; }}

    /* Encabezado superior en cada hoja */
    .page-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 2.5mm;
      border-bottom: 1.5px solid rgba(184, 152, 72, 0.5);
      margin-bottom: 4mm;
    }}
    .ph-left {{
      display: flex;
      align-items: center;
      gap: 3mm;
    }}
    .ph-logo {{
      width: 11mm;
      height: 11mm;
      border-radius: 50%;
      border: 1px solid #c9a84c;
    }}
    .ph-title {{
      font-family: 'Cinzel', serif;
      font-size: 8.5pt;
      font-weight: 700;
      color: #704214;
      letter-spacing: 0.1em;
    }}
    .ph-subtitle {{
      font-family: 'Segoe UI', sans-serif;
      font-size: 7pt;
      color: #8c7355;
    }}
    .ph-right {{
      font-family: 'Cinzel', serif;
      font-size: 8pt;
      color: #8a652a;
      letter-spacing: 0.08em;
      font-weight: 600;
    }}

    /* Pie de página */
    .page-footer {{
      margin-top: auto;
      padding-top: 2.5mm;
      border-top: 1px solid rgba(184, 152, 72, 0.4);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'Cinzel', serif;
      font-size: 7.5pt;
      color: #7a5a3a;
    }}

    /* ══════════════════════════════════════════════════════════
       1. PORTADA
    ══════════════════════════════════════════════════════════ */
    .cover-page-bg {{
      background: linear-gradient(155deg, #1c0b10 0%, #2f101a 45%, #421422 70%, #1a070e 100%) !important;
      color: #f5eedc !important;
      text-align: center;
      justify-content: center;
      align-items: center;
      padding: 22mm 20mm;
    }}
    .cover-border-gold {{
      position: absolute;
      inset: 10mm;
      border: 2px solid rgba(232, 201, 122, 0.6);
      border-radius: 8px;
    }}
    .cover-border-gold-inner {{
      position: absolute;
      inset: 3mm;
      border: 1px solid rgba(232, 201, 122, 0.35);
      border-radius: 5px;
    }}
    .cover-school-badge {{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3mm;
      margin-bottom: 6mm;
    }}
    .cover-school-logo {{
      width: 28mm;
      height: 28mm;
      border-radius: 50%;
      border: 2.5px solid #e8c97a;
      box-shadow: 0 0 25px rgba(232, 201, 122, 0.5);
      background: #114227;
    }}
    .cover-school-name {{
      font-family: 'Cinzel', serif;
      font-size: 11pt;
      font-weight: 700;
      letter-spacing: 0.22em;
      color: #f5dfa2;
      text-transform: uppercase;
      text-shadow: 0 2px 5px rgba(0,0,0,0.8);
    }}
    .cover-ornament-line {{
      width: 65%;
      height: 1.5px;
      background: linear-gradient(to right, transparent, #e8c97a, transparent);
      margin: 4mm auto;
    }}
    .cover-main-title {{
      font-family: 'UnifrakturMaguntia', serif;
      font-size: 42pt;
      color: #e8c97a;
      line-height: 1.15;
      text-shadow: 0 3px 15px rgba(232, 201, 122, 0.6), 0 2px 4px rgba(0,0,0,0.9);
      margin: 3mm 0;
    }}
    .cover-icon-orb {{
      font-size: 40pt;
      margin: 3mm 0;
      filter: drop-shadow(0 0 15px rgba(232, 201, 122, 0.7));
    }}
    .cover-sub {{
      font-family: 'Cinzel', serif;
      font-size: 12pt;
      color: #e8c97a;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      font-weight: 600;
    }}
    .cover-meta {{
      font-family: 'IM Fell English', serif;
      font-style: italic;
      font-size: 11pt;
      color: rgba(245, 238, 220, 0.8);
      margin-top: 5mm;
    }}
    .cover-footer-note {{
      margin-top: 8mm;
      font-family: 'Cinzel', serif;
      font-size: 8.5pt;
      color: rgba(232, 201, 122, 0.65);
      letter-spacing: 0.15em;
    }}

    /* ══════════════════════════════════════════════════════════
       2. INSTRUCCIONES Y GUÍA
    ══════════════════════════════════════════════════════════ */
    .section-title {{
      font-family: 'Cinzel Decorative', 'Cinzel', serif;
      font-size: 17pt;
      font-weight: 700;
      color: #5c1825;
      text-align: center;
      margin-bottom: 2mm;
      letter-spacing: 0.05em;
    }}
    .section-lead {{
      text-align: center;
      font-size: 9.5pt;
      color: #5a3d24;
      margin-bottom: 4mm;
      line-height: 1.35;
    }}
    .steps-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3.5mm;
      margin-bottom: 5mm;
    }}
    .step-card {{
      background: rgba(255, 255, 255, 0.7);
      border: 1px solid rgba(184, 152, 72, 0.45);
      border-radius: 6px;
      padding: 3mm 3.5mm;
      display: flex;
      gap: 2.5mm;
      align-items: flex-start;
    }}
    .step-num {{
      font-family: 'Cinzel', serif;
      font-weight: 700;
      font-size: 11pt;
      color: #701d2b;
      min-width: 6mm;
    }}
    .step-content {{
      font-size: 8.5pt;
      color: #3d2314;
      line-height: 1.3;
    }}
    .tools-list {{
      display: flex;
      flex-direction: column;
      gap: 2.5mm;
      margin-bottom: 4mm;
    }}
    .tool-item {{
      background: rgba(255,255,255,0.7);
      border-left: 3.5px solid #701d2b;
      border-radius: 0 6px 6px 0;
      padding: 2.5mm 3.5mm;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }}
    .tool-info-title {{
      font-family: 'Cinzel', serif;
      font-weight: 700;
      font-size: 9pt;
      color: #701d2b;
    }}
    .tool-info-url {{
      font-family: 'Segoe UI', sans-serif;
      font-size: 7.5pt;
      color: #634426;
    }}

    /* ══════════════════════════════════════════════════════════
       3. LAS 5 CAPAS DEL PROMPT
    ══════════════════════════════════════════════════════════ */
    .layers-container {{
      display: flex;
      flex-direction: column;
      gap: 3mm;
      margin: 3mm 0;
    }}
    .layer-card {{
      background: rgba(255, 255, 255, 0.85);
      border-radius: 6px;
      padding: 3mm 4mm;
      border: 1px solid rgba(0,0,0,0.08);
      border-left-width: 5px;
    }}
    .lc-1 {{ border-left-color: #2980b9; }}
    .lc-2 {{ border-left-color: #27ae60; }}
    .lc-3 {{ border-left-color: #8e44ad; }}
    .lc-4 {{ border-left-color: #d35400; }}
    .lc-5 {{ border-left-color: #c0392b; }}

    .layer-card-title {{
      font-family: 'Cinzel', serif;
      font-size: 9pt;
      font-weight: 700;
      display: flex;
      justify-content: space-between;
      margin-bottom: 1mm;
    }}
    .layer-card-desc {{
      font-size: 8pt;
      color: #3a2216;
      line-height: 1.3;
    }}
    .layer-card-example {{
      font-style: italic;
      font-size: 7.5pt;
      color: #664b35;
      margin-top: 1mm;
      background: rgba(0,0,0,0.03);
      padding: 1.5mm 2.5mm;
      border-radius: 4px;
    }}

    /* ══════════════════════════════════════════════════════════
       4. PÁGINA DE CADA HECHIZO
    ══════════════════════════════════════════════════════════ */
    .spell-card-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(255,255,255,0.75);
      border: 1.5px solid var(--sc, #701d2b);
      border-radius: 8px;
      padding: 3.5mm 4.5mm;
      margin-bottom: 3.5mm;
    }}
    .sch-left {{
      display: flex;
      align-items: center;
      gap: 3.5mm;
    }}
    .sch-icon {{
      font-size: 24pt;
      line-height: 1;
    }}
    .sch-titles {{
      display: flex;
      flex-direction: column;
    }}
    .sch-num {{
      font-family: 'Cinzel', serif;
      font-size: 7.5pt;
      font-weight: 700;
      color: var(--sc, #701d2b);
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }}
    .sch-name {{
      font-family: 'Cinzel Decorative', 'Cinzel', serif;
      font-size: 13.5pt;
      font-weight: 700;
      color: #1a080c;
      line-height: 1.15;
    }}
    .sch-latin {{
      font-family: 'IM Fell English', serif;
      font-style: italic;
      font-size: 8.5pt;
      color: #7a5035;
    }}
    .sch-right {{
      text-align: right;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1mm;
    }}
    .sch-badge {{
      background: var(--sc, #701d2b);
      color: #fff;
      font-family: 'Segoe UI', sans-serif;
      font-size: 7.5pt;
      font-weight: 700;
      padding: 1.5mm 3mm;
      border-radius: 12px;
      letter-spacing: 0.04em;
    }}
    .sch-diff {{
      font-size: 8pt;
      letter-spacing: 1px;
    }}

    /* Sección de dos columnas: Caldero + Conjuro */
    .spell-info-row {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3.5mm;
      margin-bottom: 3.5mm;
    }}
    .spell-box {{
      background: rgba(255, 255, 255, 0.7);
      border: 1px solid rgba(184, 152, 72, 0.4);
      border-radius: 6px;
      padding: 2.5mm 3.5mm;
    }}
    .spell-box-title {{
      font-family: 'Cinzel', serif;
      font-size: 7.8pt;
      font-weight: 700;
      color: #701d2b;
      margin-bottom: 1.5mm;
      display: flex;
      align-items: center;
      gap: 1.5mm;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }}
    .ingredients-pills {{
      display: flex;
      flex-direction: column;
      gap: 1.2mm;
    }}
    .ing-pill {{
      font-size: 7.5pt;
      color: #3d2417;
      display: flex;
      align-items: center;
      gap: 1.5mm;
    }}
    .incantation-text {{
      font-family: 'Cinzel', serif;
      font-size: 8.2pt;
      font-weight: 600;
      color: #4a1520;
      font-style: italic;
      line-height: 1.3;
      padding: 1.5mm 0;
    }}

    /* Prompt completo */
    .prompt-container {{
      background: #ffffff;
      border: 1.5px dashed rgba(184, 152, 72, 0.6);
      border-radius: 6px;
      padding: 3mm 4mm;
      margin-bottom: 3.5mm;
      box-shadow: inset 0 1px 4px rgba(0,0,0,0.03);
    }}
    .prompt-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5mm;
      border-bottom: 1px solid rgba(184, 152, 72, 0.3);
      padding-bottom: 1mm;
    }}
    .prompt-title {{
      font-family: 'Cinzel', serif;
      font-size: 8pt;
      font-weight: 700;
      color: #701d2b;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }}
    .prompt-badge-copy {{
      font-family: 'Segoe UI', sans-serif;
      font-size: 6.8pt;
      font-weight: 700;
      color: #27ae60;
      background: rgba(39, 174, 96, 0.12);
      padding: 1mm 2.5mm;
      border-radius: 10px;
    }}
    .prompt-text {{
      font-family: 'Segoe UI', system-ui, sans-serif;
      font-size: 7.2pt;
      line-height: 1.38;
      color: #2b1a11;
      text-align: justify;
      white-space: pre-wrap;
    }}
    .pdf-layers-grid {{
      display: flex;
      flex-direction: column;
      gap: 1.2mm;
    }}
    .pdf-layer-item {{
      font-family: 'Segoe UI', system-ui, sans-serif;
      font-size: 7.0pt;
      line-height: 1.28;
      color: #201006;
      background: rgba(250, 246, 238, 0.6);
      padding: 1.2mm 2.2mm;
      border-radius: 3px;
      border-left-width: 3.5px !important;
      border-left-style: solid !important;
    }}

    /* Comparación de imágenes antes y después */
    .comparison-section {{
      background: rgba(255, 255, 255, 0.7);
      border: 1px solid rgba(184, 152, 72, 0.4);
      border-radius: 6px;
      padding: 3mm 4mm;
      margin-bottom: 3mm;
    }}
    .comparison-title {{
      font-family: 'Cinzel', serif;
      font-size: 7.8pt;
      font-weight: 700;
      color: #701d2b;
      margin-bottom: 2mm;
      text-align: center;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }}
    .comparison-grid {{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6mm;
    }}
    .comp-col {{
      text-align: center;
      width: 44%;
    }}
    .comp-img {{
      width: 100%;
      height: 44mm;
      object-fit: cover;
      border-radius: 5px;
      border: 1.5px solid rgba(184, 152, 72, 0.5);
      box-shadow: 0 2px 8px rgba(0,0,0,0.12);
      display: block;
      background: #eee;
    }}
    .comp-label {{
      font-family: 'Segoe UI', sans-serif;
      font-size: 7pt;
      font-weight: 700;
      margin-top: 1.5mm;
      letter-spacing: 0.05em;
    }}
    .comp-label-before {{ color: #2980b9; }}
    .comp-label-after {{ color: #c0392b; }}
    .comp-arrow {{
      font-size: 16pt;
      color: #b89848;
      font-weight: bold;
    }}

    /* Consejo / Tips */
    .spell-tip {{
      font-size: 7.8pt;
      color: #5c3b1e;
      font-style: italic;
      background: rgba(201, 168, 76, 0.12);
      border-left: 3px solid #c9a84c;
      padding: 1.8mm 3mm;
      border-radius: 0 4px 4px 0;
      margin-top: auto;
    }}

    /* ══════════════════════════════════════════════════════════
       5. CONTRAPORTADA / FINAL
    ══════════════════════════════════════════════════════════ */
    .end-page-bg {{
      background: linear-gradient(155deg, #1c0b10 0%, #2f101a 45%, #421422 70%, #1a070e 100%) !important;
      color: #f5eedc !important;
      text-align: center;
      justify-content: center;
      align-items: center;
      padding: 24mm 20mm;
    }}
    .end-title {{
      font-family: 'Cinzel Decorative', 'Cinzel', serif;
      font-size: 26pt;
      color: #e8c97a;
      margin-bottom: 4mm;
      text-shadow: 0 2px 10px rgba(232, 201, 122, 0.5);
    }}
    .end-text {{
      font-size: 11pt;
      line-height: 1.5;
      color: rgba(245, 238, 220, 0.9);
      max-width: 140mm;
      margin: 0 auto 6mm;
    }}
    .end-gem {{
      font-size: 32pt;
      margin: 4mm 0;
    }}
  </style>
</head>
<body>

  <!-- Barra flotante si se visualiza en navegador -->
  <div class="no-print-bar">
    <button onclick="window.print()">🖨️ Imprimir / Guardar en PDF</button>
    <a href="index.html">⬅️ Volver al Grimorio Web</a>
  </div>

  <!-- ============================================================
       1. PORTADA
  ============================================================ -->
  <div class="pdf-page cover-page-bg">
    <div class="cover-border-gold"></div>
    <div class="cover-border-gold-inner"></div>

    <div class="cover-school-badge">
      <img src="{logo_b64}" alt="Colegio Paulo Freire" class="cover-school-logo">
      <div class="cover-school-name">COLEGIO PAULO FREIRE</div>
    </div>

    <div class="cover-ornament-line"></div>
    <h1 class="cover-main-title">Libro de<br>Hechizos</h1>
    <div class="cover-ornament-line"></div>

    <div class="cover-icon-orb">🔮</div>
    <div class="cover-sub">✦ Grimorio de Transformaciones ✦</div>
    <div class="cover-meta">Proyecto de Arte Digital con Inteligencia Artificial · {len(spells)} Hechizos</div>

    <div class="cover-footer-note">
      GENERACIÓN DE IMÁGENES MEDIANTE PROMPTS ESTRUCTURADOS EN 5 CAPAS
    </div>
  </div>

  <!-- ============================================================
       2. INSTRUCCIONES Y HERRAMIENTAS
  ============================================================ -->
  <div class="pdf-page">
    <div class="page-frame"></div>
    <div class="page-frame-inner"></div>
    <div class="page-frame-corner pfc-tl"></div>
    <div class="page-frame-corner pfc-tr"></div>
    <div class="page-frame-corner pfc-bl"></div>
    <div class="page-frame-corner pfc-br"></div>

    <div class="page-header">
      <div class="ph-left">
        <img src="{logo_b64}" alt="Logo" class="ph-logo">
        <div>
          <div class="ph-title">Colegio Paulo Freire</div>
          <div class="ph-subtitle">Arte Digital e Inteligencia Artificial</div>
        </div>
      </div>
      <div class="ph-right">Grimorio Mágico · Instrucciones</div>
    </div>

    <h2 class="section-title">⚗️ Instrucciones del Grimorio ⚗️</h2>
    <p class="section-lead">
      Este grimorio contiene <strong>{len(spells)} hechizos de transformación</strong>. Sigue estos 6 pasos para invocar cualquiera de los monstruos utilizando herramientas de Inteligencia Artificial generativa.
    </p>

    <div class="steps-grid">
      <div class="step-card">
        <div class="step-num">I.</div>
        <div class="step-content"><strong>Elegí tu Hechizo:</strong> Recorre las páginas del grimorio y selecciona la transformación que más te guste.</div>
      </div>
      <div class="step-card">
        <div class="step-num">II.</div>
        <div class="step-content"><strong>Copiá el Prompt:</strong> Copia el texto exacto del recuadro del hechizo elegido.</div>
      </div>
      <div class="step-card">
        <div class="step-num">III.</div>
        <div class="step-content"><strong>Abrí la Herramienta IA:</strong> Ingresa en Bing Image Creator, Google Gemini o ChatGPT.</div>
      </div>
      <div class="step-card">
        <div class="step-num">IV.</div>
        <div class="step-content"><strong>Subí la Foto Base:</strong> Adjunta una foto clara del rostro (de frente, bien iluminada y sin gorra).</div>
      </div>
      <div class="step-card">
        <div class="step-num">V.</div>
        <div class="step-content"><strong>Pegá el Prompt:</strong> Inserta el conjuro en la caja de texto junto a la imagen.</div>
      </div>
      <div class="step-card">
        <div class="step-num">VI.</div>
        <div class="step-content"><strong>¡Generar la Magia!</strong> Presiona Generar y observa cómo la IA transmuta el rostro respetando la identidad original.</div>
      </div>
    </div>

    <div class="spell-box" style="margin-bottom:4mm;">
      <div class="spell-box-title">🔧 Herramientas de IA Recomendadas</div>
      <div class="tools-list">
        <div class="tool-item">
          <div>
            <div class="tool-info-title">🎨 Bing Image Creator (Microsoft Designer)</div>
            <div class="tool-info-url">bing.com/images/create · Modelo DALL·E 3 con cuenta Microsoft institucional</div>
          </div>
          <span style="font-size:8pt;font-weight:700;color:#27ae60;">Recomendada</span>
        </div>
        <div class="tool-item">
          <div>
            <div class="tool-info-title">✨ Google Gemini</div>
            <div class="tool-info-url">gemini.google.com · Permite subir imagen de referencia y describir los cambios</div>
          </div>
          <span style="font-size:8pt;font-weight:700;color:#2980b9;">Google Suite</span>
        </div>
        <div class="tool-item">
          <div>
            <div class="tool-info-title">💬 ChatGPT (OpenAI)</div>
            <div class="tool-info-url">chatgpt.com · Análisis multimodal de imagen + generación de arte digital</div>
          </div>
          <span style="font-size:8pt;font-weight:700;color:#8e44ad;">DALL·E 3</span>
        </div>
      </div>
    </div>

    <div class="spell-tip">
      💡 <strong>Consejo del Hechicero:</strong> La clave del éxito reside en la foto base. Una iluminación frontal uniforme y una expresión neutra o sutil permiten que las capas de metamorfosis se adapten con mayor precisión a los rasgos faciales.
    </div>

    <div class="page-footer">
      <span>Colegio Paulo Freire</span>
      <span>Página 1</span>
      <span>Guía Metodológica</span>
    </div>
  </div>

  <!-- ============================================================
       3. LAS 5 CAPAS DEL PROMPT
  ============================================================ -->
  <div class="pdf-page">
    <div class="page-frame"></div>
    <div class="page-frame-inner"></div>
    <div class="page-frame-corner pfc-tl"></div>
    <div class="page-frame-corner pfc-tr"></div>
    <div class="page-frame-corner pfc-bl"></div>
    <div class="page-frame-corner pfc-br"></div>

    <div class="page-header">
      <div class="ph-left">
        <img src="{logo_b64}" alt="Logo" class="ph-logo">
        <div>
          <div class="ph-title">Colegio Paulo Freire</div>
          <div class="ph-subtitle">Arte Digital e Inteligencia Artificial</div>
        </div>
      </div>
      <div class="ph-right">Arquitectura del Prompt</div>
    </div>

    <h2 class="section-title">🔮 Las 5 Capas de un Hechizo de IA 🔮</h2>
    <p class="section-lead">
      Para que un hechizo funcione con realismo sin destruir la identidad de la persona, dividimos la instrucción en <strong>5 capas esenciales</strong>:
    </p>

    <div class="layers-container">
      <div class="layer-card lc-1">
        <div class="layer-card-title">
          <span style="color:#2980b9;">1. SUJETO BASE & IDENTIDAD</span>
          <span style="font-size:7pt;color:#666;">Cimiento</span>
        </div>
        <div class="layer-card-desc">Instruye a la IA a conservar estrictamente la estructura facial, edad, género y rasgos fisonómicos de la foto de referencia.</div>
        <div class="layer-card-example">Ej: "Obra digital cinematográfica que transforma a la persona de la imagen, preservando de manera estricta sus rasgos faciales exactos..."</div>
      </div>

      <div class="layer-card lc-2">
        <div class="layer-card-title">
          <span style="color:#27ae60;">2. FISIOLOGÍA DE LA CRIATURA</span>
          <span style="font-size:7pt;color:#666;">Metamorfosis</span>
        </div>
        <div class="layer-card-desc">Detalla las características físicas del monstruo: textura de la piel, color de ojos, colmillos, cuernos, pelaje o escamas.</div>
        <div class="layer-card-example">Ej: "Ojos ámbar salvajes brillantes, pelaje grisáceo cubriendo mejillas y mandíbula con colmillos afilados visibles..."</div>
      </div>

      <div class="layer-card lc-3">
        <div class="layer-card-title">
          <span style="color:#8e44ad;">3. VESTIMENTA Y ATUENDO</span>
          <span style="font-size:7pt;color:#666;">Caracterización</span>
        </div>
        <div class="layer-card-desc">Adapta la vestimenta original a la estética del monstruo (ropa rasgada, capas góticas, vendajes antiguos o armaduras).</div>
        <div class="layer-card-example">Ej: "Viste su misma ropa oscura desabrochada, ligeramente desgastada y rasgada por la transformación..."</div>
      </div>

      <div class="layer-card lc-4">
        <div class="layer-card-title">
          <span style="color:#d35400;">4. ILUMINACIÓN Y ATMÓSFERA</span>
          <span style="font-size:7pt;color:#666;">Tono Visual</span>
        </div>
        <div class="layer-card-desc">Crea el ambiente lumínico cinematográfico: contrastes dramáticos, contraluz lunar, sombras profundas, niebla o brasas.</div>
        <div class="layer-card-example">Ej: "Iluminación nocturna y cinematográfica con luz plateada de luna llena que resalta los bordes del pelaje..."</div>
      </div>

      <div class="layer-card lc-5">
        <div class="layer-card-title">
          <span style="color:#c0392b;">5. ENTORNO Y FONDO</span>
          <span style="font-size:7pt;color:#666;">Escenografía</span>
        </div>
        <div class="layer-card-desc">Sitúa la escena en un contexto épico acorde a la criatura (bosque tormentoso, castillo gótico, ruinas griegas, pirámide egipcia).</div>
        <div class="layer-card-example">Ej: "Fondo de bosque oscuro en noche tormentosa, con luna llena visible entre densas nubes de lluvia..."</div>
      </div>
    </div>

    <div class="spell-tip" style="margin-top:auto;">
      ✨ <strong>Lección Clave:</strong> Al redactar un prompt estructurado en capas, la inteligencia artificial entiende qué elementos debe respetar intactos (la identidad) y cuáles debe transformar (el estilo y la fantasía).
    </div>

    <div class="page-footer">
      <span>Colegio Paulo Freire</span>
      <span>Página 2</span>
      <span>Estructura de Prompts</span>
    </div>
  </div>
"""

    # ══════════════════════════════════════════════════════════
    #  PÁGINAS DE CADA UNO DE LOS 14 HECHIZOS
    # ══════════════════════════════════════════════════════════
    for idx, spell in enumerate(spells, start=1):
        after_img_b64 = spell.get("afterImg", "")
        color = spell.get("color", "#701d2b")
        ingredients = spell.get("ingredients", [])

        # Lista de ingredientes formateada
        ing_items_html = ""
        for ing in ingredients:
            if isinstance(ing, dict):
                ing_icon = ing.get("icon", "🧪")
                ing_name = ing.get("name", "")
            else:
                ing_icon = "🧪"
                ing_name = str(ing)
            ing_items_html += f'<div class="ing-pill"><span>{ing_icon}</span><span>{ing_name}</span></div>'

        # Desglose en 5 capas para el PDF
        layers = spell.get("layers", {})
        if layers and layers.get("style"):
            prompt_content_html = f"""<div class="pdf-layers-grid">
          <div class="pdf-layer-item" style="border-left-color: #2980b9;"><strong style="color:#2980b9;">[1. Estilo]</strong> {layers.get('style','')}</div>
          <div class="pdf-layer-item" style="border-left-color: #27ae60;"><strong style="color:#27ae60;">[2. Identidad]</strong> {layers.get('identity','')}</div>
          <div class="pdf-layer-item" style="border-left-color: #c0392b;"><strong style="color:#c0392b;">[3. Mutación]</strong> {layers.get('mutation','')}</div>
          <div class="pdf-layer-item" style="border-left-color: #8e44ad;"><strong style="color:#8e44ad;">[4. Vestuario]</strong> {layers.get('outfit','')}</div>
          <div class="pdf-layer-item" style="border-left-color: #d35400;"><strong style="color:#d35400;">[5. Entorno]</strong> {layers.get('environment','')}</div>
        </div>"""
        else:
            prompt_content_html = f'<div class="prompt-text">{spell.get("prompt", "")}</div>'

        page_num = idx + 2

        html += f"""
  <!-- ============================================================
       HECHIZO {idx}: {spell.get('name')}
  ============================================================ -->
  <div class="pdf-page" style="--sc:{color};">
    <div class="page-frame"></div>
    <div class="page-frame-inner"></div>
    <div class="page-frame-corner pfc-tl"></div>
    <div class="page-frame-corner pfc-tr"></div>
    <div class="page-frame-corner pfc-bl"></div>
    <div class="page-frame-corner pfc-br"></div>

    <div class="page-header">
      <div class="ph-left">
        <img src="{logo_b64}" alt="Logo" class="ph-logo">
        <div>
          <div class="ph-title">Colegio Paulo Freire</div>
          <div class="ph-subtitle">Proyecto de Arte Digital · Grimorio de Hechizos</div>
        </div>
      </div>
      <div class="ph-right">Hechizo {idx:02d} / {len(spells)}</div>
    </div>

    <!-- Encabezado del Hechizo -->
    <div class="spell-card-header">
      <div class="sch-left">
        <div class="sch-icon">{spell.get('icon', '✨')}</div>
        <div class="sch-titles">
          <div class="sch-num">{f"👤 {spell.get('student') or spell.get('team')} · " if (spell.get('student') or spell.get('team')) else ""}Hechizo {idx:02d}</div>
          <div class="sch-name">{spell.get('name')}</div>
          <div class="sch-latin">{spell.get('subtitle', '')}</div>
        </div>
      </div>
      <div class="sch-right">
        <div class="sch-badge">{spell.get('monster', 'Criatura')}</div>
        <div class="sch-diff" title="Dificultad">{spell.get('difficulty', '⭐⭐')}</div>
      </div>
    </div>

    <!-- Fila con Caldero y Conjuro -->
    <div class="spell-info-row">
      <div class="spell-box">
        <div class="spell-box-title">🧪 Caldero de Ingredientes</div>
        <div class="ingredients-pills">
          {ing_items_html}
        </div>
      </div>
      <div class="spell-box">
        <div class="spell-box-title">🗣️ Conjuro Mágico</div>
        <div class="incantation-text">"{spell.get('incantation', '')}"</div>
      </div>
    </div>

    <!-- Prompt Completo en 5 Capas -->
    <div class="prompt-container">
      <div class="prompt-header">
        <div class="prompt-title">📜 Prompt en 5 Capas (Copiar en Bing, Gemini o ChatGPT)</div>
        <div class="prompt-badge-copy">5 Capas Listas</div>
      </div>
      {prompt_content_html}
    </div>

    <!-- Comparación de Imágenes Antes y Después -->
    <div class="comparison-section">
      <div class="comparison-title">✨ Metamorfosis Visual: Foto Base ➔ Transformación con IA</div>
      <div class="comparison-grid">
        <div class="comp-col">
          <img src="{foto_antes_b64}" alt="Foto Base" class="comp-img">
          <div class="comp-label comp-label-before">ANTES: {spell.get('beforeLabel', 'Foto Original')}</div>
        </div>
        <div class="comp-arrow">➔</div>
        <div class="comp-col">
          <img src="{after_img_b64}" alt="{spell.get('monster')}" class="comp-img">
          <div class="comp-label comp-label-after">DESPUÉS: {spell.get('afterLabel', 'Resultado con IA')}</div>
        </div>
      </div>
    </div>

    <!-- Consejo del Hechicero -->
    <div class="spell-tip">
      💡 <strong>Consejo del Hechicero:</strong> {spell.get('tips', '')}
    </div>

    <div class="page-footer">
      <span>Colegio Paulo Freire · Arte Digital</span>
      <span>Página {page_num}</span>
      <span>{spell.get('name')}</span>
    </div>
  </div>
"""

    # ══════════════════════════════════════════════════════════
    #  CONTRAPORTADA FINAL
    # ══════════════════════════════════════════════════════════
    html += f"""
  <!-- ============================================================
       CONTRAPORTADA / FINAL
  ============================================================ -->
  <div class="pdf-page end-page-bg">
    <div class="cover-border-gold"></div>
    <div class="cover-border-gold-inner"></div>

    <div class="cover-school-badge">
      <img src="{logo_b64}" alt="Colegio Paulo Freire" class="cover-school-logo">
      <div class="cover-school-name">COLEGIO PAULO FREIRE</div>
    </div>

    <div class="end-gem">🌙</div>
    <h2 class="end-title">Fin del Grimorio</h2>
    <div class="cover-ornament-line"></div>
    
    <p class="end-text">
      Los <strong>{len(spells)} hechizos</strong> han sido revelados.<br><br>
      A través de este grimorio, los alumnos aprenden que la Inteligencia Artificial no es magia misteriosa, sino una disciplina creativa que responde a la precisión de nuestro lenguaje, la estructura de nuestras ideas y la potencia de nuestra imaginación.
    </p>

    <div class="end-gem" style="font-size:20pt;">✦ ✦ ✦</div>
    
    <div class="cover-footer-note" style="margin-top:10mm;">
      PROYECTO EDUCATIVO DE ARTE DIGITAL E INTELIGENCIA ARTIFICIAL<br>
      ROBÓTICA Y TECNOLOGÍA · COLEGIO PAULO FREIRE
    </div>
  </div>

</body>
</html>
"""
    return html

def main():
    print("1. Cargando hechizos desde spells.js...")
    spells = load_spells()
    print(f"   -> {len(spells)} hechizos cargados.")

    print("2. Generando documento HTML imprimible...")
    html_content = generate_html(spells)
    html_path = os.path.join(WORKSPACE, "libro_de_hechizos_imprimir.html")
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"   -> Guardado HTML: {html_path} ({os.path.getsize(html_path)} bytes)")

    print("3. Compilando archivo PDF de alta resolución con Playwright...")
    pdf_path = os.path.join(WORKSPACE, "libro_de_hechizos.pdf")
    chrome_exe = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    if not os.path.exists(chrome_exe):
        chrome_exe = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=chrome_exe)
        page = browser.new_page()
        file_url = f"file:///{html_path.replace(os.sep, '/')}"
        page.goto(file_url, wait_until="networkidle")
        page.wait_for_timeout(2000)
        page.pdf(
            path=pdf_path,
            format="A4",
            print_background=True,
            prefer_css_page_size=True,
            margin={"top": "0mm", "bottom": "0mm", "left": "0mm", "right": "0mm"}
        )
        browser.close()

    print(f"4. ¡PDF generado con éxito!")
    print(f"   -> Ruta: {pdf_path}")
    print(f"   -> Tamaño: {os.path.getsize(pdf_path)} bytes")

if __name__ == "__main__":
    main()
