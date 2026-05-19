export const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'estructura', label: 'Estructura social' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'trazabilidad', label: 'Trazabilidad' },
  { id: 'taller', label: 'Taller' },
  { id: 'rol', label: 'Rol profesional' },
  { id: 'evaluacion', label: 'Evaluación' },
  { id: 'cierre', label: 'Cierre' },
]

export const socialLayers = [
  {
    id: 'individuo',
    title: 'Individuo',
    icon: '🧠',
    subtitle: 'Emociones, impulsividad e identidad',
    body:
      'El taller parte de la experiencia adolescente sin reducirla a responsabilidad individual: trabaja señales de alerta, regulación emocional, autoestima y toma de decisiones situada.',
  },
  {
    id: 'iguales',
    title: 'Grupo de iguales',
    icon: '👥',
    subtitle: 'Pertenencia, aceptación y presión social',
    body:
      'El grupo puede actuar como factor de riesgo o protección. Por eso se entrenan respuestas asertivas, alianzas positivas y alternativas de ocio compartido.',
  },
  {
    id: 'familia',
    title: 'Familia',
    icon: '🏠',
    subtitle: 'Comunicación, límites y apoyo',
    body:
      'La intervención reconoce la desigual supervisión adulta y propone continuidad educativa entre centro, familia y recursos de orientación.',
  },
  {
    id: 'escuela',
    title: 'Escuela',
    icon: '🏫',
    subtitle: 'Tutoría, orientación y clima protector',
    body:
      'El centro educativo facilita accesibilidad, detección temprana, acompañamiento y seguimiento no estigmatizante del alumnado.',
  },
  {
    id: 'redes',
    title: 'Redes sociales y publicidad',
    icon: '📱',
    subtitle: 'Normalización, sesgos y economía de la atención',
    body:
      'La publicidad digital y las redes pueden construir deseo, urgencia y falsa percepción de control; el taller desarrolla lectura crítica de estos mensajes.',
  },
  {
    id: 'comunidad',
    title: 'Comunidad y políticas públicas',
    icon: '🏛️',
    subtitle: 'Recursos, ocio y condiciones de posibilidad',
    body:
      'Prevenir exige entornos de apoyo: recursos comunitarios, ocio saludable, referentes adultos y coordinación sociosanitaria ante señales de riesgo.',
  },
]

export const diagnosis = [
  {
    area: 'Salud mental',
    icon: '💬',
    current: 'Malestar, estrés académico y dificultad para verbalizar necesidades.',
    need: 'Alfabetización emocional y acceso a ayuda.',
    target: 'Reconocer señales, nombrar emociones y pedir apoyo.',
    protection: 'Tutoría, orientación, familia y grupo seguro.',
  },
  {
    area: 'Alcohol y cannabis',
    icon: '🛡️',
    current: 'Mitos de control, ocio normalizado y baja percepción de riesgo.',
    need: 'Información significativa y pensamiento crítico.',
    target: 'Cuestionar falsas creencias y anticipar consecuencias.',
    protection: 'Educación sanitaria, debate guiado y apoyo entre iguales.',
  },
  {
    area: 'Apuestas online',
    icon: '🎯',
    current: 'Publicidad digital, deporte, redes y expectativa de ganancia rápida.',
    need: 'Comprender sesgos, impulsividad y presión social.',
    target: 'Identificar riesgo económico, emocional y relacional.',
    protection: 'Análisis crítico de publicidad y alternativas de ocio.',
  },
  {
    area: 'Presión grupal',
    icon: '👥',
    current: 'Deseo de pertenecer y temor a quedar fuera del grupo.',
    need: 'Comunicación asertiva y ensayo de respuestas.',
    target: 'Decir no, proponer alternativas y buscar alianzas.',
    protection: 'Role playing, cooperación y modelos positivos.',
  },
  {
    area: 'Hábitos saludables',
    icon: '🌿',
    current: 'Sueño irregular, pantallas, sedentarismo y ocio poco planificado.',
    need: 'Rutinas de autocuidado y pertenencia saludable.',
    target: 'Diseñar un plan breve de ocio, descanso y apoyo.',
    protection: 'Actividad física, ocio comunitario y autocuidado.',
  },
]

export const traceability = [
  {
    need: 'Alfabetización emocional',
    objective: 'Relacionar bienestar emocional y conductas de riesgo.',
    content: 'Emociones, señales de alerta, autocuidado y recursos.',
    session: 'S1 · Mapa de bienestar',
    indicator: 'Nombra emociones, señales y un recurso de apoyo.',
  },
  {
    need: 'Mitos sobre consumo',
    objective: 'Reflexionar sobre riesgos de alcohol y cannabis.',
    content: 'Percepción de riesgo, falsas creencias y consecuencias.',
    session: 'S2 · Mito o realidad',
    indicator: 'Clasifica mitos y justifica con argumentos adecuados.',
  },
  {
    need: 'Presión de iguales',
    objective: 'Identificar presión grupal y afrontarla.',
    content: 'Asertividad, pertenencia y toma de decisiones.',
    session: 'S2-S3 · Debate y role playing',
    indicator: 'Propone una respuesta saludable ante presión.',
  },
  {
    need: 'Riesgo digital y apuestas',
    objective: 'Analizar apuestas online y publicidad.',
    content: 'Sesgos, impulsividad, ganancia rápida y daño económico.',
    session: 'S3 · Casos y publicidad',
    indicator: 'Detecta elementos persuasivos y consecuencias.',
  },
  {
    need: 'Ocio y hábitos',
    objective: 'Fomentar alternativas saludables.',
    content: 'Sueño, pantallas, actividad física, ocio y apoyo.',
    session: 'S4 · Plan de autocuidado',
    indicator: 'Elabora un compromiso realista de hábito saludable.',
  },
]

export const sessions = [
  {
    id: 'S1',
    title: 'Bienestar emocional',
    icon: '💬',
    dynamic: 'Mapa personal de bienestar, señales de alerta y recursos.',
    intention: 'Nombrar emociones, reconocer malestar y activar apoyos seguros.',
    product: 'Mapa de autocuidado y apoyos.',
  },
  {
    id: 'S2',
    title: 'Mitos sobre alcohol y cannabis',
    icon: '🛡️',
    dynamic: 'Tarjetas "mito o realidad", contraste guiado y debate.',
    intention: 'Ajustar la percepción de riesgo desde evidencia, diálogo y pensamiento crítico.',
    product: 'Argumentario crítico.',
  },
  {
    id: 'S3',
    title: 'Apuestas online y presión social',
    icon: '🎯',
    dynamic: 'Análisis de publicidad, casos ficticios y role playing.',
    intention: 'Reconocer sesgos, presión del grupo y estrategias comerciales de captación.',
    product: 'Estrategias de respuesta.',
  },
  {
    id: 'S4',
    title: 'Hábitos saludables',
    icon: '🌿',
    dynamic: 'Plan de ocio positivo, pantallas, descanso y compromiso.',
    intention: 'Convertir la prevención en decisiones cotidianas sostenibles y acompañadas.',
    product: 'Plan breve de hábitos saludables.',
  },
]

export const educatorRoles = [
  {
    title: 'Mediación educativa',
    icon: '🤝',
    body:
      'Traduce contenidos de salud a situaciones adolescentes concretas, cuidando el clima grupal y la participación.',
  },
  {
    title: 'Prevención no estigmatizante',
    icon: '🛡️',
    body:
      'Evita el miedo como recurso central y trabaja competencias, apoyos y comprensión crítica del entorno.',
  },
  {
    title: 'Coordinación institucional',
    icon: '🏛️',
    body:
      'Conecta tutoría, orientación, profesorado, familias, profesionales sanitarios y recursos comunitarios.',
  },
  {
    title: 'Entornos protectores',
    icon: '🏫',
    body:
      'Favorece vínculos seguros, participación, ocio saludable y continuidad educativa más allá de la sesión.',
  },
]

export const evaluation = [
  {
    phase: 'Inicial',
    icon: '👁️',
    focus: 'Conocimientos previos, mitos, percepción de riesgo y necesidades.',
    instrument: 'Cuestionario anónimo breve y lluvia de ideas.',
    use: 'Ajustar ejemplos, lenguaje y profundidad.',
  },
  {
    phase: 'Proceso',
    icon: '🧭',
    focus: 'Participación respetuosa, argumentación, identificación de presión y alternativas.',
    instrument: 'Observación estructurada, productos grupales y notas del educador/a.',
    use: 'Reforzar habilidades y reconducir creencias.',
  },
  {
    phase: 'Final',
    icon: '📊',
    focus: 'Mitos corregidos, recursos conocidos, respuesta asertiva y plan de hábito saludable.',
    instrument: 'Postest, autoevaluación, rúbrica breve y valoración grupal.',
    use: 'Valorar logro de objetivos y mejoras.',
  },
  {
    phase: 'Seguimiento',
    icon: '🔁',
    focus: 'Aplicabilidad percibida, demandas de apoyo y continuidad en tutoría.',
    instrument: 'Revisión en tutoría/orientación a las 3-4 semanas.',
    use: 'Sostener cambios y derivar si procede.',
  },
]

export const academicValues = [
  'Lenguaje alineado con rúbrica universitaria.',
  'Claridad conceptual para Estructura Social.',
  'Coherencia entre teoría, diagnóstico, intervención y evaluación.',
  'Diseño que ordena la complejidad social sin simplificarla en exceso.',
]

export const references = [
  {
    entity: 'Observatorio Español de las Drogas y las Adicciones',
    year: '2025',
    title: 'Encuesta sobre uso de drogas en Enseñanzas Secundarias en España (ESTUDES), 1994-2025.',
    url: 'https://pnsd.sanidad.gob.es/profesionales/sistemasInformacion/sistemaInformacion/pdf/2025/ESTUDES_2025_Informe_nacional_df.pdf',
  },
  {
    entity: 'Organización Mundial de la Salud',
    year: '1986',
    title: 'Carta de Ottawa para la promoción de la salud.',
    url: 'https://www.who.int/teams/health-promotion/enhanced-wellbeing/first-global-conference',
  },
  {
    entity: 'Organización Mundial de la Salud',
    year: '2025',
    title: 'La salud mental de los adolescentes.',
    url: 'https://www.who.int/es/news-room/fact-sheets/detail/adolescent-mental-health',
  },
  {
    entity: 'UNODC & WHO',
    year: '2018',
    title: 'International standards on drug use prevention: Second updated edition.',
    url: 'https://www.who.int/publications/i/item/international-standards-for-drug-use-prevention-second-edition-2018',
  },
]