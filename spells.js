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
    layers: {
      style: "Una obra de arte digital de fantasía épica y acabado cinematográfico...",
      identity: "...que transforma el rostro de la persona de la imagen preservando estrictamente sus rasgos faciales reconocibles, su edad y su fisonomía auténtica.",
      mutation: "La persona conserva su estructura facial natural mientras su piel se cubre de escamas de dragón iridiscentes en tonos rojo fuego y verde oscuro. Sus ojos se vuelven reptilianos y brillantes con pupilas verticales en ámbar y oro, dos pequeños cuernos curvados emergen de la frente, y su mandíbula revela colmillos afilados con fuego y humo sutil saliendo de su boca.",
      outfit: "Viste su prenda oscura original adaptada como una túnica de guerrero desgastada con detalles de cuero rústico sobre los hombros, manteniendo su postura frontal original.",
      environment: "Fondo oscuro de una caverna volcánica iluminada por el resplandor naranja de lava y brasas ardientes, con iluminación lateral dramática y niebla de cenizas. Muy detallado, primer plano.",
      styleShort: "Arte digital de fantasía épica y cine",
      identityShort: "Rasgos, fisonomía y edad reconocibles",
      mutationShort: "Escamas rojizas, ojos de reptil, cuernos y colmillos",
      outfitShort: "Túnica oscura de guerrero en postura original",
      environmentShort: "Caverna volcánica con lava, fuego y humo"
    },
    prompt: `Una obra de arte digital de fantasía épica y acabado cinematográfico que transforma el rostro de la persona de la imagen preservando estrictamente sus rasgos faciales reconocibles, su edad y su fisonomía auténtica.

La persona conserva su estructura facial natural mientras su piel se cubre de escamas de dragón iridiscentes en tonos rojo fuego y verde oscuro. Sus ojos se vuelven reptilianos y brillantes con pupilas verticales en ámbar y oro, dos pequeños cuernos curvados emergen de la frente, y su mandíbula revela colmillos afilados con fuego y humo sutil saliendo de su boca.

Viste su prenda oscura original adaptada como una túnica de guerrero desgastada con detalles de cuero rústico sobre los hombros, manteniendo su postura frontal original.

Fondo oscuro de una caverna volcánica iluminada por el resplandor naranja de lava y brasas ardientes, con iluminación lateral dramática y niebla de cenizas. Muy detallado, primer plano.`,
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
    layers: {
      style: "Una obra de arte digital de terror y fantasía cinematográfica...",
      identity: "...que transforma a la persona de la imagen en un hombre lobo, preservando de manera estricta sus rasgos faciales exactos, su edad y su identidad reconocible bajo la transformación.",
      mutation: "La persona conserva su estructura facial natural, contextura y expresión mientras su cabello se vuelve salvaje, mezclándose con un pelaje áspero grisáceo y marrón que cubre mejillas y frente. Su rostro se adapta a una fisonomía híbrida con hocico canino, nariz húmeda, ojos ámbar salvajes bajo cejas pobladas, boca con colmillos afilados y orejas puntiagudas de lobo en la cabeza.",
      outfit: "Lleva su misma ropa oscura desabrochada, ligeramente desgastada y rasgada por la transformación, con manos de garras afiladas en su postura original.",
      environment: "Fondo de bosque oscuro en una noche tormentosa de gran dramatismo bajo una luna llena entre nubes densas de lluvia, con intensa luz plateada cinematográfica, sombras profundas y niebla.",
      styleShort: "Arte digital cinematográfico de fantasía oscura",
      identityShort: "Estructura facial y edad preservadas al detalle",
      mutationShort: "Pelaje áspero, hocico canino, ojos ámbar y colmillos",
      outfitShort: "Ropa oscura rasgada y garras afiladas",
      environmentShort: "Bosque tormentoso bajo luna llena y niebla"
    },
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
    layers: {
      style: "Una ilustración cinematográfica de horror gótico y terror realista...",
      identity: "...que transforma a la persona de la imagen en un no-muerto resucitado, preservando estrictamente su fisonomía facial, su edad y sus facciones reconocibles.",
      mutation: "La persona conserva su estructura facial bajo una piel pálida verdosa en descomposición con sutiles marcas de tierra y venas oscuras. Sus ojos brillan con un resplandor verde sobrenatural, sus labios resecos muestran dientes oscurecidos y su cabello despeinado lleva pequeñas hojas secas adheridas.",
      outfit: "Viste su ropa oscura original rasgada y manchada con polvo de camposanto y jirones envejecidos, manteniendo su postura natural.",
      environment: "Fondo oscuro de un cementerio antiguo con lápidas de piedra agrietadas entre niebla espesa y árboles secos, con iluminación verde espeluznante y sombras lúgubres. Primer plano, hiperdetallado.",
      styleShort: "Ilustración cinematográfica de terror gótico",
      identityShort: "Fisonomía facial y edad reconocibles",
      mutationShort: "Piel verdosa, ojos verdes brillantes y grietas",
      outfitShort: "Ropa oscura rasgada con tierra de cementerio",
      environmentShort: "Cementerio antiguo con lápidas, niebla y luz verde"
    },
    prompt: `Una ilustración cinematográfica de horror gótico y terror realista que transforma a la persona de la imagen en un no-muerto resucitado, preservando estrictamente su fisonomía facial, su edad y sus facciones reconocibles.

La persona conserva su estructura facial bajo una piel pálida verdosa en descomposición con sutiles marcas de tierra y venas oscuras. Sus ojos brillan con un resplandor verde sobrenatural, sus labios resecos muestran dientes oscurecidos y su cabello despeinado lleva pequeñas hojas secas adheridas.

Viste su ropa oscura original rasgada y manchada con polvo de camposanto y jirones envejecidos, manteniendo su postura natural.

Fondo oscuro de un cementerio antiguo con lápidas de piedra agrietadas entre niebla espesa y árboles secos, con iluminación verde espeluznante y sombras lúgubres. Primer plano, hiperdetallado.`,
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
    layers: {
      style: "Una obra de arte digital de terror gótico y fantasía cinematográfica...",
      identity: "...que transforma a la persona de la imagen en un vampiro de la noche, preservando de manera estricta sus rasgos faciales exactos, su edad y su identidad reconocible.",
      mutation: "La persona conserva su estructura facial auténtica y mirada natural con cabello peinado hacia atrás. Su piel se vuelve muy pálida y fría como porcelana, sus ojos brillan en rojo carmesí con sombras oscuras debajo, cejas arqueadas dramáticas y colmillos afilados con un fino hilo de sangre en la comisura.",
      outfit: "Lleva una elegante capa oscura de cuello alto con intrincados bordados góticos sobre su cuello original, manteniendo su porte y postura natural.",
      environment: "Fondo del interior de un castillo gótico con pilares de piedra, velas parpadeantes, murciélagos lejanos y luz de luna plateada mezclada con sombras púrpuras dramáticas. Primer plano, muy detallado.",
      styleShort: "Arte digital de terror gótico y cinematográfico",
      identityShort: "Rasgos exactos, mirada natural y edad",
      mutationShort: "Piel de porcelana, ojos carmesí y colmillos afilados",
      outfitShort: "Capa gótica de cuello alto con bordados",
      environmentShort: "Castillo con velas, pilares y luz de luna púrpura"
    },
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
    layers: {
      style: "Una obra de arte digital de fantasía y mitología clásica a gran escala...",
      identity: "...que transforma a la persona en un Cíclope gigante de la mitología griega, preservando de manera estricta su rostro reconocible, su edad y su identidad.",
      mutation: "La persona conserva su estructura facial natural sobre una mandíbula más ancha y masiva. Su piel se vuelve gris-azulada, gruesa y agrietada como piedra antigua. En el centro de la frente sus ojos se funden en un único y colosal ojo dorado brillante bajo una ceja salvaje, con nariz ancha y pequeñas protuberancias rocosas en sienes.",
      outfit: "Viste una túnica rústica de cuero y tela desgastada sobre sus anchos hombros, manteniendo la postura natural en primer plano.",
      environment: "Fondo épico de ruinas griegas en lo alto de una montaña bajo cielo tormentoso nocturno con relámpagos lejanos, e iluminación que resalta la textura rocosa. Primer plano, muy detallado.",
      styleShort: "Arte digital de fantasía y mitología épica",
      identityShort: "Estructura facial y edad preservadas",
      mutationShort: "Ojo único central dorado, piel de roca y mandíbula ancha",
      outfitShort: "Túnica rústica de cuero sobre hombros colosales",
      environmentShort: "Ruinas griegas en montaña bajo tormenta y rayos"
    },
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
    layers: {
      style: "Una ilustración cinematográfica de fantasía oscura y terror...",
      identity: "...que transforma a la persona de la imagen en una imponente bestia feroz, conservando estrictamente su rostro natural, su edad y su fisonomía auténtica.",
      mutation: "Su piel se vuelve de cuero áspero rojizo-marrón con escamas y protuberancias manteniendo sus facciones reales. Tiene ojos naranja demoníacos brillantes, dos cuernos cortos en la frente, orejas puntiagudas y boca abierta en un leve gruñido que muestra colmillos en la mandíbula.",
      outfit: "Viste su ropa oscura o atuendo rústico desgastado en su postura original, con cuello musculoso y hombros firmes.",
      environment: "Fondo oscuro de bosque salvaje tormentoso con densa niebla roja brillante y luz de luna filtrada entre ramas. Muy detallado, primer plano.",
      styleShort: "Ilustración cinematográfica de fantasía oscura",
      identityShort: "Rostro natural, edad y expresión auténtica",
      mutationShort: "Cuero rojizo con escamas, ojos naranja y cuernos",
      outfitShort: "Ropa rústica desgastada en postura original",
      environmentShort: "Bosque tormentoso con niebla roja y luz de luna"
    },
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
    layers: {
      style: "Una ilustración cinematográfica de fantasía mitológica y terror clásico...",
      identity: "...que transforma a la persona de la imagen en una versión de Medusa, conservando estrictamente su rostro natural, su edad y sus facciones reconocibles.",
      mutation: "Su cabello se transforma en docenas de serpientes vivas ondulantes de tonos verdes, dorados y grises. Su piel adquiere un tono verde-grisáceo con sutiles escamas en mejillas manteniendo sus arrugas reales, con ojos de intensa luz dorada-verde petrificante y lengua bífida visible.",
      outfit: "Viste un ropaje antiguo o túnica griega rústica deshilachada sobre los hombros, en su postura original.",
      environment: "Fondo oscuro de ruinas de un templo griego bajo cielo tormentoso nocturno con relámpagos lejanos y luz de luna fría. Muy detallado, primer plano.",
      styleShort: "Ilustración de fantasía mitológica cinematográfica",
      identityShort: "Facciones faciales y edad estrictamente intactas",
      mutationShort: "Cabello de serpientes vivas, ojos dorados y escamas",
      outfitShort: "Túnica griega rústica deshilachada sobre hombros",
      environmentShort: "Ruinas de templo griego bajo tormenta nocturna"
    },
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
    layers: {
      style: "Una ilustración cinematográfica de terror gótico clásico...",
      identity: "...que transforma a la persona de la imagen en la criatura de Frankenstein, conservando estrictamente su rostro natural, su edad y su fisonomía auténtica.",
      mutation: "Su estructura facial se mantiene bajo una piel gris-verde enfermiza con suturas, grapas y cicatrices visibles. Su frente se aplana con una cicatriz cosida horizontal, dos pernos de metal oxidados sobresalen a los lados de su cuello, mandíbula cuadrada y párpados pesados con ojeras oscuras.",
      outfit: "Viste un abrigo oscuro y desgastado de época sobre su prenda original, manteniendo su posición y postura frontal.",
      environment: "Fondo de un laboratorio gótico de piedra con bobinas eléctricas que chispean, altas ventanas y relámpagos en una noche de tormenta eléctrica. Primer plano, hiperdetallado.",
      styleShort: "Ilustración cinematográfica de terror gótico clásico",
      identityShort: "Rostro natural, mirada y expresión preservadas",
      mutationShort: "Piel gris-verde, cicatrices cosidas y pernos en el cuello",
      outfitShort: "Abrigo oscuro de época desgastado en postura original",
      environmentShort: "Laboratorio gótico con relámpagos y bobinas eléctricas"
    },
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
    layers: {
      style: "Una ilustración cinematográfica de ciencia ficción y fantasía cósmica...",
      identity: "...que transforma a la persona de la imagen en una criatura alienígena, conservando estrictamente su rostro natural, su edad y su identidad reconocible.",
      mutation: "Su cabeza se vuelve sutilmente más alargada hacia atrás manteniendo su fisonomía. Su piel es suave, azul-grisácea y translúcida con venas tenues y sutil brillo bioluminiscente, enormes ojos almendrados completamente negros y brillantes, nariz reducida a sutiles ranuras y boca fina.",
      outfit: "Viste su prenda oscura original combinada con un traje espacial orgánico de cuello estilizado, manteniendo su postura frontal.",
      environment: "Fondo del espacio profundo con nebulosas cósmicas en tonos turquesa y violeta, estrellas lejanas y suave iluminación extraterrestre. Muy detallado, primer plano.",
      styleShort: "Ilustración de ciencia ficción y fantasía cósmica",
      identityShort: "Fisonomía real e identidad reconocible",
      mutationShort: "Piel azulada bioluminiscente y ojos negros almendrados",
      outfitShort: "Traje cósmico orgánico en postura original",
      environmentShort: "Espacio profundo con nebulosas violetas y estrellas"
    },
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
    layers: {
      style: "Una ilustración cinematográfica de fantasía oscura y terror en plano medio...",
      identity: "...que transforma a la persona de la imagen en un poderoso demonio del inframundo, preservando de manera estricta sus rasgos faciales exactos, su edad y su identidad reconocible.",
      mutation: "La persona conserva su fisonomía bajo una piel rojo carmesí oscuro rugosa con venas marcadas. De su frente crecen dos grandes cuernos negros curvados y ásperos, sus ojos brillan en amarillo ardiente con pupilas de ranura vertical, orejas puntiagudas y sonrisa con colmillos afilados.",
      outfit: "Lleva su misma ropa oscura rasgada por la transformación, con cuello musculoso y pequeñas brasas y chispas flotando sobre los hombros en su postura original.",
      environment: "Fondo de un abismo infernal con un portal antiguo de roca negra del que emana lava ardiente, humo denso y cenizas flotantes, con iluminación de fuego lateral. Primer plano, muy detallado.",
      styleShort: "Ilustración de fantasía oscura y terror cinematográfico",
      identityShort: "Rasgos faciales exactos y edad preservados",
      mutationShort: "Piel roja carmesí, cuernos curvados y ojos de fuego",
      outfitShort: "Ropa oscura rasgada con brasas flotantes",
      environmentShort: "Portal infernal de roca con ríos de lava y ceniza"
    },
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
    layers: {
      style: "Una fotografía cinematográfica y fotorrealista (fotograma de película de misterio de 35mm)...",
      identity: "...que captura a la persona de la imagen con maquillaje artístico de esqueleto, conservando estrictamente su rostro natural, su edad y sus facciones reconocibles.",
      mutation: "Su fisonomía y arrugas se mantienen bajo un elaborado maquillaje SFX de calavera: cuencas de los ojos y punta de nariz en negro mate profundo, pómulos y mandíbula sombreados para acentuar el hueso, y líneas de dientes pintadas con precisión sobre los labios.",
      outfit: "Viste un saco o chaqueta oscura, desgastada y rústica con cuello levantado, manteniendo su postura natural.",
      environment: "Fondo de un cementerio antiguo bajo niebla baja iluminada por calabazas de Halloween a lo lejos y una gran luna llena brillante. Grano cinematográfico de 35mm, fotorrealista.",
      styleShort: "Fotografía cinematográfica fotorrealista de 35mm",
      identityShort: "Rostro natural, edad y líneas de expresión intactas",
      mutationShort: "Maquillaje SFX de calavera, cuencas negras y pómulos",
      outfitShort: "Chaqueta oscura rústica con cuello levantado",
      environmentShort: "Cementerio con niebla, calabazas lejanas y luna llena"
    },
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
    layers: {
      style: "Una fotografía cinematográfica y fotorrealista (fotograma de película de misterio)...",
      identity: "...que captura la aparición espectral y fantasmal de la persona, preservando de manera estricta su rostro natural, su edad y su fisonomía reconocible.",
      mutation: "Todo su cuerpo es semitransparente y etéreo en tono azul-grisáceo espectral, desvaneciéndose en los bordes con un tenue brillo bioluminiscente. Sus ojos brillan con una fría luz sobrenatural blanco-azulada desde el interior con expresión contemplativa y serena.",
      outfit: "Viste una versión fantasmal y desvaída de su ropa oscura que se desintegra en niebla hacia abajo, levitando suavemente en su postura original.",
      environment: "Fondo nocturno de una casa abandonada de madera entre árboles retorcidos y niebla baja, iluminada por una fría luz de luna. Grano sutil de 35mm, fotorrealista.",
      styleShort: "Fotografía cinematográfica y fotorrealista de cine",
      identityShort: "Fisonomía real y edad reconocible en transparencia",
      mutationShort: "Figura etérea translúcida con ojos de luz espectral",
      outfitShort: "Ropaje fantasmal que se desintegra en niebla",
      environmentShort: "Mansión abandonada con árboles secos y luz de luna"
    },
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
    layers: {
      style: "Un fotograma cinematográfico fotorrealista de primer plano de Halloween...",
      identity: "...que captura a la persona de la imagen como una antigua momia egipcia, conservando estrictamente su rostro natural, su edad y sus facciones reconocibles.",
      mutation: "Vendas de lino antiguas y deshilachadas envuelven cabeza y cuello, dejando al descubierto el centro de su rostro: ojos, nariz y boca con sus líneas de expresión intactas, con sutil brillo dorado en la mirada entre polvo y sombras.",
      outfit: "Viste las vendas centenarias deshechas combinadas con jirones de tela rústica oscura de época sobre los hombros, en su postura original.",
      environment: "Fondo nocturno desenfocado de la base de una pirámide egipcia entre dunas, iluminada por antorchas parpadeantes, humo y fría luz de luna en tormenta de arena. Grano de 35mm.",
      styleShort: "Fotograma cinematográfico fotorrealista de 35mm",
      identityShort: "Centro del rostro, mirada y edad intactas",
      mutationShort: "Vendajes de lino milenario y mirada con brillo dorado",
      outfitShort: "Vendas deshechas y tela rústica oscura sobre hombros",
      environmentShort: "Pirámide entre dunas iluminada por antorchas y arena"
    },
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
    layers: {
      style: "Un fotograma cinematográfico fotorrealista y de primer plano...",
      identity: "...que captura a la persona de la imagen transformada en un misterioso guardián de calabaza, conservando estrictamente su rostro natural, su edad y sus facciones reconocibles.",
      mutation: "Su piel adquiere textura estriada de corteza de calabaza en tonos terrosos y anaranjados, manteniendo su fisonomía. Sus ojos y boca brillan desde el interior con una cálida y ardiente luz de Jack-o'-Lantern, con ramas secas y enredaderas brotando entre su cabello.",
      outfit: "Viste un atuendo rústico y oscuro cubierto de hojas marchitas de calabaza y enredaderas entrelazadas en su postura original.",
      environment: "Fondo de un campo de calabazas nocturno cubierto por densa niebla baja, bajo la luz de una gran luna llena y calabazas encendidas a lo lejos. Grano de 35mm, fotorrealista.",
      styleShort: "Fotograma cinematográfico fotorrealista de película",
      identityShort: "Fisonomía real y líneas de expresión intactas",
      mutationShort: "Piel de calabaza estriada, ojos ardientes y enredaderas",
      outfitShort: "Atuendo rústico con hojas marchitas de calabaza",
      environmentShort: "Huerto nocturno con niebla, luna llena y faroles"
    },
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
  initSoundPreference();
  updateAuthUI();
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
  const bookEl = document.getElementById('book');
  if (bookEl) {
    bookEl.classList.remove('book-opening', 'book-closing');
    bookEl.classList.toggle('book-cover-mode', index === 0);
  }

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
        leftHTML:  '',
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

      <!-- Indicador para invitar a abrir -->
      <div class="cover-open-prompt" title="Abrir grimorio">
        <span class="cop-sparkle">✨</span>
        <span class="cop-text">Toca aquí o la esquina para abrir</span>
        <span class="cop-arrow">➔</span>
      </div>
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
      <span style="font-family:var(--font-heading);font-size:.78rem;color:#1a5276;font-weight:700;display:block;margin-bottom:3px;">
        📸 ¿Querés practicar? Usá la foto del profe:
      </span>
      <button class="topbar-btn btn-download-profe" onclick="downloadBasePhoto()" style="font-size:.78rem;padding:4px 12px;margin:2px auto 0;">
        📥 Descargar Foto Base de Ejemplo
      </button>
    </div>

    <div style="text-align:center;margin-top:auto;padding:4px 0;">
      <div style="font-size:1.5rem;margin-bottom:2px;">🧙‍♀️</div>
      <div style="font-family:var(--font-heading);font-size:.78rem;color:var(--ink-faded);letter-spacing:.08em;text-transform:uppercase;">
        Pasá la página para entender los hechizos →
      </div>
    </div>
  </div>`;
}

// ── GUÍA DIDÁCTICA: ¿QUÉ ES UN PROMPT Y OBJETIVOS? ───────
function buildPromptGuideLeft() {
  return `<div class="text-page layers-guide-page">
    <div class="page-heading"><span class="orn">🧠</span>¿Qué es un Prompt?<span class="orn">🧠</span></div>
    <p class="page-intro-text">Un <strong>prompt</strong> es la <strong>fórmula mágica</strong>: la instrucción escrita que le dice a la Inteligencia Artificial exactamente qué transformar.</p>

    <div class="spell-section-label" style="margin-top:6px;font-size:0.86rem;">🎯 Los 3 Objetivos de este Prompt</div>

    <div class="intro-step" style="padding:6px 0;">
      <div class="intro-step-num" style="color:#2980b9;">1.</div>
      <div class="intro-step-text"><strong>Conservar la identidad:</strong> Mantener los rasgos principales de tu cara reconocibles.</div>
    </div>

    <div class="intro-step" style="padding:6px 0;">
      <div class="intro-step-num" style="color:#8e44ad;">2.</div>
      <div class="intro-step-text"><strong>Transformación monstruosa:</strong> Textura, colmillos, ojos o cuernos según el conjuro.</div>
    </div>

    <div class="intro-step" style="padding:6px 0;">
      <div class="intro-step-num" style="color:#d35400;">3.</div>
      <div class="intro-step-text"><strong>Atmósfera épica:</strong> Fondos oscuros, niebla, fuego y luces cinematográficas.</div>
    </div>

    <div class="layers-bottom-tip" style="margin-top:auto;">
      ✦ <strong>Recuerda:</strong> La IA sigue instrucciones claras: mientras más específico el hechizo, mejor la magia. ✦
    </div>
  </div>`;
}

function buildPromptGuideRight() {
  return `<div class="text-page layers-guide-page">
    <div class="page-heading"><span class="orn">🎭</span>¿Lleva Rol o No?<span class="orn">🎭</span></div>
    
    <div style="background:rgba(192,57,43,0.1);border-left:4px solid #c0392b;padding:8px 12px;border-radius:0 8px 8px 0;margin-top:6px;">
      <strong style="font-family:var(--font-heading);font-size:0.86rem;color:#8b1a2a;display:block;margin-bottom:3px;">❌ ¿Por qué NO usar un Rol largo?</strong>
      <p style="font-family:var(--font-ui), system-ui, sans-serif;font-size:0.84rem;color:#2e1508;margin:0;line-height:1.42;">
        En IAs generativas de imágenes (Bing, Gemini, ChatGPT), decirle <em>"Actúa como un pintor digital..."</em> confunde al generador: ¡podría dibujar a una persona pintando en un caballete en vez de transformar tu rostro!
      </p>
    </div>

    <div style="background:rgba(39,174,96,0.1);border-left:4px solid #27ae60;padding:8px 12px;border-radius:0 8px 8px 0;margin-top:10px;">
      <strong style="font-family:var(--font-heading);font-size:0.86rem;color:#1e7e43;display:block;margin-bottom:3px;">✔️ Lo que SÍ conviene (Estilo Directo):</strong>
      <p style="font-family:var(--font-ui), system-ui, sans-serif;font-size:0.84rem;color:#2e1508;margin:0;line-height:1.42;">
        Ir directo a la acción y usar <strong>palabras clave de estilo visual</strong>: <strong>"Arte conceptual digital"</strong>, <strong>"iluminación cinematográfica dramática"</strong> y <strong>"muy detallado"</strong>.
      </p>
    </div>

    <div style="text-align:center;margin-top:auto;padding:8px 0;">
      <div style="font-size:1.6rem;margin-bottom:2px;">🧱</div>
      <div style="font-family:var(--font-heading);font-size:0.82rem;color:#7a4a1a;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">
        Pasá la página: La Estructura en 5 Capas →
      </div>
    </div>
  </div>`;
}

// ── GUÍA DIDÁCTICA: LAS 5 CAPAS DE UN PROMPT (5TO Y 6TO) ──
function buildPromptLayersLeft() {
  return `<div class="text-page layers-guide-page">
    <div class="page-heading"><span class="orn">📐</span>Las 5 Capas del Prompt<span class="orn">📐</span></div>
    <p class="layers-intro-subtitle">
      Un prompt profesional se estructura en <strong>5 módulos clave</strong>:
    </p>

    <div class="layers-list">
      <div class="layer-step-card" style="--lcolor:#2980b9;">
        <span class="lsc-num">1</span>
        <div class="lsc-content">
          <strong class="lsc-title" style="color:#1a5276;">Estilo y Técnica:</strong>
          <span class="lsc-desc">El acabado visual ("Ilustración cinematográfica", "Arte conceptual").</span>
        </div>
      </div>

      <div class="layer-step-card" style="--lcolor:#27ae60;">
        <span class="lsc-num">2</span>
        <div class="lsc-content">
          <strong class="lsc-title" style="color:#196f3d;">Ancla de Identidad:</strong>
          <span class="lsc-desc">Regla de oro: "Preservando estrictamente sus rasgos faciales, edad y fisonomía".</span>
        </div>
      </div>

      <div class="layer-step-card" style="--lcolor:#c0392b;">
        <span class="lsc-num">3</span>
        <div class="lsc-content">
          <strong class="lsc-title" style="color:#922b21;">Zonas de Mutación:</strong>
          <span class="lsc-desc">Ojos (color/pupilas), piel (escamas/roca), boca (colmillos) y cabeza (cuernos).</span>
        </div>
      </div>

      <div class="layer-step-card" style="--lcolor:#8e44ad;">
        <span class="lsc-num">4</span>
        <div class="lsc-content">
          <strong class="lsc-title" style="color:#6c3483;">Vestuario y Postura:</strong>
          <span class="lsc-desc">Adapta la ropa al monstruo ("túnica desgastada", "capa gótica") manteniendo la pose.</span>
        </div>
      </div>

      <div class="layer-step-card" style="--lcolor:#d35400;">
        <span class="lsc-num">5</span>
        <div class="lsc-content">
          <strong class="lsc-title" style="color:#a04000;">Iluminación y Entorno:</strong>
          <span class="lsc-desc">"Luz de luna plateada", "niebla roja", "fuego". Aporta dramatismo y atmósfera.</span>
        </div>
      </div>
    </div>

    <div class="layers-bottom-tip">
      💡 <strong>Regla de oro:</strong> Si falta una capa, la IA inventa lo que falta. Sé específico.
    </div>
  </div>`;
}

function buildPromptLayersRight() {
  return `<div class="text-page layers-guide-page">
    <div class="page-heading"><span class="orn">🧪</span>Ejemplo en Acción<span class="orn">🧪</span></div>

    <div class="example-breakdown-card">
      <div class="ebc-header">ANÁLISIS DE UN HECHIZO REAL: HOMBRE LOBO</div>
      <div class="ebc-rows">
        <div class="ebc-row"><span class="ebc-tag" style="color:#2980b9;">[1. Estilo]</span> <span class="ebc-text">"Arte digital cinematográfico de fantasía oscura..."</span></div>
        <div class="ebc-row"><span class="ebc-tag" style="color:#27ae60;">[2. Identidad]</span> <span class="ebc-text">"...transforma al sujeto preservando su fisonomía y expresión..."</span></div>
        <div class="ebc-row"><span class="ebc-tag" style="color:#c0392b;">[3. Mutación]</span> <span class="ebc-text">"...pelaje gris áspero, hocico canino, ojos ámbar y colmillos..."</span></div>
        <div class="ebc-row"><span class="ebc-tag" style="color:#8e44ad;">[4. Ropa]</span> <span class="ebc-text">"...camisa oscura rasgada por la transformación..."</span></div>
        <div class="ebc-row"><span class="ebc-tag" style="color:#d35400;">[5. Entorno]</span> <span class="ebc-text">"...bosque tormentoso bajo luna llena y lluvia torrencial."</span></div>
      </div>
    </div>

    <!-- Muestra antes y después del ejemplo -->
    <div class="example-visual-comparison">
      <div class="evc-col">
        <span class="evc-label evc-label-before">FOTO BASE</span>
        <img src="img/foto-antes.png" alt="Antes" class="evc-img" />
      </div>
      <div class="evc-arrow">➔</div>
      <div class="evc-col">
        <span class="evc-label evc-label-after">CON LAS 5 CAPAS</span>
        <img src="img/lobo-resultado.jpg" alt="Lobo" class="evc-img" />
      </div>
    </div>

    <div class="layers-next-hint">
      🪄 ¡Pasá la página y elegí tu hechizo! ➔
    </div>
  </div>`;
}

// ── PÁGINA IZQUIERDA DE UN HECHIZO (info) ─────────────────
function buildSpellLeft(spell) {
  const l = spell.layers || ensureSpellLayers(spell);
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

    <!-- Ingredientes Visuales (fila compacta) -->
    <div class="page-ingredients-row">
      ${spell.ingredients.map(i => {
        const icon = typeof i === 'object' ? i.icon : '🧪';
        const name = typeof i === 'object' ? i.name : i;
        return `
          <div class="ingredient-chip" title="${name}">
            <span class="ingredient-chip-icon">${icon}</span>
            <span class="ingredient-chip-name">${name}</span>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Estructura en 5 Capas del Hechizo con colores -->
    <div class="spell-layers-card">
      <div class="slc-header">
        <span class="slc-title">📐 LAS 5 CAPAS DEL PROMPT</span>
        <span class="slc-guide-hint">Reflejo en este Hechizo</span>
      </div>
      <div class="slc-list">
        <div class="slc-item slc-1" style="--lc:#2980b9;" title="1. Estilo y Técnica">
          <span class="slc-badge">1. Estilo</span>
          <span class="slc-text">${l.styleShort || l.style}</span>
        </div>
        <div class="slc-item slc-2" style="--lc:#27ae60;" title="2. Ancla de Identidad">
          <span class="slc-badge">2. Identidad</span>
          <span class="slc-text">${l.identityShort || l.identity}</span>
        </div>
        <div class="slc-item slc-3" style="--lc:#c0392b;" title="3. Zonas de Mutación">
          <span class="slc-badge">3. Mutación</span>
          <span class="slc-text">${l.mutationShort || l.mutation}</span>
        </div>
        <div class="slc-item slc-4" style="--lc:#8e44ad;" title="4. Vestuario y Postura">
          <span class="slc-badge">4. Vestuario</span>
          <span class="slc-text">${l.outfitShort || l.outfit}</span>
        </div>
        <div class="slc-item slc-5" style="--lc:#d35400;" title="5. Iluminación y Entorno">
          <span class="slc-badge">5. Entorno</span>
          <span class="slc-text">${l.environmentShort || l.environment}</span>
        </div>
      </div>
    </div>

    <!-- Conjuro -->
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
//  SISTEMA DE SONIDO DE HOJA / PÁGINA (WEB AUDIO API)
// ══════════════════════════════════════════════════════════
let audioCtx = null;
let soundEnabled = true;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function initSoundPreference() {
  const saved = localStorage.getItem('grimorio_sound_enabled');
  if (saved !== null) {
    soundEnabled = saved === 'true';
  } else {
    soundEnabled = true;
  }
  updateSoundButtonUI();
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  localStorage.setItem('grimorio_sound_enabled', String(soundEnabled));
  updateSoundButtonUI();
  if (soundEnabled) {
    playPageFlipSound();
  }
}

function updateSoundButtonUI() {
  const btn = document.getElementById('soundToggleBtn');
  if (!btn) return;
  if (soundEnabled) {
    btn.innerHTML = '🔊 <span class="sound-label">Sonido: ON</span>';
    btn.classList.remove('sound-muted');
    btn.title = 'Efecto de sonido activado (clic para silenciar)';
  } else {
    btn.innerHTML = '🔇 <span class="sound-label">Sonido: OFF</span>';
    btn.classList.add('sound-muted');
    btn.title = 'Sonido silenciado (clic para activar)';
  }
}

function playPageFlipSound() {
  if (!soundEnabled) return;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Variación aleatoria natural para cada giro de hoja
    const randPitch = 0.88 + Math.random() * 0.24; // 0.88 - 1.12
    const duration = 0.27 * randPitch;

    // ── 1. RUIDO ROSA FILTRADO: Roce de pergamino antiguo ──
    const bufferSize = Math.floor(ctx.sampleRate * duration);
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2 + white * 0.5362) * 0.15;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;

    // Filtro pasa banda para darle el timbre característico del papel
    const bandpass = ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.Q.setValueAtTime(2.0, now);
    bandpass.frequency.setValueAtTime(750 * randPitch, now);
    bandpass.frequency.exponentialRampToValueAtTime(2200 * randPitch, now + duration * 0.4);
    bandpass.frequency.exponentialRampToValueAtTime(650 * randPitch, now + duration);

    // Envolvente de ganancia
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.001, now);
    noiseGain.gain.linearRampToValueAtTime(0.42, now + 0.02);
    noiseGain.gain.exponentialRampToValueAtTime(0.2, now + duration * 0.45);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    noiseSource.connect(bandpass);
    bandpass.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noiseSource.start(now);
    noiseSource.stop(now + duration);

    // ── 2. IMPACTO GRAVE: Acomodo del lomo y peso de la página ──
    const flopDuration = 0.11;
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(145 * randPitch, now + duration * 0.3);
    osc.frequency.exponentialRampToValueAtTime(50, now + duration * 0.3 + flopDuration);

    oscGain.gain.setValueAtTime(0.001, now);
    oscGain.gain.setValueAtTime(0.001, now + duration * 0.3);
    oscGain.gain.linearRampToValueAtTime(0.18, now + duration * 0.3 + 0.015);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + duration * 0.3 + flopDuration);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    osc.start(now + duration * 0.3);
    osc.stop(now + duration * 0.3 + flopDuration);

    // ── 3. SUSURRO MÁGICO SUTIL (Campanilla suave de grimorio) ──
    const chime = ctx.createOscillator();
    const chimeGain = ctx.createGain();

    chime.type = 'sine';
    chime.frequency.setValueAtTime(1800 * randPitch, now + 0.03);
    chime.frequency.exponentialRampToValueAtTime(2400 * randPitch, now + 0.16);

    chimeGain.gain.setValueAtTime(0.001, now);
    chimeGain.gain.linearRampToValueAtTime(0.03, now + 0.05);
    chimeGain.gain.exponentialRampToValueAtTime(0.0005, now + 0.22);

    chime.connect(chimeGain);
    chimeGain.connect(ctx.destination);

    chime.start(now + 0.03);
    chime.stop(now + 0.23);

  } catch (err) {
    // Si el navegador bloquea audio antes del primer clic, continuar sin error
  }
}

// ══════════════════════════════════════════════════════════
//  ANIMACIÓN DE VOLTEO
// ══════════════════════════════════════════════════════════
function nextPage() {
  if (isAnimating || currentSpread >= TOTAL_SPREADS - 1) return;
  playPageFlipSound();
  isAnimating = true;

  const nextIndex = currentSpread + 1;
  const isOpeningCover = (currentSpread === 0);
  const bookEl = document.getElementById('book');

  if (isOpeningCover && bookEl) {
    bookEl.classList.remove('book-cover-mode');
    bookEl.classList.add('book-opening');
  }

  const { leftHTML: nextLeft, rightHTML: nextRight,
          pageL: nextPageL, pageR: nextPageR } = buildSpread(SPREADS[nextIndex], nextIndex);

  const flipLayer = document.getElementById('flipLayer');
  const flipFront = document.getElementById('flipFront');
  const flipBack  = document.getElementById('flipBack');
  const pageLeft  = document.getElementById('pageLeft');
  const pageRight = document.getElementById('pageRight');

  // Frente del flip = página derecha actual (la portada si abre)
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
    if (bookEl) {
      bookEl.classList.remove('book-opening', 'book-cover-mode');
    }
    updateNav();
    isAnimating = false;
  }, { once: true });
}

function prevPage() {
  if (isAnimating || currentSpread <= 0) return;
  playPageFlipSound();
  isAnimating = true;

  const prevIndex = currentSpread - 1;
  const isClosingCover = (prevIndex === 0);
  const bookEl = document.getElementById('book');

  if (isClosingCover && bookEl) {
    bookEl.classList.add('book-closing');
  }

  const { leftHTML: prevLeft, rightHTML: prevRight,
          pageL: prevPageL, pageR: prevPageR } = buildSpread(SPREADS[prevIndex], prevIndex);

  const flipLayer = document.getElementById('flipLayer');
  const flipFront = document.getElementById('flipFront');
  const flipBack  = document.getElementById('flipBack');
  const pageLeft  = document.getElementById('pageLeft');
  const pageRight = document.getElementById('pageRight');

  // Frente = página derecha anterior (la portada si cierra)
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
    if (bookEl) {
      bookEl.classList.remove('book-closing');
      if (isClosingCover) {
        bookEl.classList.add('book-cover-mode');
      } else {
        bookEl.classList.remove('book-cover-mode');
      }
    }
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
  if (cnext) {
    cnext.style.opacity = currentSpread === TOTAL_SPREADS-1 ? '0' : '1';
    cnext.style.pointerEvents = currentSpread === TOTAL_SPREADS-1 ? 'none' : '';
    cnext.title = currentSpread === 0 ? 'Abrir grimorio' : 'Siguiente página';
  }

  const pageRightEl = document.querySelector('.right-page');
  if (pageRightEl) {
    pageRightEl.title = currentSpread === 0 ? 'Haz clic para abrir el grimorio' : 'Página siguiente';
  }
}

function jumpToSpread(target) {
  if (isAnimating || target === currentSpread) return;
  playPageFlipSound();
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
function ensureSpellLayers(spell) {
  if (spell.layers) return spell.layers;
  return {
    style: "Ilustración cinematográfica y arte digital de fantasía oscura...",
    identity: "conservando estrictamente su rostro natural, su edad y sus facciones reconocibles.",
    mutation: spell.prompt || "Transformación con rasgos monstruosos y detalles fantásticos.",
    outfit: "Vestuario adaptado a la criatura manteniendo su postura original.",
    environment: "Atmósfera dramática con iluminación cinematográfica y sombras profundas.",
    styleShort: "Arte digital y cinematográfico",
    identityShort: "Rostro y edad preservados",
    mutationShort: "Transformación en criatura fantástica",
    outfitShort: "Vestuario adaptado en su postura",
    environmentShort: "Fondo e iluminación dramática"
  };
}

function renderPromptWithLayers(spell) {
  const l = spell.layers || ensureSpellLayers(spell);
  return `
    <div class="prompt-layers-container">
      <div class="plc-item plc-style">
        <div class="plc-badge">
          <span class="plc-dot">1</span> [1. ESTILO Y TÉCNICA]
        </div>
        <div class="plc-content">${l.style}</div>
      </div>

      <div class="plc-item plc-identity">
        <div class="plc-badge">
          <span class="plc-dot">2</span> [2. ANCLA DE IDENTIDAD]
        </div>
        <div class="plc-content">${l.identity}</div>
      </div>

      <div class="plc-item plc-mutation">
        <div class="plc-badge">
          <span class="plc-dot">3</span> [3. ZONAS DE MUTACIÓN]
        </div>
        <div class="plc-content">${l.mutation}</div>
      </div>

      <div class="plc-item plc-outfit">
        <div class="plc-badge">
          <span class="plc-dot">4</span> [4. VESTUARIO Y POSTURA]
        </div>
        <div class="plc-content">${l.outfit}</div>
      </div>

      <div class="plc-item plc-environment">
        <div class="plc-badge">
          <span class="plc-dot">5</span> [5. ILUMINACIÓN Y ENTORNO]
        </div>
        <div class="plc-content">${l.environment}</div>
      </div>
    </div>
  `;
}

function openSpell(spell) {
  currentSpell = spell;
  const modal = document.getElementById('spellModal');

  document.getElementById('modalIcon').textContent       = spell.icon;
  document.getElementById('modalTitle').textContent      = spell.name;
  document.getElementById('modalSubtitle').textContent   = spell.subtitle;
  document.getElementById('modalIncantation').textContent= spell.incantation;
  document.getElementById('modalTips').textContent       = spell.tips;

  // Render Prompt con las 5 capas resaltadas en sus colores
  document.getElementById('modalPrompt').innerHTML = renderPromptWithLayers(spell);

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
    closeSyncModal();
    closeNewSpellModal();
    closePromptResultModal();
    closeStudentLoginModal();
    return;
  }

  // Navegación de páginas con teclado (flechas o espacio) si no hay modales abiertos ni se escribe
  const isInputActive = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);
  const isAnyModalOpen = document.querySelector('.modal-overlay.active');
  if (!isInputActive && !isAnyModalOpen) {
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      nextPage();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prevPage();
    }
  }
});

// Soporte gestual táctil para pasar páginas en pantallas táctiles y tablets escolares
let touchStartX = 0;
let touchStartY = 0;
document.addEventListener('touchstart', e => {
  if (e.changedTouches && e.changedTouches[0]) {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }
}, { passive: true });

document.addEventListener('touchend', e => {
  if (!e.changedTouches || !e.changedTouches[0]) return;
  const diffX = e.changedTouches[0].screenX - touchStartX;
  const diffY = e.changedTouches[0].screenY - touchStartY;
  // Solo activar si es un swipe horizontal claro (> 50px) y no un scroll vertical
  if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY) * 1.4) {
    const isAnyModalOpen = document.querySelector('.modal-overlay.active');
    if (!isAnyModalOpen) {
      if (diffX < 0) nextPage();
      else prevPage();
    }
  }
}, { passive: true });

// ── Copiar ────────────────────────────────────────────────
async function copyPrompt() {
  if (!currentSpell) return;
  const btn  = document.getElementById('copyBtn');
  const l = currentSpell.layers || ensureSpellLayers(currentSpell);
  // Texto limpio completo para la IA (sin etiquetas HTML)
  const text = (currentSpell.prompt || `${l.style} ${l.identity}\n\n${l.mutation}\n\n${l.outfit}\n\n${l.environment}`).trim();
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
//  AUTENTICACIÓN DE ALUMNOS (5° Y 6° GRADO)
// ══════════════════════════════════════════════════════════
function getLoggedStudent() {
  try {
    const raw = localStorage.getItem('grimorio_logged_student');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setLoggedStudent(student) {
  if (student) {
    localStorage.setItem('grimorio_logged_student', JSON.stringify(student));
  } else {
    localStorage.removeItem('grimorio_logged_student');
  }
  updateAuthUI();
}

function updateAuthUI() {
  const container = document.getElementById('userAuthStatus');
  if (!container) return;
  const student = getLoggedStudent();
  if (student) {
    container.innerHTML = `
      <div class="logged-user-badge" title="Alumno/a verificado/a">
        <span class="user-badge-icon">🧙</span>
        <span class="user-badge-name">${student.name} <small class="user-badge-grade">(${student.gradeCode})</small></span>
        <button type="button" class="btn-logout" onclick="logoutStudent()" title="Cerrar sesión de ${student.name}">✕</button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <button type="button" class="topbar-btn btn-login" onclick="openStudentLoginModal(false)" title="Iniciar sesión con usuario y contraseña única de alumno">
        🔑 Ingreso Alumnos
      </button>
    `;
  }
}

function openStudentLoginModal(redirectAfterLogin = false) {
  const modal = document.getElementById('studentLoginModal');
  if (!modal) return;
  modal.dataset.redirect = redirectAfterLogin ? 'true' : 'false';
  const err = document.getElementById('loginErrorMsg');
  if (err) err.style.display = 'none';
  const u = document.getElementById('loginUsername');
  const p = document.getElementById('loginPassword');
  if (u) u.value = '';
  if (p) p.value = '';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  setTimeout(() => { if (u) u.focus(); }, 150);
}

function closeStudentLoginModal(e) {
  if (e && e.target !== document.getElementById('studentLoginModal')) return;
  const modal = document.getElementById('studentLoginModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function handleStudentLogin(e) {
  e.preventDefault();
  const uInput = (document.getElementById('loginUsername')?.value || '').trim().toLowerCase();
  const pInput = (document.getElementById('loginPassword')?.value || '').trim();
  const err = document.getElementById('loginErrorMsg');

  const db = (typeof STUDENTS_DB !== 'undefined') ? STUDENTS_DB : [];
  const student = db.find(s => 
    s.username.toLowerCase() === uInput && s.password.toLowerCase() === pInput.toLowerCase()
  );

  if (!student) {
    if (err) {
      err.style.display = 'block';
      err.textContent = '❌ Usuario o contraseña incorrecta. Revisá la tarjeta única que te entregó el profesor.';
    }
    return;
  }

  if (err) err.style.display = 'none';
  setLoggedStudent(student);
  const modal = document.getElementById('studentLoginModal');
  const redirect = modal && modal.dataset.redirect === 'true';
  closeStudentLoginModal();

  alert(`✨ ¡Bienvenido/a al Grimorio, ${student.name} (${student.gradeCode})! Sesión iniciada correctamente.`);

  if (redirect) {
    openNewSpellModal();
  }
}

function logoutStudent() {
  const cur = getLoggedStudent();
  if (cur && confirm(`¿Cerrar sesión de ${cur.name}?`)) {
    setLoggedStudent(null);
    const modal = document.getElementById('newSpellModal');
    if (modal && modal.classList.contains('active')) {
      closeNewSpellModal();
    }
  }
}

// ══════════════════════════════════════════════════════════
//  CREADOR DE NUEVO HECHIZO POR EQUIPOS (LAS 5 CAPAS)
// ══════════════════════════════════════════════════════════
let newSpellImageData = null;

function openNewSpellModal() {
  const logged = getLoggedStudent();
  if (!logged) {
    openStudentLoginModal(true);
    return;
  }

  const modal = document.getElementById('newSpellModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // ASIGNAR Y BLOQUEAR EL NOMBRE CON EL ALUMNO AUTENTICADO
    const nameInput = document.getElementById('nsStudentName');
    if (nameInput) {
      nameInput.value = `${logged.name} (${logged.gradeCode})`;
      nameInput.readOnly = true;
      nameInput.classList.add('input-locked');
      nameInput.title = 'Identidad bloqueada por inicio de sesión. No se puede modificar.';
    }
    const lockedBadge = document.getElementById('nsStudentLockedBadge');
    if (lockedBadge) {
      lockedBadge.style.display = 'inline-flex';
      lockedBadge.innerHTML = `🔒 Alumno verificado: <strong>${logged.name}</strong> (${logged.gradeCode})`;
    }

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

  const logged = getLoggedStudent();
  const student = logged ? `${logged.name} (${logged.gradeCode})` : (document.getElementById('nsStudentName')?.value || 'Alumno/a').trim();
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
  const logged = getLoggedStudent();
  if (!logged) {
    alert('Debes iniciar sesión con tu usuario y contraseña de alumno para guardar tu hechizo en el libro.');
    openStudentLoginModal(true);
    return;
  }

  if (!newSpellImageData) {
    alert('Por favor, subí la imagen del resultado que generó el equipo.');
    return;
  }

  const student = `${logged.name} (${logged.gradeCode})`;
  const monster = document.getElementById('nsMonsterName').value.trim();
  const icon = document.getElementById('nsIcon').value.trim() || '✨';
  const color = document.getElementById('nsColor').value || '#8e44ad';
  const diff = document.getElementById('nsDiff').value;
  const incantation = document.getElementById('nsIncantation').value.trim();

  const l1 = (document.getElementById('nsLayer1')?.value || '').trim() || 'Una ilustración cinematográfica de fantasía y terror';
  const l2 = (document.getElementById('nsLayer2')?.value || '').trim() || 'conservando estrictamente su rostro natural, su edad y sus facciones faciales reconocibles';
  const l3 = (document.getElementById('nsLayer3')?.value || '').trim() || `con rasgos de ${monster}`;
  const l4 = (document.getElementById('nsLayer4')?.value || '').trim() || 'con vestuario adaptado a la criatura manteniendo su postura original';
  const l5 = (document.getElementById('nsLayer5')?.value || '').trim() || 'bajo una iluminación dramática y atmósfera de misterio';

  const layersObj = {
    style: l1,
    identity: l2,
    mutation: l3,
    outfit: l4,
    environment: l5,
    styleShort: l1.length > 38 ? l1.slice(0, 35) + '...' : l1,
    identityShort: l2.length > 38 ? l2.slice(0, 35) + '...' : l2,
    mutationShort: l3.length > 38 ? l3.slice(0, 35) + '...' : l3,
    outfitShort: l4.length > 38 ? l4.slice(0, 35) + '...' : l4,
    environmentShort: l5.length > 38 ? l5.slice(0, 35) + '...' : l5,
  };

  const fullPrompt = document.getElementById('nsLivePromptPreview')?.textContent || `${l1} que transforma a la persona de la imagen en ${monster}, ${l2}.\n\n${l3}\n\n${l4} ${l5}`;

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
    layers: layersObj,
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

// ── Sincronización en la Nube (Firebase Cloud Firestore) ───
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDn2KHTQyEXs-RQgcdoZ4UqPFl9wVAhUBU",
  authDomain: "halloween-76ac1.firebaseapp.com",
  projectId: "halloween-76ac1",
  storageBucket: "halloween-76ac1.firebasestorage.app",
  messagingSenderId: "944917058303",
  appId: "1:944917058303:web:2f134057bd12b4afb3b2ca"
};

let firestoreDb = null;

function initCloudSync() {
  try {
    if (typeof firebase !== 'undefined') {
      if (!firebase.apps.length) {
        firebase.initializeApp(FIREBASE_CONFIG);
      }
      firestoreDb = firebase.firestore();
      updateSyncUI(true, 'Nube Activa (Firestore)');
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
  if (!firestoreDb) return;
  try {
    firestoreDb.collection('custom_spells').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added' || change.type === 'modified') {
          const spell = change.doc.data();
          if (spell && spell.id) {
            saveSpellLocal(spell);
            addNewSpellToBook(spell, false);
          }
        }
      });
      updateSyncUI(true, 'Nube Activa (En Vivo)');
    }, (err) => {
      console.warn('Aviso de conexión Firestore:', err);
      updateSyncUI(false, 'Modo Local');
    });
  } catch (e) {
    console.warn('Error escuchando Firestore:', e);
  }
}

function saveSpellToCloud(spell) {
  if (!firestoreDb) return;
  try {
    const cleanSpell = JSON.parse(JSON.stringify(spell));
    firestoreDb.collection('custom_spells').doc(String(spell.id)).set(cleanSpell)
      .then(() => console.log('✨ Hechizo sincronizado en Firestore exitosamente'))
      .catch((err) => console.warn('Error guardando en Firestore:', err));
  } catch (e) {
    console.warn('No se pudo enviar a Firestore:', e);
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
  if (cardHeading) cardHeading.textContent = isConnected ? 'Sincronización en la Nube Activa (halloween-76ac1)' : 'Modo Local (Respaldo en esta máquina)';
  if (cardDesc) {
    cardDesc.textContent = isConnected
      ? 'Los nuevos hechizos que agregue cualquier alumno se sincronizan automáticamente entre todas las computadoras en tiempo real.'
      : 'Tus hechizos se guardan de forma segura en esta máquina. Podés exportar el archivo JSON o verificar tu conexión a internet.';
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

