// ============================================================
//  📖 LIBRO DE HECHIZOS — Una página completa por hechizo
// ============================================================

// ── Datos de los Hechizos ──────────────────────────────────
const SPELLS = [
  {
    id: 1, name: "El Despertar del Dragón", subtitle: "Transformatio Draconis",
    icon: "🐉", color: "#c0392b", monster: "Dragón", difficulty: "⭐⭐⭐",
    ingredients: [
      { name: "Escamas de fuego eterno", icon: "🔥" },
      { name: "Aliento volcánico", icon: "🌋" },
      { name: "Ojos de reptil ancestral", icon: "🦎" }
    ],
    incantation: "¡Draconitus Metamorphus! ¡Que las escamas cubran tu piel!",
    prompt: `Transforma la cara de este hombre en una criatura dragón aterradora. Los rasgos faciales deben cambiar así: ojos reptilianos brillantes con pupilas verticales en ámbar y oro, escamas verdes y rojas iridiscentes cubriendo toda la cara, pequeños cuernos curvados emergiendo de la frente, mandíbula con colmillos visibles, fuego ardiendo dentro de la boca, humo saliendo de las fosas nasales. Mantené la forma original de la cara reconocible. Estilo arte digital de fantasía, iluminación dramática, fondo oscuro con brillo de fuego naranja. Muy detallado, cinematográfico.`,
    tips: "Usá una foto con buena iluminación y fondo claro. ¡Funciona mejor con la cara mirando de frente!",
    beforeImg: "img/foto-antes.png",
    afterImg:  "img/dragon-resultado.jpg",
    beforeLabel: "Foto original",
    afterLabel:  "¡Resultado del hechizo!",
  },
  {
    id: 2, name: "Maldición del Lobo", subtitle: "Lupus Maledictum",
    icon: "🐺", color: "#7f8c8d", monster: "Hombre Lobo", difficulty: "⭐⭐",
    ingredients: [
      { name: "Pelo de lobo lunar", icon: "🌕" },
      { name: "Aullido de medianoche", icon: "💨" },
      { name: "Garra del bosque oscuro", icon: "🐾" }
    ],
    incantation: "¡Lupinus Transformatum! ¡La luna llena te reclama!",
    prompt: `Una obra de arte digital de terror y fantasía cinematográfica que transforma a la persona de la imagen en un hombre lobo, preservando de manera estricta sus rasgos faciales exactos, su edad y su identidad reconocible bajo la transformación.

La persona conserva su estructura facial natural, su contextura y la expresión de su mirada, mientras su cabello se vuelve mucho más denso y salvaje, mezclándose con un pelaje áspero de tonos grisáceos y marrones que se extiende por toda la cara, las mejillas, el cuello y la frente, sin ocultar por completo sus facciones originales. Su rostro se adapta a una fisonomía híbrida: un hocico alargado de aspecto canino o lobuno con una nariz negra y húmeda, pero que mantiene la base y el ancho natural de su nariz original. Sus ojos conservan su forma y posición natural, pero ahora brillan con un intenso color ámbar y dorado salvaje bajo unas cejas pobladas y expresivas. Su boca, levemente abierta en un gesto de tensión o gruñido, revela colmillos afilados, manteniendo la forma de su mandíbula y labios. En la parte superior de la cabeza, se asoman orejas puntiagudas, peludas y naturales de lobo.

Lleva su misma ropa oscura desabrochada, que ahora se ve ligeramente desgastada o rasgada por la transformación. En la parte inferior, se alcanzan a ver sus manos, ásperas y cubiertas de pelo oscuro, con garras afiladas y oscuras que comienzan a emerger de sus dedos, manteniendo la postura de la toma.

El fondo es un bosque oscuro en una noche tormentosa de gran dramatismo, con una luna llena visible entre nubes densas y cargadas de lluvia. La iluminación es nocturna y cinematográfica, con una intensa luz plateada de luna que destaca los bordes de su pelaje y la lluvia que cae, complementada con sombras profundas y una atmósfera cargada de neblina y misterio. Rico en texturas, estilo de ilustración de fantasía y terror, primer plano, muy detallado.`,
    tips: "¡Mantené la cara visible y bien iluminada! El hechizo es más poderoso en noches de luna llena.",
    beforeImg: "img/foto-antes.png",
    afterImg:  "img/lobo-resultado.jpg",
    beforeLabel: "Foto original",
    afterLabel:  "¡Resultado del hechizo!",
  },
  {
    id: 3, name: "Ritual del No-Muerto", subtitle: "Mortis Resurrectum",
    icon: "🧟", color: "#27ae60", monster: "Zombie", difficulty: "⭐⭐⭐",
    ingredients: [
      { name: "Polvo de tumba centenaria", icon: "⚰️" },
      { name: "Tierra de camposanto", icon: "🪦" },
      { name: "Suspiro del más allá", icon: "👻" }
    ],
    incantation: "¡Mortuus Vivificatum! ¡Despierta entre los muertos!",
    prompt: `Transforma la cara de la persona de la imagen en un zombie de terror realista. La cara debe mostrar: piel pálida verdosa en descomposición con heridas y manchas de tierra, ojos verdes sobrenaturales brillantes, dientes oscurecidos, cabello despeinado con hojas secas, ropa oscura rasgada y sucia de tierra de cementerio. Mantené la forma del rostro reconocible. Fondo oscuro de cementerio antiguo con lápidas de piedra y árboles secos en noche de niebla. Estilo cine de horror cinemático, iluminación verde espeluznante, hiperdetallado.`,
    tips: "¡Cuidado! Este hechizo es muy poderoso. Mantené la mirada fija al frente.",
    beforeImg: "img/foto-antes.png",
    afterImg:  "img/zombi-resultado.jpg",
    beforeLabel: "Foto original",
    afterLabel:  "¡Resultado del hechizo!",
  },
  {
    id: 4, name: "Transformación Vampírica", subtitle: "Vampirus Eternum",
    icon: "🧛", color: "#8e44ad", monster: "Vampiro", difficulty: "⭐⭐",
    ingredients: [
      { name: "Capa de murciélago nocturno", icon: "🦇" },
      { name: "Rosa negra marchita", icon: "🥀" },
      { name: "Gota de sangre carmesí", icon: "🩸" }
    ],
    incantation: "¡Vampirus Metamorphus! ¡La oscuridad te adopta por siempre!",
    prompt: `Una obra de arte digital de terror y fantasía cinematográfica que transforma a la persona de la imagen en un vampiro, preservando de manera estricta sus rasgos faciales exactos, su edad y su identidad reconocible.

La persona conserva su estructura facial auténtica, su mirada natural y su cabello característico, sutilmente peinado hacia atrás pero manteniendo su textura y tono originales. Su piel se vuelve muy pálida y fría, como la porcelana, pero conserva sus líneas y textura natural sin hacerlo parecer más joven o idealizado. Sus ojos ahora son de un brillante color rojo carmesí con sombras oscuras y hundidas debajo, pero mantienen la forma de sus ojos originales. Sus cejas están ligeramente más oscuras y arqueadas de manera dramática. Un fino y brillante hilo de sangre corre por la comisura de su boca, donde se alcanzan a ver colmillos de vampiro afilados detrás de los labios.

Lleva una capa de vampiro oscura y de cuello alto con intrincados patrones visibles en el cuello, colocada sobre la forma de su cuello original.

El fondo es el interior de un castillo gótico oscuro y tenuemente iluminado con pilares de piedra desmoronados, murciélagos volando a lo lejos y el cálido y parpadeante brillo de las velas. La iluminación atmosférica es una mezcla dramática de púrpura profundo, sombras y rojo sangre, con la luz de la luna capturando los bordes de su figura, creando una transformación altamente detallada y espeluznante, pero profundamente personal. Rico en texturas, estilo de ilustración de fantasía y terror, primer plano.`,
    tips: "Los vampiros odian la luz del sol. Usá una foto en interiores para el mejor efecto.",
    beforeImg: "img/foto-antes.png",
    afterImg:  "img/vampiro-resultado.jpg",
    beforeLabel: "Foto original",
    afterLabel:  "¡Resultado del hechizo!",
  },
  {
    id: 5, name: "El Ojo del Cíclope", subtitle: "Cyclopis Magnum",
    icon: "👁️", color: "#e67e22", monster: "Cíclope", difficulty: "⭐⭐⭐⭐",
    ingredients: [
      { name: "Piedra del Olimpo antiguo", icon: "🏛️" },
      { name: "Roca de magma agrietada", icon: "🪨" },
      { name: "Visión dorada de los titanes", icon: "⚡" }
    ],
    incantation: "¡Monocularis Gigantum! ¡Que un solo ojo vea todo el mundo!",
    prompt: `Una obra de arte digital de fantasía y mitología de gran escala, que transforma a la persona en un Cíclope gigante de la mitología griega, preservando de manera estricta su rostro reconocible, su edad y su identidad bajo la monstruosa transformación.

La persona conserva su estructura facial natural, su fisonomía y su cabello, extendiéndose por una mandíbula que se ha vuelto más masiva, ancha y cuadrada, pero con la misma forma y base. Su piel se transforma en una textura gris-azulada, áspera, gruesa y agrietada como la piedra o la roca antigua, conservando de forma muy visible sus facciones y marcas naturales de expresión, especialmente alrededor de la boca y las mejillas. En el centro exacto de la frente y de su rostro, sus dos ojos originales se han fusionado en un único y enorme ojo central, de mirada intensa y profunda, con un iris que brilla en tonos amarillos y dorados, bajo una única y gruesa ceja salvaje que une sus rasgos. Su nariz, ubicada justo debajo del ojo único, es ahora más ancha, aplastada y ruda, pero conserva la base y la esencia de su nariz original. En la frente y en las sienes se aprecian pequeñas protuberancias rocosas o pequeños cuernos que se funden con su piel. Su cuello se vuelve sumamente musculoso, ancho y colosal, propio de un gigante.

Viste ropa rústica de aspecto antiguo o una túnica de cuero y tela desgastada y rasgada sobre los hombros, manteniendo la postura natural de la toma original en primer plano, con el cuerpo ligeramente inclinado de frente.

El fondo muestra un paisaje épico y dramático de ruinas griegas antiguas y derruidas en lo alto de una montaña, bajo un cielo tormentoso de noche, con nubes oscuras, relámpagos lejanos y la luz de la tormenta que resalta las texturas rocosas de su piel y los bordes de su figura. Iluminación cinematográfica, rica en texturas de piedra, estilo de ilustración de fantasía histórica y de terror, primer plano, muy detallado.`,
    tips: "Usá una foto de frente para que el hechizo funcione perfectamente. ¡El gran ojo lo ve todo!",
    beforeImg: "img/foto-antes.png",
    afterImg:  "img/ciclope-resultado.jpg",
    beforeLabel: "Foto original",
    afterLabel:  "¡Resultado del hechizo!",
  },
  {
    id: 6, name: "Piel de Bestia", subtitle: "Bestia Ferocium",
    icon: "👹", color: "#c0392b", monster: "Bestia Oscura", difficulty: "⭐⭐⭐",
    ingredients: [
      { name: "Garra de la fiera del abismo", icon: "🐾" },
      { name: "Rugido de caverna profunda", icon: "🌋" },
      { name: "Cuerno de bestia ancestral", icon: "🦏" }
    ],
    incantation: "¡Ferox Bestiarium! ¡Que la bestia interior despierte!",
    prompt: `Una ilustración cinematográfica de fantasía y terror que transforma a la persona de la imagen en una imponente bestia oscura, conservando estrictamente su rostro natural, su edad y su fisonomía auténtica. 

Su piel se vuelve de cuero áspero rojizo-marrón oscuro con escamas y protuberancias, manteniendo todas sus facciones reales. Tiene ojos naranja demoníacos y brillantes, dos cuernos cortos y oscuros en la frente, nariz ancha y orejas puntiagudas. Su boca, levemente abierta en un gruñido, muestra dientes afilados y pequeños colmillos en la mandíbula inferior. 

Viste su ropa oscura o atuendo rústico desgastado en su postura original, con un cuello muy musculoso. Fondo oscuro de bosque tormentoso con densa niebla roja brillante y luz de luna. Muy detallado, primer plano, preservando su identidad reconocible.`,
    tips: "Cuanto más expresiva sea la foto, más fiero quedará el resultado. ¡La bestia duerme en tu interior!",
    beforeImg: "img/foto-antes.png",
    afterImg:  "img/bestia-resultado.jpg",
    beforeLabel: "Foto original",
    afterLabel:  "¡Resultado del hechizo!",
  },
  {
    id: 7, name: "Hechizo de Medusa", subtitle: "Medusa Serpentina",
    icon: "🐍", color: "#16a085", monster: "Medusa", difficulty: "⭐⭐⭐⭐",
    ingredients: [
      { name: "Veneno de víbora antigua", icon: "🧪" },
      { name: "Mirada petrificante de piedra", icon: "👁️" },
      { name: "Escama dorada de Gorgona", icon: "🐍" }
    ],
    incantation: "¡Gorgonis Metamorphus! ¡Que las serpientes coronen tu cabeza!",
    prompt: `Una ilustración cinematográfica de fantasía y terror que transforma a la persona de la imagen en una versión de Medusa de la mitología griega, conservando estrictamente su rostro natural, su edad y sus facciones reconocibles.

Su cabello se transforma por completo en docenas de serpientes vivas, ondulantes y furiosas de tonos verdes, dorados y grises que se agitan en todas direcciones. Su piel se vuelve ligeramente verde-grisácea con sutiles escamas de serpiente visibles en las mejillas y el cuello, pero conservando sus arrugas y facciones reales. Sus ojos brillan con una intensa y sobrenatural luz dorada-verde capaz de petrificar, bajo sus cejas naturales. Su boca, levemente abierta, muestra una lengua bífida visible.

Viste un ropaje antiguo o túnica rústica deshilachada en su postura original. Fondo oscuro de ruinas griegas antiguas bajo un cielo tormentoso de noche, con relámpagos lejanos y luz de luna. Muy detallado, primer plano, preservando su identidad reconocible.`,
    tips: "Usá una foto donde se vea bien el cabello para mejores resultados. ¡Cuidado con su mirada de piedra!",
    beforeImg: "img/foto-antes.png",
    afterImg:  "img/medusa-resultado.jpg",
    beforeLabel: "Foto original",
    afterLabel:  "¡Resultado del hechizo!",
  },
  {
    id: 8, name: "Maldición de Frankenstein", subtitle: "Frankensteinicus Reanimatus",
    icon: "⚡", color: "#27ae60", monster: "Frankenstein", difficulty: "⭐⭐",
    ingredients: [
      { name: "Rayo de tormenta eléctrica", icon: "⚡" },
      { name: "Tuerca de acero oxidado", icon: "🔩" },
      { name: "Hilo quirúrgico centenario", icon: "🧵" }
    ],
    incantation: "¡Electrus Reanimatum! ¡Que la electricidad te dé vida!",
    prompt: `Una ilustración cinematográfica de fantasía y terror que transforma a la persona de la imagen en el monstruo de Frankenstein, conservando estrictamente su rostro natural, su edad y su fisonomía auténtica.

Su estructura facial y expresión real se mantienen bajo una piel gris-verde enfermiza, con suturas, grapas y cicatrices visibles en toda la cara y el cuello. Su frente se vuelve plana y cuadrada en la parte superior con una cicatriz cosida, y de los lados de su cuello sobresalen dos grandes pernos de metal oxidados. Conserva sus ojos tristes y caídos con párpados pesados y ojeras oscuras. Su mandíbula es más cuadrada y pesada, al igual que su cabello despeinado y oscurecido.

Viste un abrigo oscuro y desgastado de época sobre su prenda original. Fondo de un laboratorio gótico de piedra con equipos eléctricos que chispean, bobinas, ventanas y rayos en una noche de tormenta. Muy detallado, primer plano, de estilo cinematográfico, preservando su identidad.`,
    tips: "¡VIVE! Usá una foto de frente para alinear bien las costuras y los pernos del cuello.",
    beforeImg: "img/foto-antes.png",
    afterImg:  "img/frankenstein-resultado.jpg",
    beforeLabel: "Foto original",
    afterLabel:  "¡Resultado del hechizo!",
  },
  {
    id: 9, name: "Invocación del Alienígena", subtitle: "Alienigena Cosmicus",
    icon: "👽", color: "#1abc9c", monster: "Alienígena", difficulty: "⭐⭐⭐",
    ingredients: [
      { name: "Polvo de nebulosa estelar", icon: "✨" },
      { name: "Cristal cósmico ultravioleta", icon: "💎" },
      { name: "Frecuencia del espacio profundo", icon: "📡" }
    ],
    incantation: "¡Alienigena Transformum! ¡Las estrellas te reclaman!",
    prompt: `Una ilustración cinematográfica de fantasía y ciencia ficción que transforma a la persona de la imagen en una criatura alienígena, conservando estrictamente su rostro natural, su edad y su identidad reconocible.

Su cabeza se vuelve más alargada y grande, manteniendo su fisonomía y expresión real. Su piel se vuelve suave, de un tono gris o azul claro y ligeramente translúcida con venas sutiles y un tenue brillo bioluminiscente. Tiene enormes ojos almendrados, completamente negros y brillantes, su nariz se reduce a pequeñas ranuras sutiles, y su boca se vuelve fina y pequeña. Las orejas desaparecen bajo su cabeza.

Viste su prenda oscura original o un atuendo futurista sencillo en su postura original, con el cuello ligeramente alargado. Fondo del espacio profundo con nebulosas de colores y estrellas lejanas. Muy detallado, primer plano, de estilo cinematográfico, preservando su identidad reconocible.`,
    tips: "Usá una foto bien iluminada. ¡Los alienígenas prefieren el misterio del espacio profundo!",
    beforeImg: "img/foto-antes.png",
    afterImg:  "img/alienigena-resultado.jpg",
    beforeLabel: "Foto original",
    afterLabel:  "¡Resultado del hechizo!",
  },
  {
    id: 10, name: "El Portal del Demonio", subtitle: "Daemonicus Supremum",
    icon: "😈", color: "#c0392b", monster: "Demonio", difficulty: "⭐⭐⭐⭐⭐",
    ingredients: [
      { name: "Fuego del inframundo eterno", icon: "🔥" },
      { name: "Cuerno de demonio anciano", icon: "🦏" },
      { name: "Ceniza de azufre y piedra", icon: "🌋" }
    ],
    incantation: "¡Daemonicus Maximus! ¡Las llamas del inframundo te transforman!",
    prompt: `Una ilustración cinematográfica de fantasía oscura y terror, en plano medio, que transforma a la persona de la imagen en un poderoso demonio del inframundo, preservando de manera estricta sus rasgos faciales exactos, su edad y su identidad reconocible bajo la monstruosa transformación.

La persona conserva su estructura facial natural, su fisonomía y la expresión profunda de su mirada. Su piel se transforma en un color rojo y carmesí oscuro, con textura rugosa, venas oscuras muy visibles y sutiles patrones de fuego bajo la piel, pero conservando de forma muy visible sus arrugas y líneas naturales de expresión.

De su frente y sienes crecen dos grandes cuernos negros, curvados, ásperos y prominentes, que se funden de manera natural con su piel y su cabello. Sus ojos conservan su forma y posición natural, pero ahora brillan con un intenso color amarillo ardiente y pupilas de ranura vertical negra, bajo unas cejas en ángulo pronunciado. Sus orejas, ahora puntiagudas y de aspecto demoníaco, se asoman a los lados de la cabeza. Su boca, abierta en una sonrisa amplia y maliciosa, revela colmillos afilados, mientras que su mentón se ve levemente más alargado y puntiagudo.

Lleva su misma ropa oscura deshilachada y rasgada por la transformación. Su cuello se vuelve musculoso y ancho, con el cuerpo ligeramente inclinado de frente. Pequeñas llamas, chispas y brasas flotan cerca de su rostro y sus hombros.

El fondo muestra un abismo infernal con fuego ardiente y un portal oscuro y antiguo del que emana lava y un brillo anaranjado y rojizo, con nubes de ceniza y humo que se filtran entre las rocas. La iluminación es nocturna y cinematográfica, con una intensa luz de fuego y lava que resalta las texturas ásperas de su piel roja y las venas oscuras. Rico en texturas, estilo de ilustración de fantasía y terror, primer plano, muy detallado.`,
    tips: "¡Solo para los más valientes! Usá una foto frontal para que los cuernos emerjan perfectamente.",
    beforeImg: "img/foto-antes.png",
    afterImg:  "img/demonio-resultado.jpg",
    beforeLabel: "Foto original",
    afterLabel:  "¡Resultado del hechizo!",
  },
  {
    id: 11, name: "Calavera de Halloween", subtitle: "Ossium Resurrectum",
    icon: "💀", color: "#e67e22", monster: "Esqueleto SFX", difficulty: "⭐⭐",
    ingredients: [
      { name: "Pigmento óseo y carbón", icon: "🎨" },
      { name: "Luz de calabaza espectral", icon: "🎃" },
      { name: "Niebla de camposanto", icon: "🌫️" }
    ],
    incantation: "¡Ossium Cinematographicus! ¡La calavera de ultratumba despierta!",
    prompt: `Una fotografía cinematográfica y fotorrealista (un fotograma de película) que captura a la persona de la imagen con un detallado maquillaje de esqueleto para Halloween, conservando estrictamente su rostro natural, su edad y sus facciones faciales reconocibles. 

Su fisonomía, expresión y arrugas reales se mantienen visibles bajo un elaborado maquillaje artístico (SFX) de calavera: cuencas de los ojos y la punta de la nariz pintadas de negro mate profundo, y sombreado oscuro en pómulos y mandíbula que resalta su estructura ósea, enmarcando su rostro con naturalidad. Tiene líneas de dientes de esqueleto pintadas sobre los labios, y el cuello maquillado con vértebras y clavículas en tonos óseos y sombras teatrales. Su cabello luce algo despeinado y con sutil polvo escénico.

Viste un saco o chaqueta oscura, desgastada y rústica con cuello levantado. El fondo muestra un cementerio antiguo y oscuro con lápidas de piedra, árboles retorcidos, niebla baja iluminada por calabazas de Halloween a lo lejos y una gran luna llena brillante. Iluminación nocturna cinematográfica, grano de película de 35mm, fotorrealista y muy detallado, preservando su identidad sin parecer ilustración ni dibujo animado.`,
    tips: "¡Especial de Halloween! Con una iluminación suave, el contraste del maquillaje de calavera queda espectacular.",
    beforeImg: "img/foto-antes.png",
    afterImg:  "img/esqueleto-resultado.jpg",
    beforeLabel: "Foto original",
    afterLabel:  "¡Resultado del hechizo!",
  },
  {
    id: 12, name: "Aparición Espectral", subtitle: "Phantasma Aeternum",
    icon: "👻", color: "#4a90e2", monster: "Fantasma Espectral", difficulty: "⭐⭐⭐",
    ingredients: [
      { name: "Ectoplasma lunar translúcido", icon: "🌌" },
      { name: "Niebla de mansión abandonada", icon: "🏚️" },
      { name: "Suspiro del más allá", icon: "💨" }
    ],
    incantation: "¡Phantasma Aeternum! ¡Que tu cuerpo se vuelva etéreo y luminoso!",
    prompt: `Una fotografía cinematográfica y fotorrealista de plano medio (un fotograma de película de misterio y terror de Halloween) que captura la aparición espectral y fantasmal de la persona de la imagen, preservando de manera estricta su rostro natural, su edad y su fisonomía reconocible.

La persona conserva su estructura facial, su fisonomía y su expresión natural, ahora con un aspecto etéreo, flotante y desordenado. Todo su cuerpo y su vestimenta son semitransparentes, revelando sutilmente el fondo a través de su forma translúcida. Su figura entera, incluyendo su rostro, se percibe de un tono frío, pálido y gélido (azul-grisáceo o blanco espectral), desvaneciéndose en los bordes y desprendiendo un leve brillo bioluminiscente natural y jirones de neblina o humo espectral que flotan desde sus hombros y ropa.

Sus ojos, que conservan su forma y mirada natural, brillan con una tenue, misteriosa y fría luz sobrenatural (blanco-azulada) que parece emanar desde el interior. Tiene una expresión misteriosa, profunda y contemplativa, con la boca cerrada y sus facciones fundiéndose con el aspecto translúcido y fantasmal.

Viste una versión fantasmal, deshilachada y desvaída de su atuendo oscuro, que se desintegra en una niebla flotante hacia la parte inferior, sugiriendo que está suspendido o levitando.

El escenario, de noche y con el desenfoque natural de una lente de cine, muestra el exterior de una casa abandonada y derruida, con maderas gastadas, ventanas rotas y vegetación que invade la estructura. El entorno está cubierto por una densa niebla baja iluminada por una fría luz de luna que se filtra entre nubes y árboles secos, creando un ambiente tenebroso. Imagen de 35mm, grano de película sutil, fotorrealista y de apariencia real, sin rastro de ilustración digital, logrando que el espectro sea una presencia natural en el espacio.`,
    tips: "¡Un fotograma espectral! Cuanto más frontal y sereno el rostro, más hipnóticos lucen los ojos bioluminiscentes.",
    beforeImg: "img/foto-antes.png",
    afterImg:  "img/fantasma-resultado.jpg",
    beforeLabel: "Foto original",
    afterLabel:  "¡Resultado del hechizo!",
  },
  {
    id: 13, name: "El Despertar de la Momia", subtitle: "Mumia Sarcophagus",
    icon: "🏺", color: "#b7950b", monster: "Momia Egipcia", difficulty: "⭐⭐",
    ingredients: [
      { name: "Vendas de lino milenario", icon: "🩹" },
      { name: "Arena dorada del desierto", icon: "⏳" },
      { name: "Fuego sagrado de antorcha", icon: "🔥" }
    ],
    incantation: "¡Mumia Exsurgat! ¡Las arenas del tiempo te envuelven!",
    prompt: `Un fotograma de película, fotorrealista y de primer plano, que captura a la persona de la imagen como una antigua momia para Halloween, conservando estrictamente su rostro natural, su edad y sus facciones reconocibles.

Su cabeza, cuello y hombros están envueltos en múltiples capas de vendas de lino antiguas, deshilachadas y desgastadas en tonos de beige a marrón oscuro, cubiertas de polvo y arena del desierto. Las vendas dejan visible de manera natural el centro de su rostro: sus propios ojos (conservando su forma y mirada natural), su nariz, boca y líneas de expresión, integrándose suavemente con los vendajes deshechos. Sus ojos muestran un sutil y misterioso brillo dorado entre las sombras y el polvo, con una expresión tensa y misteriosa. Viste los vendajes deshechos combinados con jirones de ropa rústica oscura de época.

El fondo nocturno, desenfocado con lente de cine (bokeh), muestra la base de una antigua pirámide egipcia de piedra entre dunas de arena, iluminada por la luz trémula y anaranjada de antorchas y fogatas encendidas, con humo, chispas y la fría luz de la luna en una noche de tormenta de arena. Toma natural de 35mm, grano sutil de película, rico en texturas, preservando fielmente la identidad de la imagen sin parecer una ilustración.`,
    tips: "¡Texturas del desierto! Una foto bien centrada permite que los vendajes enmarquen los ojos con misterio y realismo.",
    beforeImg: "img/foto-antes.png",
    afterImg:  "img/momia-resultado.jpg",
    beforeLabel: "Foto original",
    afterLabel:  "¡Resultado del hechizo!",
  },
  {
    id: 14, name: "El Guardián de Calabaza", subtitle: "Cucurbita Maledicta",
    icon: "🎃", color: "#e67e22", monster: "Hombre Calabaza", difficulty: "⭐⭐",
    ingredients: [
      { name: "Corteza de calabaza encantada", icon: "🎃" },
      { name: "Llama de vela de Jack-o'-Lantern", icon: "🕯️" },
      { name: "Enredaderas del huerto oscuro", icon: "🌿" }
    ],
    incantation: "¡Cucurbita Vivificatum! ¡El fuego del huerto arde en tu interior!",
    prompt: `Un fotograma de película, fotorrealista y de primer plano, que captura a la persona de la imagen transformada en un misterioso personaje de calabaza de Halloween, conservando estrictamente su rostro natural, su edad y sus facciones reconocibles.

Su piel adquiere una textura de corteza de calabaza, rugosa, con relieves y de tonos anaranjados y terrosos, pero manteniendo visibles todas sus líneas de expresión, gestos y fisonomía real. Sus ojos (con sus párpados y mirada natural) y el interior de su boca (que se asoma sutilmente entre los labios) brillan con una cálida y ardiente luz interior de tono naranja-amarillento, como un jack-o'-lantern encendido en la noche. De su cuello, hombros y entre su cabello brotan pequeñas ramas secas, enredaderas oscuras y hojas marchitas de calabaza que se entrelazan de manera orgánica en su rostro y vestimenta. Viste un atuendo rústico, oscuro y desgastado, cubierto de hojarasca y enredaderas.

El fondo nocturno, desenfocado con lente de cine (bokeh), muestra un campo de calabazas (pumpkin patch) cubierto por una densa niebla baja, bajo la fría luz de una gran luna llena, con el sutil brillo de calabazas encendidas a lo lejos y árboles secos retorcidos. Toma natural de 35mm, grano sutil de película, rico en texturas, de apariencia real y cinematográfica sin parecer una ilustración, preservando fielmente la identidad con un fuerte parecido físico.`,
    tips: "¡Pura esencia de Halloween! Los ojos ardientes y las ramas entretejidas crean un efecto orgánico impresionante.",
    beforeImg: "img/foto-antes.png",
    afterImg:  "img/calabaza-resultado.jpg",
    beforeLabel: "Foto original",
    afterLabel:  "¡Resultado del hechizo!",
  },
];

// ── Estructura Dinámica de Páginas ────────────────────────
function buildSpreadsList() {
  return [
    { type: 'cover',         label: 'Portada' },
    { type: 'intro',         label: 'Instrucciones' },
    { type: 'prompt-guide',  label: '¿Qué es un Prompt?' },
    { type: 'prompt-layers', label: 'Las 5 Capas del Prompt' },
    ...SPELLS.map((s) => ({
      type: 'spell',
      spell: s,
      label: (s.student || s.team) ? `${s.name} (${s.student || s.team})` : `Hechizo ${s.id} · ${s.monster}`,
    })),
    { type: 'end',           label: 'Fin del Grimorio' },
  ];
}

let SPREADS = buildSpreadsList();
let TOTAL_SPREADS = SPREADS.length;
let currentSpread = 0;
let isAnimating   = false;
let currentSpell  = null;

function rebuildSpreads() {
  SPREADS = buildSpreadsList();
  TOTAL_SPREADS = SPREADS.length;
  updateNav();
}

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  loadLocalCustomSpells();
  initCloudSync();
  renderSpread(currentSpread);
  updateNav();
  checkPactStatus();
});

// ── Pacto Mágico de Respeto (Advertencia Escolar) ──────────
function checkPactStatus() {
  const warningModal = document.getElementById('warningModal');
  if (!warningModal) return;
  // Si ya lo aceptó en esta sesión, no molestamos de nuevo
  if (sessionStorage.getItem('magical_pact_accepted') === 'true') {
    warningModal.classList.remove('active');
  } else {
    warningModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function acceptPact() {
  const warningModal = document.getElementById('warningModal');
  const btn = document.getElementById('acceptWarningBtn');
  if (btn) {
    btn.innerHTML = '✨ ¡Pacto Sellado! Abriendo grimorio...';
    btn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
    createSparkles(btn);
  }
  
  sessionStorage.setItem('magical_pact_accepted', 'true');
  if (navigator.vibrate) navigator.vibrate([40, 30, 80]);

  setTimeout(() => {
    if (warningModal) {
      warningModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }, 600);
}

// ══════════════════════════════════════════════════════════
//  RENDERIZADO
// ══════════════════════════════════════════════════════════
function renderSpread(index) {
  const spread = SPREADS[index];

  const { leftHTML, rightHTML, pageL, pageR } = buildSpread(spread, index);

  document.getElementById('pageLeft').innerHTML  = leftHTML;
  document.getElementById('pageRight').innerHTML = rightHTML;
  document.getElementById('pageNumL').textContent = pageL;
  document.getElementById('pageNumR').textContent = pageR;
}

function buildSpread(spread, index) {
  const pNum = (n) => `— ${n} —`;
  switch (spread.type) {

    case 'cover':
      return {
        leftHTML:  buildBackCover(),
        rightHTML: buildCover(),
        pageL: '', pageR: '',
      };

    case 'intro':
      return {
        leftHTML:  buildIntroLeft(),
        rightHTML: buildIntroRight(),
        pageL: pNum(1), pageR: pNum(2),
      };

    case 'prompt-guide':
      return {
        leftHTML:  buildPromptGuideLeft(),
        rightHTML: buildPromptGuideRight(),
        pageL: pNum(3), pageR: pNum(4),
      };

    case 'prompt-layers':
      return {
        leftHTML:  buildPromptLayersLeft(),
        rightHTML: buildPromptLayersRight(),
        pageL: pNum(5), pageR: pNum(6),
      };

    case 'spell': {
      const n = index;   // 4..13
      return {
        leftHTML:  buildSpellLeft(spread.spell),
        rightHTML: buildSpellRight(spread.spell),
        pageL: pNum(n * 2 - 1), pageR: pNum(n * 2),
      };
    }

    case 'end':
      return {
        leftHTML:  buildEndLeft(),
        rightHTML: buildEndRight(),
        pageL: pNum(TOTAL_SPREADS * 2 - 1), pageR: '',
      };

    default:
      return { leftHTML: '', rightHTML: '', pageL: '', pageR: '' };
  }
}

// ── PORTADA ───────────────────────────────────────────────
function buildCover() {
  return `
    <div class="cover-page">
      <div class="cover-border"></div>
      
      <!-- Escudo del Colegio Paulo Freire en la tapa -->
      <div class="cover-school-badge">
        <img src="img/logo-colegio.png" alt="Colegio Paulo Freire" class="cover-school-logo" />
        <span class="cover-school-name">COLEGIO PAULO FREIRE</span>
      </div>

      <div class="cover-divider"></div>
      <div class="cover-title">Libro de<br>Hechizos</div>
      <div class="cover-divider"></div>
      
      <div class="cover-icon-big">🔮</div>
      <div class="cover-subtitle">✦ Grimorio de Transformaciones ✦</div>
      <div class="cover-edition">Proyecto de Arte Digital · ${SPELLS.length} Hechizos</div>
    </div>`;
}

function buildBackCover() {
  return `
    <div class="back-cover-page">
      <div class="back-cover-gem">⚗️</div>
      <div class="back-cover-text">Grimorio<br>de Transformaciones<br>Mágicas</div>
      <div class="back-cover-gem" style="font-size:1rem;margin-top:20px;">✦</div>
    </div>`;
}

// ── INTRO ─────────────────────────────────────────────────
function buildIntroLeft() {
  return `<div class="text-page">
    <div class="page-heading"><span class="orn">⚗️</span>Instrucciones<span class="orn">⚗️</span></div>
    <p class="page-intro-text">Este grimorio contiene <strong>${SPELLS.length} hechizos</strong> que transforman tu rostro en un monstruo usando Inteligencia Artificial.</p>
    ${['Pasá las páginas hasta el hechizo que querés usar.',
       'Copiás el hechizo con el botón <strong>Copiar Hechizo</strong>.',
       'Abrís <strong>Bing Image</strong>, <strong>Gemini</strong> o <strong>ChatGPT</strong>.',
       'Subís tu foto de cara (fondo claro, cara de frente).',
       'Pegás el hechizo copiado en el campo de texto.',
       '¡Presionás Generar y observás la transformación! 🪄',
    ].map((t, i) => `
      <div class="intro-step">
        <div class="intro-step-num">${['I','II','III','IV','V','VI'][i]}.</div>
        <div class="intro-step-text">${t}</div>
      </div>`).join('')}
    <p class="page-intro-text" style="margin-top:auto;font-size:.73rem;opacity:.6;">✦ Mejor resultado: cara iluminada, sin gorra, mirando de frente ✦</p>
  </div>`;
}

function buildIntroRight() {
  return `<div class="text-page">
    <div class="page-heading"><span class="orn">🔧</span>Herramientas<span class="orn">🔧</span></div>
    <p class="page-intro-text" style="margin-bottom:6px;">Usá estas herramientas de IA para invocar la transformación:</p>
    
    <div class="tool-cards-list">
      <a href="https://www.bing.com/images/create" target="_blank" rel="noopener" class="tool-card">
        <span class="tool-card-icon">🎨</span>
        <div class="tool-card-info">
          <span class="tool-card-name">Bing Image Creator</span>
          <span class="tool-card-desc">bing.com/images/create — DALL·E 3 (cuenta Microsoft)</span>
        </div>
      </a>

      <a href="https://gemini.google.com/" target="_blank" rel="noopener" class="tool-card">
        <span class="tool-card-icon">✨</span>
        <div class="tool-card-info">
          <span class="tool-card-name">Google Gemini</span>
          <span class="tool-card-desc">gemini.google.com — Adjuntá la foto y pegá el prompt</span>
        </div>
      </a>

      <a href="https://chatgpt.com/" target="_blank" rel="noopener" class="tool-card">
        <span class="tool-card-icon">🤖</span>
        <div class="tool-card-info">
          <span class="tool-card-name">ChatGPT</span>
          <span class="tool-card-desc">chatgpt.com — Adjuntá la foto y pegá el hechizo</span>
        </div>
      </a>
    </div>

    <div style="margin-top:6px;background:rgba(41,128,185,0.08);border:1px solid rgba(41,128,185,0.3);border-radius:6px;padding:6px 10px;text-align:center;">
      <span style="font-family:var(--font-heading);font-size:.68rem;color:#1a5276;font-weight:700;display:block;margin-bottom:2px;">
        📸 ¿Querés practicar? Usá la foto del profe:
      </span>
      <button class="topbar-btn btn-download-profe" onclick="downloadBasePhoto()" style="font-size:.70rem;padding:3px 10px;margin:2px auto 0;">
        📥 Descargar Foto Base de Ejemplo
      </button>
    </div>

    <div style="text-align:center;margin-top:auto;padding:4px 0;">
      <div style="font-size:1.4rem;margin-bottom:2px;">🧙‍♀️</div>
      <div style="font-family:var(--font-heading);font-size:.68rem;color:var(--ink-faded);letter-spacing:.08em;text-transform:uppercase;">
        Pasá la página para entender los hechizos →
      </div>
    </div>
  </div>`;
}

// ── GUÍA DIDÁCTICA: ¿QUÉ ES UN PROMPT Y OBJETIVOS? ───────
function buildPromptGuideLeft() {
  return `<div class="text-page">
    <div class="page-heading"><span class="orn">🧠</span>¿Qué es un Prompt?<span class="orn">🧠</span></div>
    <p class="page-intro-text">Un <strong>prompt</strong> es la <em>fórmula mágica</em>: la instrucción escrita que le dice a la Inteligencia Artificial exactamente qué transformar.</p>

    <div class="spell-section-label" style="margin-top:2px;">🎯 Los 3 Objetivos de este Prompt</div>

    <div class="intro-step" style="padding:4px 0;">
      <div class="intro-step-num" style="color:#2980b9;">1.</div>
      <div class="intro-step-text"><strong>Conservar la identidad:</strong> Mantener los rasgos principales de tu cara reconocibles.</div>
    </div>

    <div class="intro-step" style="padding:4px 0;">
      <div class="intro-step-num" style="color:#8e44ad;">2.</div>
      <div class="intro-step-text"><strong>Transformación monstruosa:</strong> Textura, colmillos, ojos o cuernos según el conjuro.</div>
    </div>

    <div class="intro-step" style="padding:4px 0;">
      <div class="intro-step-num" style="color:#d35400;">3.</div>
      <div class="intro-step-text"><strong>Atmósfera épica:</strong> Fondos oscuros, niebla, fuego y luces cinematográficas.</div>
    </div>

    <p class="page-intro-text" style="margin-top:auto;font-size:.73rem;opacity:.6;">✦ La IA sigue instrucciones claras: mientras más específico el hechizo, mejor la magia ✦</p>
  </div>`;
}

function buildPromptGuideRight() {
  return `<div class="text-page">
    <div class="page-heading"><span class="orn">🎭</span>¿Lleva Rol o No?<span class="orn">🎭</span></div>
    
    <div style="background:rgba(192,57,43,0.08);border-left:3px solid #c0392b;padding:6px 10px;border-radius:0 6px 6px 0;margin-top:2px;">
      <strong style="font-family:var(--font-heading);font-size:.76rem;color:#8b1a2a;display:block;">❌ ¿Por qué NO usar un Rol largo?</strong>
      <p style="font-family:var(--font-ui);font-size:.73rem;color:var(--ink-mid);margin:0;line-height:1.4;">
        En IAs generativas como <em>Bing Image</em>, <em>Gemini</em> o <em>ChatGPT</em>, decirle <em>"Actúa como un pintor digital..."</em> confunde al generador: ¡podría dibujar a una persona pintando en un caballete en vez de transformar tu rostro!
      </p>
    </div>

    <div style="background:rgba(39,174,96,0.08);border-left:3px solid #27ae60;padding:6px 10px;border-radius:0 6px 6px 0;margin-top:6px;">
      <strong style="font-family:var(--font-heading);font-size:.76rem;color:#1e7e43;display:block;">✔️ Lo que SÍ conviene (Estilo Directo):</strong>
      <p style="font-family:var(--font-ui);font-size:.73rem;color:var(--ink-mid);margin:0;line-height:1.4;">
        Ir directo a la acción y usar <strong>palabras clave de estilo visual</strong>: <em>"Arte conceptual digital", "iluminación cinematográfica dramática" y "muy detallado"</em>.
      </p>
    </div>

    <div style="text-align:center;margin-top:auto;padding:8px 0;">
      <div style="font-size:1.4rem;margin-bottom:2px;">🧱</div>
      <div style="font-family:var(--font-heading);font-size:.68rem;color:var(--ink-faded);letter-spacing:.08em;text-transform:uppercase;">
        Pasá la página: La Estructura en 5 Capas →
      </div>
    </div>
  </div>`;
}

// ── GUÍA DIDÁCTICA: LAS 5 CAPAS DE UN PROMPT (5TO Y 6TO) ──
function buildPromptLayersLeft() {
  return `<div class="text-page">
    <div class="page-heading"><span class="orn">📐</span>Las 5 Capas del Prompt<span class="orn">📐</span></div>
    <p class="page-intro-text" style="font-size:.74rem;margin-bottom:4px;line-height:1.3;">
      Un prompt profesional no se escribe al azar: se estructura en <strong>5 módulos clave</strong>:
    </p>

    <div class="intro-step" style="padding:2px 0;">
      <div class="intro-step-num" style="color:#2980b9;">1.</div>
      <div class="intro-step-text" style="font-size:.78rem;line-height:1.25;">
        <strong style="color:#1a5276;">Estilo y Técnica:</strong> El acabado visual (<em>"Ilustración cinematográfica", "Arte conceptual de fantasía oscura"</em>).
      </div>
    </div>

    <div class="intro-step" style="padding:2px 0;">
      <div class="intro-step-num" style="color:#27ae60;">2.</div>
      <div class="intro-step-text" style="font-size:.78rem;line-height:1.25;">
        <strong style="color:#196f3d;">Ancla de Identidad:</strong> Regla de oro: <em>"Preservando estrictamente sus rasgos faciales, edad y fisonomía"</em>.
      </div>
    </div>

    <div class="intro-step" style="padding:2px 0;">
      <div class="intro-step-num" style="color:#c0392b;">3.</div>
      <div class="intro-step-text" style="font-size:.78rem;line-height:1.25;">
        <strong style="color:#922b21;">Zonas de Mutación:</strong> Ojos (color/pupilas), piel (escamas/roca), boca (colmillos) y cabeza (cuernos/orejas).
      </div>
    </div>

    <div class="intro-step" style="padding:2px 0;">
      <div class="intro-step-num" style="color:#8e44ad;">4.</div>
      <div class="intro-step-text" style="font-size:.78rem;line-height:1.25;">
        <strong style="color:#6c3483;">Vestuario y Postura:</strong> Adapta la ropa al monstruo (<em>"túnica desgastada", "capa gótica"</em>) manteniendo la pose original.
      </div>
    </div>

    <div class="intro-step" style="padding:2px 0;">
      <div class="intro-step-num" style="color:#d35400;">5.</div>
      <div class="intro-step-text" style="font-size:.78rem;line-height:1.25;">
        <strong style="color:#a04000;">Iluminación y Entorno:</strong> <em>"Luz de luna plateada", "niebla roja", "fuego de lava"</em>. Aporta dramatismo y atmósfera.
      </div>
    </div>

    <p class="page-tip" style="margin-top:auto;font-size:.66rem;padding:3px 6px;">
      💡 <em>"Si falta una capa, la IA completará los huecos con lo que imagine. Sé específico."</em>
    </p>
  </div>`;
}

function buildPromptLayersRight() {
  return `<div class="text-page">
    <div class="page-heading"><span class="orn">🧪</span>Ejemplo en Acción<span class="orn">🧪</span></div>

    <div style="background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.3);border-radius:6px;padding:6px 8px;font-size:.73rem;line-height:1.35;color:#2b1408;">
      <div style="font-family:var(--font-heading);font-size:.65rem;color:#7a5214;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:3px;">
        Análisis de un Hechizo Real (Hombre Lobo):
      </div>
      <p style="margin:2px 0;"><span style="color:#2980b9;font-weight:700;">[1. Estilo]</span> <em>"Arte digital cinematográfico de fantasía oscura..."</em></p>
      <p style="margin:2px 0;"><span style="color:#27ae60;font-weight:700;">[2. Identidad]</span> <em>"...transforma al sujeto preservando su fisonomía y expresión..."</em></p>
      <p style="margin:2px 0;"><span style="color:#c0392b;font-weight:700;">[3. Mutación]</span> <em>"...pelaje gris áspero, hocico canino, ojos ámbar y colmillos..."</em></p>
      <p style="margin:2px 0;"><span style="color:#8e44ad;font-weight:700;">[4. Ropa]</span> <em>"...camisa oscura rasgada por la transformación..."</em></p>
      <p style="margin:2px 0;"><span style="color:#d35400;font-weight:700;">[5. Entorno]</span> <em>"...bosque tormentoso bajo luna llena y lluvia torrencial."</em></p>
    </div>

    <!-- Mini muestra antes y después del ejemplo -->
    <div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-top:4px;">
      <div style="text-align:center;width:45%;">
        <span style="font-family:var(--font-ui);font-size:.58rem;font-weight:700;color:#3060b0;display:block;">FOTO BASE</span>
        <img src="img/foto-antes.png" alt="Antes" style="width:100%;height:68px;object-fit:contain;border-radius:4px;border:1px solid rgba(139,90,43,0.25);background:rgba(0,0,0,0.04);" />
      </div>
      <div style="font-size:1rem;color:#8a652a;">➜</div>
      <div style="text-align:center;width:45%;">
        <span style="font-family:var(--font-ui);font-size:.58rem;font-weight:700;color:#901520;display:block;">CON LAS 5 CAPAS</span>
        <img src="img/lobo-resultado.jpg" alt="Lobo" style="width:100%;height:68px;object-fit:contain;border-radius:4px;border:1px solid rgba(139,90,43,0.25);box-shadow:0 2px 6px rgba(0,0,0,0.15);" />
      </div>
    </div>

    <div style="text-align:center;margin-top:auto;padding:4px 0;">
      <div style="font-size:1.2rem;margin-bottom:1px;">🪄</div>
      <div style="font-family:var(--font-heading);font-size:.65rem;color:var(--ink-faded);letter-spacing:.08em;text-transform:uppercase;">
        ¡Pasá la página y elegí tu hechizo! →
      </div>
    </div>
  </div>`;
}

// ── PÁGINA IZQUIERDA DE UN HECHIZO (info) ─────────────────
function buildSpellLeft(spell) {
  return `<div class="text-page spell-left-page">

    <!-- Número y encabezado -->
    <div class="spell-page-header" style="--sc:${spell.color}">
      <div class="sph-num">${(spell.student || spell.team) ? `👤 ${spell.student || spell.team} · ` : ''}Hechizo ${spell.isCustom ? 'de Alumno/a' : String(spell.id).padStart(2,'0')} / ${SPELLS.length}</div>
      <div class="sph-icon">${spell.icon}</div>
      <div class="sph-name">${spell.name}</div>
      <div class="sph-latin">${spell.subtitle}</div>
      <div class="sph-meta">
        <span class="sph-diff">${spell.difficulty}</span>
        <span class="sph-monster" style="color:${spell.color}">→ ${spell.monster}</span>
      </div>
    </div>

    <div class="page-divider"></div>

    <!-- Ingredientes Visuales -->
    <div class="spell-section-label">🧪 Ingredientes del Caldero</div>
    <div class="page-ingredients-grid">
      ${spell.ingredients.map(i => {
        const icon = typeof i === 'object' ? i.icon : '🧪';
        const name = typeof i === 'object' ? i.name : i;
        return `
          <div class="ingredient-card">
            <span class="ingredient-icon">${icon}</span>
            <span class="ingredient-name">${name}</span>
          </div>
        `;
      }).join('')}
    </div>

    <div class="page-divider"></div>

    <!-- Conjuro -->
    <div class="spell-section-label">🗣️ Conjuro</div>
    <div class="page-incantation">${spell.incantation}</div>

    <!-- Botón abrir hechizo -->
    <button class="page-open-btn" style="--sc:${spell.color}" onclick="openSpellById('${spell.id}')">
      📋 Copiar Hechizo Completo
    </button>

    <!-- Consejo -->
    <div class="page-tip">💡 ${spell.tips}</div>

  </div>`;
}

// ── PÁGINA DERECHA DE UN HECHIZO (fotos antes/después) ────
function buildSpellRight(spell) {
  const hasImages = spell.beforeImg && spell.afterImg;

  const beforeContent = hasImages
    ? `<img src="${spell.beforeImg}" alt="Foto original" class="ba-img" />`
    : `<div class="ba-placeholder-box">
         <div class="ba-placeholder-emoji">${spell.beforeEmoji || '🧒'}</div>
         <div class="ba-placeholder-text">Tu foto aquí</div>
       </div>`;

  const afterContent = hasImages
    ? `<div class="zoomable-wrapper" onclick="openImageZoom('${spell.afterImg}', '${spell.name}', '${spell.monster}')" title="Hacé clic o acercá el mouse para ver en tamaño gigante">
         <img src="${spell.afterImg}" alt="Resultado del hechizo" class="ba-img ba-img-zoomable" />
         <div class="zoom-hover-hint">🔍 Ampliar</div>
       </div>`
    : `<div class="ba-placeholder-box after-placeholder">
         <div class="ba-placeholder-emoji">${spell.afterEmoji || '🔮'}</div>
         <div class="ba-placeholder-text">Tu resultado aquí</div>
       </div>`;

  return `<div class="text-page ba-page">

    <div class="page-heading"><span class="orn">📸</span>Antes &amp; Después<span class="orn">📸</span></div>

    <!-- ANTES -->
    <div class="ba-section before-section">
      <div class="ba-tag before-tag">ANTES</div>
      ${beforeContent}
      <div class="ba-caption">${spell.beforeLabel || 'Foto original'}</div>
    </div>

    <!-- Flecha -->
    <div class="ba-arrow-row">
      <div class="ba-line"></div>
      <div class="ba-arrow-icon">▼</div>
      <div class="ba-line"></div>
    </div>

    <!-- DESPUÉS -->
    <div class="ba-section after-section">
      <div class="ba-tag after-tag">DESPUÉS</div>
      ${afterContent}
      <div class="ba-caption">${spell.afterLabel || 'Resultado con IA'}</div>
    </div>

  </div>`;
}

// ── FINAL ─────────────────────────────────────────────────
function buildEndLeft() {
  return `<div class="text-page" style="justify-content:center;align-items:center;text-align:center;gap:14px;">
    <div style="font-size:2rem;opacity:.4;">✦</div>
    <div class="page-heading" style="border:none;margin:0;">Fin del Grimorio</div>
    <div class="page-divider"></div>
    <div class="page-intro-text">Los ${SPELLS.length} hechizos han sido revelados.<br>¡Que la magia de la IA te transforme!</div>
    <div style="font-size:1.6rem;margin-top:10px;">🔮</div>
    <div style="font-family:var(--font-body);font-style:italic;font-size:.75rem;color:var(--ink-faded);margin-top:auto;">
      ◀ Volvé a las páginas para elegir tu hechizo
    </div>
  </div>`;
}

function buildEndRight() {
  return `<div class="back-cover-page">
    <div class="back-cover-gem">🌙</div>
    <div class="back-cover-text">Creado con<br>Inteligencia Artificial</div>
    <div class="back-cover-gem" style="font-size:1rem;margin-top:16px;">✦ ✦ ✦</div>
  </div>`;
}

// ══════════════════════════════════════════════════════════
//  ANIMACIÓN DE VOLTEO
// ══════════════════════════════════════════════════════════
function nextPage() {
  if (isAnimating || currentSpread >= TOTAL_SPREADS - 1) return;
  isAnimating = true;

  const nextIndex = currentSpread + 1;
  const { leftHTML: nextLeft, rightHTML: nextRight,
          pageL: nextPageL, pageR: nextPageR } = buildSpread(SPREADS[nextIndex], nextIndex);

  const flipLayer = document.getElementById('flipLayer');
  const flipFront = document.getElementById('flipFront');
  const flipBack  = document.getElementById('flipBack');
  const pageLeft  = document.getElementById('pageLeft');
  const pageRight = document.getElementById('pageRight');

  // Frente del flip = página derecha actual (la que se va)
  flipFront.innerHTML = pageRight.innerHTML;
  // Espalda del flip = próxima página izquierda (la que llega)
  flipBack.innerHTML  = nextLeft;

  // Actualizar la derecha real ya (queda tapada durante el flip)
  pageRight.innerHTML = nextRight;
  document.getElementById('pageNumR').textContent = nextPageR;

  // Arrancar animación hacia adelante
  flipLayer.classList.remove('flip-backward');
  flipLayer.classList.add('active', 'flip-forward');

  flipLayer.addEventListener('animationend', () => {
    currentSpread = nextIndex;
    pageLeft.innerHTML = nextLeft;
    document.getElementById('pageNumL').textContent = nextPageL;
    flipLayer.classList.remove('active', 'flip-forward');
    updateNav();
    isAnimating = false;
  }, { once: true });
}

function prevPage() {
  if (isAnimating || currentSpread <= 0) return;
  isAnimating = true;

  const prevIndex = currentSpread - 1;
  const { leftHTML: prevLeft, rightHTML: prevRight,
          pageL: prevPageL, pageR: prevPageR } = buildSpread(SPREADS[prevIndex], prevIndex);

  const flipLayer = document.getElementById('flipLayer');
  const flipFront = document.getElementById('flipFront');
  const flipBack  = document.getElementById('flipBack');
  const pageLeft  = document.getElementById('pageLeft');
  const pageRight = document.getElementById('pageRight');

  // Frente = página derecha anterior (la que vuelve)
  flipFront.innerHTML = prevRight;
  // Espalda = página izquierda actual (la que se va)
  flipBack.innerHTML  = pageLeft.innerHTML;

  // Actualizar la izquierda real ya
  pageLeft.innerHTML  = prevLeft;
  document.getElementById('pageNumL').textContent = prevPageL;

  // Arrancar animación hacia atrás
  flipLayer.classList.remove('flip-forward');
  flipLayer.classList.add('active', 'flip-backward');

  flipLayer.addEventListener('animationend', () => {
    currentSpread = prevIndex;
    pageRight.innerHTML = prevRight;
    document.getElementById('pageNumR').textContent = prevPageR;
    flipLayer.classList.remove('active', 'flip-backward');
    updateNav();
    isAnimating = false;
  }, { once: true });
}

// ── Navegación ────────────────────────────────────────────
function updateNav() {
  document.getElementById('navInfo').textContent = SPREADS[currentSpread].label;

  const dotsContainer = document.getElementById('navDots');
  dotsContainer.innerHTML = '';
  SPREADS.forEach((s, i) => {
    const dot = document.createElement('div');
    dot.className = 'nav-dot' + (i === currentSpread ? ' active' : '');
    dot.title = s.label;
    dot.onclick = () => jumpToSpread(i);
    dotsContainer.appendChild(dot);
  });

  // Esquinas de página
  const cprev = document.getElementById('cornerPrev');
  const cnext = document.getElementById('cornerNext');
  if (cprev) { cprev.style.opacity = currentSpread === 0 ? '0' : '1'; cprev.style.pointerEvents = currentSpread === 0 ? 'none' : ''; }
  if (cnext) { cnext.style.opacity = currentSpread === TOTAL_SPREADS-1 ? '0' : '1'; cnext.style.pointerEvents = currentSpread === TOTAL_SPREADS-1 ? 'none' : ''; }
}

function jumpToSpread(target) {
  if (isAnimating || target === currentSpread) return;
  currentSpread = target;
  renderSpread(currentSpread);
  updateNav();
}

// ── Click en la página izquierda o derecha ────────────────
// No navega si se hizo click en un botón, link, zoom u otro interactivo
function handlePageClick(event, direction) {
  const interactive = event.target.closest('button, a, input, select, textarea, label, .zoomable-wrapper');
  if (interactive) return;          // deja funcionar el elemento interno
  if (direction === 'prev') prevPage();
  else nextPage();
}

// ══════════════════════════════════════════════════════════
//  MODAL DE ZOOM DE IMAGEN (DESPUÉS)
// ══════════════════════════════════════════════════════════
function openImageZoom(imgSrc, spellName, monsterName) {
  const modal = document.getElementById('imageZoomModal');
  const img = document.getElementById('zoomedImg');
  const caption = document.getElementById('zoomCaption');
  const badge = document.getElementById('zoomBadge');
  if (!modal || !img) return;

  img.src = imgSrc;
  if (badge) badge.textContent = `✨ ${monsterName || 'Transformación Mágica'} ✨`;
  if (caption) caption.textContent = `${spellName} — Resultado Generado con IA`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeImageZoom() {
  const modal = document.getElementById('imageZoomModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ══════════════════════════════════════════════════════════
//  MODAL DEL HECHIZO
// ══════════════════════════════════════════════════════════
function openSpell(spell) {
  currentSpell = spell;
  const modal = document.getElementById('spellModal');

  document.getElementById('modalIcon').textContent       = spell.icon;
  document.getElementById('modalTitle').textContent      = spell.name;
  document.getElementById('modalSubtitle').textContent   = spell.subtitle;
  document.getElementById('modalIncantation').textContent= spell.incantation;
  document.getElementById('modalPrompt').textContent     = spell.prompt;
  document.getElementById('modalTips').textContent       = spell.tips;

  modal.style.setProperty('--modal-color', spell.color);
  modal.style.setProperty('--modal-glow',  hexToRgba(spell.color, 0.5));
  document.querySelector('.modal-box').style.borderColor = spell.color;
  document.getElementById('copyBtn').style.background =
    `linear-gradient(135deg, ${spell.color}, ${adjustColor(spell.color, -40)})`;

  resetCopyButton();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (navigator.vibrate) navigator.vibrate([50, 30, 50]);
}

function closeSpell() {
  document.getElementById('spellModal').classList.remove('active');
  document.body.style.overflow = '';
  currentSpell = null;
}

document.getElementById('spellModal').addEventListener('click', e => {
  if (e.target === document.getElementById('spellModal')) closeSpell();
});
document.addEventListener('keydown', e => { 
  if (e.key === 'Escape') {
    closeSpell();
    closeImageZoom();
  }
});

// ── Copiar ────────────────────────────────────────────────
async function copyPrompt() {
  if (!currentSpell) return;
  const btn  = document.getElementById('copyBtn');
  const text = currentSpell.prompt;
  try {
    await navigator.clipboard.writeText(text);
    showCopySuccess(btn);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.cssText = 'position:fixed;opacity:0;';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
    showCopySuccess(btn);
  }
}

function showCopySuccess(btn) {
  btn.textContent = '✅ ¡Prompt Copiado!';
  btn.style.background = 'linear-gradient(135deg,#27ae60,#2ecc71)';
  createSparkles(btn);
  setTimeout(resetCopyButton, 3000);
}

function resetCopyButton() {
  const btn = document.getElementById('copyBtn');
  if (!btn || !currentSpell) return;
  btn.textContent = '📋 Copiar Prompt';
  btn.style.background = `linear-gradient(135deg,${currentSpell.color},${adjustColor(currentSpell.color,-40)})`;
}

function createSparkles(el) {
  const rect = el.getBoundingClientRect();
  const colors = ['#f1c40f','#e74c3c','#8e44ad','#3498db','#2ecc71','#e8c97a'];
  for (let i = 0; i < 22; i++) {
    const sp = document.createElement('div');
    sp.className = 'sparkle';
    sp.style.left = `${rect.left + Math.random()*rect.width}px`;
    sp.style.top  = `${rect.top  + Math.random()*rect.height}px`;
    sp.style.background = colors[Math.floor(Math.random()*colors.length)];
    sp.style.animationDelay = `${Math.random()*0.3}s`;
    document.body.appendChild(sp);
    setTimeout(() => sp.remove(), 1000);
  }
}

// ── Partículas ────────────────────────────────────────────
function createParticles() {
  const container = document.getElementById('particles');
  const symbols = ['✦','✧','⋆','★','☽','☆','✵','⚡','💀','🌙','✨','⭐'];
  for (let i = 0; i < 35; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    p.style.left = `${Math.random()*100}%`;
    p.style.top  = `${Math.random()*100}%`;
    p.style.fontSize = `${0.5+Math.random()*1.1}rem`;
    p.style.animationDuration = `${5+Math.random()*10}s`;
    p.style.animationDelay    = `${Math.random()*10}s`;
    p.style.opacity = `${0.07+Math.random()*0.25}`;
    container.appendChild(p);
  }
}

// ── Utilidades ────────────────────────────────────────────
function adjustColor(hex, amount) {
  hex = hex.replace('#','');
  const n = parseInt(hex,16);
  const r = Math.min(255,Math.max(0,(n>>16)+amount));
  const g = Math.min(255,Math.max(0,((n>>8)&0xff)+amount));
  const b = Math.min(255,Math.max(0,(n&0xff)+amount));
  return `#${((r<<16)|(g<<8)|b).toString(16).padStart(6,'0')}`;
}

function hexToRgba(hex, alpha) {
  hex = hex.replace('#','');
  const n = parseInt(hex,16);
  return `rgba(${(n>>16)&0xff},${(n>>8)&0xff},${n&0xff},${alpha})`;
}

// ══════════════════════════════════════════════════════════
//  DESCARGA DE FOTO BASE DEL PROFESOR
// ══════════════════════════════════════════════════════════
async function downloadBasePhoto() {
  const triggerDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'foto-base-profesor.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  try {
    const res = await fetch('img/foto-antes.png');
    if (!res.ok) throw new Error('Fetch failed');
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    triggerDownload(blobUrl);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 2500);
  } catch (err) {
    // Fallback con Canvas para entornos locales (file://)
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function() {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(function(blob) {
          if (blob) {
            const blobUrl = URL.createObjectURL(blob);
            triggerDownload(blobUrl);
            setTimeout(() => URL.revokeObjectURL(blobUrl), 2500);
          } else {
            const dataUrl = canvas.toDataURL('image/png');
            triggerDownload(dataUrl);
          }
        }, 'image/png');
      } catch (canvasErr) {
        triggerDownload('img/foto-antes.png');
      }
    };
    img.src = 'img/foto-antes.png';
  }
}

// ── Abrir Hechizo por ID seguro ───────────────────────────
function openSpellById(id) {
  const s = SPELLS.find(x => String(x.id) === String(id));
  if (s) openSpell(s);
}

// ══════════════════════════════════════════════════════════
//  CREADOR DE NUEVO HECHIZO POR EQUIPOS (LAS 5 CAPAS)
// ══════════════════════════════════════════════════════════
let newSpellImageData = null;

function openNewSpellModal() {
  const modal = document.getElementById('newSpellModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    updatePromptLivePreview();
  }
}

function closeNewSpellModal(e) {
  if (e && e.target !== document.getElementById('newSpellModal')) return;
  const modal = document.getElementById('newSpellModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function updatePromptLivePreview() {
  const l1 = (document.getElementById('nsLayer1')?.value || '').trim();
  const l2 = (document.getElementById('nsLayer2')?.value || '').trim();
  const l3 = (document.getElementById('nsLayer3')?.value || '').trim();
  const l4 = (document.getElementById('nsLayer4')?.value || '').trim();
  const l5 = (document.getElementById('nsLayer5')?.value || '').trim();
  const monster = (document.getElementById('nsMonsterName')?.value || '').trim() || 'un monstruo de fantasía';

  const previewBox = document.getElementById('nsLivePromptPreview');
  if (!previewBox) return;

  if (!l1 && !l2 && !l3 && !l4 && !l5) {
    previewBox.textContent = 'Completá las 5 capas arriba para ver tu conjuro ensamblado...';
    return;
  }

  const pEstilo = l1 || 'Una ilustración cinematográfica de fantasía y terror';
  const pId     = l2 ? `, ${l2}` : ', conservando estrictamente su rostro natural, su edad y sus facciones faciales reconocibles';
  const pMut    = l3 ? `\n\n${l3}` : '';
  const pRopa   = l4 ? `\n\n${l4}` : '';
  const pEnt    = l5 ? ` ${l5}` : '';

  const assembled = `${pEstilo} que transforma a la persona de la imagen en ${monster}${pId}.${pMut}${pRopa}${pEnt}`.trim();

  previewBox.textContent = assembled;
}

async function copyLivePrompt() {
  const previewBox = document.getElementById('nsLivePromptPreview');
  if (!previewBox) return;
  const text = previewBox.textContent;
  if (!text || text.startsWith('Completá')) {
    alert('Primero completá las capas del prompt.');
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    const btn = document.querySelector('.btn-copy-live');
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = '✔️ ¡Copiado!';
      btn.style.background = '#27ae60';
      setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 2000);
    }
  } catch {
    alert('Seleccioná el texto para copiarlo manualmente.');
  }
}

// ══════════════════════════════════════════════════════════
//  MODAL DE PROMPT GENERADO (5 CAPAS) Y COPIADO DIRECTO
// ══════════════════════════════════════════════════════════
function generateAndShowPromptModal() {
  updatePromptLivePreview();
  const previewBox = document.getElementById('nsLivePromptPreview');
  const content = previewBox ? previewBox.textContent : '';

  if (!content || content.startsWith('Completá las 5 capas')) {
    alert('Por favor, completá al menos la Capa 1 y la Capa 3 para poder generar el prompt.');
    return;
  }

  const student = (document.getElementById('nsStudentName')?.value || 'Alumno/a').trim();
  const monster = (document.getElementById('nsMonsterName')?.value || 'Monstruo').trim();

  const modal = document.getElementById('promptResultModal');
  const targetText = document.getElementById('promptResultContent');
  const targetAuthor = document.getElementById('promptResultAuthor');
  const copyBtn = document.getElementById('btnCopyGeneratedPrompt');

  if (targetText) targetText.textContent = content;
  if (targetAuthor) targetAuthor.textContent = `Hechizo de ${student} · ${monster}`;
  if (copyBtn) {
    copyBtn.innerHTML = '📋 Copiar Prompt al Portapapeles';
    copyBtn.style.background = '';
  }

  if (modal) {
    modal.classList.add('active');
  }
}

function closePromptResultModal(e) {
  if (e && e.target !== document.getElementById('promptResultModal')) return;
  const modal = document.getElementById('promptResultModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

async function copyGeneratedPrompt() {
  const targetText = document.getElementById('promptResultContent');
  const text = targetText ? targetText.textContent : '';
  if (!text) return;

  const btn = document.getElementById('btnCopyGeneratedPrompt');
  try {
    await navigator.clipboard.writeText(text);
    if (btn) {
      btn.innerHTML = '✨ ¡Copiado con Éxito! Listo para pegar en la IA';
      btn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
    }
    if (navigator.vibrate) navigator.vibrate([40, 30, 40]);
  } catch (err) {
    alert('Seleccioná el texto para copiarlo manualmente.');
  }
}

function handleImageSelected(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      // Redimensionar para mantener liviana la carga en base de datos (~90-140KB)
      const canvas = document.createElement('canvas');
      const maxDim = 900;
      let width = img.width;
      let height = img.height;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      newSpellImageData = canvas.toDataURL('image/jpeg', 0.82);

      const previewThumb = document.getElementById('imagePreviewThumb');
      const dropContent = document.getElementById('dropzoneContent');
      if (previewThumb) {
        previewThumb.src = newSpellImageData;
        previewThumb.style.display = 'block';
      }
      if (dropContent) dropContent.style.display = 'none';
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function handleCreateSpell(event) {
  event.preventDefault();
  if (!newSpellImageData) {
    alert('Por favor, subí la imagen del resultado que generó el equipo.');
    return;
  }

  const student = (document.getElementById('nsStudentName')?.value || document.getElementById('nsTeamName')?.value || 'Alumno').trim();
  const monster = document.getElementById('nsMonsterName').value.trim();
  const icon = document.getElementById('nsIcon').value.trim() || '✨';
  const color = document.getElementById('nsColor').value || '#8e44ad';
  const diff = document.getElementById('nsDiff').value;
  const incantation = document.getElementById('nsIncantation').value.trim();

  const l1 = document.getElementById('nsLayer1').value.trim();
  const l3 = document.getElementById('nsLayer3').value.trim();
  const l5 = document.getElementById('nsLayer5').value.trim();

  const fullPrompt = document.getElementById('nsLivePromptPreview').textContent;

  const newSpell = {
    id: 'custom_' + Date.now(),
    student: student,
    team: student,
    name: monster,
    subtitle: `Hechizo de ${student}`,
    icon: icon,
    color: color,
    monster: monster,
    difficulty: diff,
    ingredients: [
      { name: 'Capa 1: ' + (l1 ? l1.slice(0, 18) + '...' : 'Estilo Visual'), icon: '📐' },
      { name: 'Capa 3: ' + (l3 ? l3.slice(0, 18) + '...' : 'Mutación'), icon: '🧬' },
      { name: 'Capa 5: ' + (l5 ? l5.slice(0, 18) + '...' : 'Entorno'), icon: '🌌' }
    ],
    incantation: incantation,
    prompt: fullPrompt,
    tips: `¡Hechizo forjado por ${student}! Preservando la fisonomía y expresión original.`,
    beforeImg: 'img/foto-antes.png',
    afterImg: newSpellImageData,
    beforeLabel: 'Foto original',
    afterLabel: `¡Creado por ${student}!`,
    isCustom: true,
    createdAt: new Date().toISOString()
  };

  // 1. Guardar localmente (en esta máquina)
  saveSpellLocal(newSpell);

  // 2. Guardar en la nube (para todas las máquinas si está conectada)
  saveSpellToCloud(newSpell);

  // 3. Agregar al libro interactivo y voltear a la nueva hoja
  addNewSpellToBook(newSpell, true);

  // 4. Cerrar y resetear
  closeNewSpellModal();
  document.getElementById('newSpellForm').reset();
  newSpellImageData = null;
  const previewThumb = document.getElementById('imagePreviewThumb');
  const dropContent = document.getElementById('dropzoneContent');
  if (previewThumb) previewThumb.style.display = 'none';
  if (dropContent) dropContent.style.display = 'block';

  alert(`🎉 ¡El Hechizo de "${student}" fue inscrito en el libro con éxito!`);
}

function addNewSpellToBook(spell, shouldFlip) {
  // Evitar duplicar si ya existe
  if (SPELLS.some(s => String(s.id) === String(spell.id))) return;

  SPELLS.push(spell);
  rebuildSpreads();

  if (shouldFlip) {
    const targetIndex = SPREADS.findIndex(sp => sp.type === 'spell' && sp.spell && String(sp.spell.id) === String(spell.id));
    if (targetIndex !== -1) {
      jumpToSpread(targetIndex);
    }
  }
}

// ── Persistencia Local (LocalStorage) ─────────────────────
function getLocalCustomSpells() {
  try {
    const raw = localStorage.getItem('grimorio_custom_spells');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveSpellLocal(spell) {
  try {
    const spells = getLocalCustomSpells();
    if (!spells.some(s => String(s.id) === String(spell.id))) {
      spells.push(spell);
      localStorage.setItem('grimorio_custom_spells', JSON.stringify(spells));
    }
  } catch (e) {
    console.warn('No se pudo guardar en localStorage:', e);
  }
}

function loadLocalCustomSpells() {
  const customs = getLocalCustomSpells();
  customs.forEach(s => {
    if (!SPELLS.some(x => String(x.id) === String(s.id))) {
      SPELLS.push(s);
    }
  });
  rebuildSpreads();
}

// ── Sincronización en la Nube (Firebase Realtime DB) ───────
let firebaseDb = null;

function initCloudSync() {
  const customUrl = localStorage.getItem('grimorio_fb_url') || 'https://grimorio-hechizos-freire-default-rtdb.firebaseio.com';
  const urlInput = document.getElementById('fbDbUrl');
  if (urlInput) urlInput.value = customUrl;

  try {
    if (typeof firebase !== 'undefined') {
      if (!firebase.apps.length) {
        firebase.initializeApp({ databaseURL: customUrl });
      }
      firebaseDb = firebase.database();
      updateSyncUI(true, 'Nube Activa');
      listenToFirebase();
    } else {
      updateSyncUI(false, 'Modo Local');
    }
  } catch (err) {
    console.warn('Firebase no inicializado (Modo Local activo):', err);
    updateSyncUI(false, 'Modo Local');
  }
}

function listenToFirebase() {
  if (!firebaseDb) return;
  try {
    const spellsRef = firebaseDb.ref('custom_spells');
    spellsRef.on('child_added', (snapshot) => {
      const spell = snapshot.val();
      if (spell && spell.id) {
        saveSpellLocal(spell);
        addNewSpellToBook(spell, false);
      }
    }, (err) => {
      console.warn('Aviso de conexión Firebase:', err);
      updateSyncUI(false, 'Modo Local');
    });
  } catch (e) {
    console.warn('Error escuchando Firebase:', e);
  }
}

function saveSpellToCloud(spell) {
  if (!firebaseDb) return;
  try {
    firebaseDb.ref('custom_spells/' + spell.id).set(spell);
  } catch (e) {
    console.warn('No se pudo enviar a Firebase:', e);
  }
}

function updateSyncUI(isConnected, text) {
  const dot = document.getElementById('syncDot');
  const label = document.getElementById('syncStatusLabel');
  const cardIcon = document.getElementById('syncStatusIcon');
  const cardHeading = document.getElementById('syncStatusHeading');
  const cardDesc = document.getElementById('syncStatusDesc');

  if (dot) dot.style.background = isConnected ? '#2ecc71' : '#e67e22';
  if (label) label.textContent = text;
  if (cardIcon) cardIcon.textContent = isConnected ? '🟢' : '🟡';
  if (cardHeading) cardHeading.textContent = isConnected ? 'Sincronización en la Nube Activa' : 'Modo Local (Respaldo en esta máquina)';
  if (cardDesc) {
    cardDesc.textContent = isConnected
      ? 'Los nuevos monstruos que agregue cualquier equipo se sincronizan automáticamente entre todas las computadoras en tiempo real.'
      : 'Tus hechizos se guardan de forma segura en esta máquina. Podés exportar el archivo JSON o ingresar la URL de tu Firebase.';
  }
}

function openSyncModal() {
  const modal = document.getElementById('syncModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeSyncModal(e) {
  if (e && e.target !== document.getElementById('syncModal')) return;
  const modal = document.getElementById('syncModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function saveFirebaseConfig() {
  const input = document.getElementById('fbDbUrl');
  if (!input) return;
  const url = input.value.trim();
  if (url) {
    localStorage.setItem('grimorio_fb_url', url);
    alert('Configuración guardada. Recargando para conectar a la nueva base de datos...');
    location.reload();
  }
}

// ── Exportar / Importar JSON de Hechizos ───────────────────
function exportSpellsJSON() {
  const customSpells = SPELLS.filter(s => s.isCustom);
  if (!customSpells.length) {
    alert('Aún no hay hechizos creados por los equipos para exportar.');
    return;
  }
  const blob = new Blob([JSON.stringify(customSpells, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `hechizos-equipos-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importSpellsJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported)) {
        let count = 0;
        imported.forEach(s => {
          if (s.id && !SPELLS.some(x => String(x.id) === String(s.id))) {
            saveSpellLocal(s);
            saveSpellToCloud(s);
            addNewSpellToBook(s, false);
            count++;
          }
        });
        alert(`✨ Se importaron con éxito ${count} hechizos de equipos.`);
        closeSyncModal();
      } else {
        alert('El archivo no tiene el formato JSON de hechizos válido.');
      }
    } catch (err) {
      alert('Error leyendo el archivo JSON: ' + err.message);
    }
  };
  reader.readAsText(file);
}

