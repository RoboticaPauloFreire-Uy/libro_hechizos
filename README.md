# 📖 Libro de Hechizos — Grimorio Mágico de Transformaciones
### Colegio Paulo Freire · Robótica y Arte Digital

Grimorio interactivo en 3D para estudiantes de 5to y 6to año. Permite explorar transformaciones de personajes mediante Inteligencia Artificial, aprender a estructurar prompts profesionales utilizando **Las 5 Capas Didácticas**, descargar la foto base de práctica y forjar nuevas páginas de hechizos creadas por los alumnos.

---

## 🌟 Características

1. **Grimorio 3D Interactivo**:
   - Efecto realista de pasar páginas en 3D.
   - 14 Hechizos originales con ingredientes mágicos, conjuros en latín y comparativa Antes/Después con zoom en alta resolución.
2. **Pedagogía del Prompt (Las 5 Capas)**:
   - Capa 1: Estilo y Técnica
   - Capa 2: Ancla de Identidad (preservar el rostro natural)
   - Capa 3: Zonas de Mutación
   - Capa 4: Vestuario y Postura
   - Capa 5: Iluminación y Entorno
3. **Creador de Hechizos por Alumnos**:
   - Formulario guiado por capas que ensambla el prompt en vivo.
   - Botón para generar y copiar el prompt al portapapeles.
   - Subida de imagen generada con compresión automática en el navegador.
   - Inserción dinámica de nuevas hojas en el libro.
4. **100% Estático (Listo para GitHub Pages)**:
   - No requiere servidor ni Node.js.
   - Compatible con sincronización opcional en la nube (Firebase Realtime Database) y respaldo local (`localStorage` + importación/exportación JSON).
5. **Descarga Directa de Foto Base**:
   - Permite descargar la foto del profesor para utilizarla directamente en generadores de imágenes (Bing Image Creator, Google Gemini, ChatGPT, etc.).

---

## 🚀 Publicación en GitHub Pages

1. Ir a **Settings** > **Pages** en este repositorio de GitHub.
2. En **Build and deployment** > **Branch**, seleccionar la rama `main` (o `master`) y la carpeta `/ (root)`.
3. Guardar. En pocos segundos el libro estará disponible en:
   `https://roboticapaulofreire-uy.github.io/libro_hechizos/`

---

## 💻 Tecnologías Utilizadas

- **HTML5**: Estructura semántica, Canvas para compresión de imágenes.
- **CSS3**: Perspectiva 3D (`perspective`, `transform-style: preserve-3d`), variables CSS, filtros y animaciones.
- **JavaScript (ES6+)**: Lógica del libro, volteo interactivo, gestión de modales, clipboard API y Firebase compat.
