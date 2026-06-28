// Datos enriquecidos de productos con información detallada
export interface Product {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  isFeatured?: boolean;
  category?: string;
  
  // Información detallada para la expansión
  benefits: string[];
  ingredients: string[];
  skinType: string[];
  price: number;
  size: string;
  usage: string;
  dermatologicalInfo: string;
  productUrl?: string;
  whatsappUrl?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "DXN Total Moisturizing Cream",
    description: "Crema hidratante total que penetra profundamente en todas las capas de la piel, proporcionando hidratación integral y duración prolongada.",
    imageSrc: "/images/SC120.jpg",
    isFeatured: true,
    category: "Cosmética",
    productUrl: "https://dxnlodkeren.empretienda.com.ar/cuidado-de-la-piel/dxn-total-moisturizing-cream",
    whatsappUrl: "https://wa.me/p/26968814119419163/5493873698636",
    benefits: [
      "Hidratación integral en todas las capas de la piel",
      "Absorción rápida sin residuo graso",
      "Mantiene la elasticidad natural",
      "Suavidad y luminosidad inmediata",
      "Protección durante 24 horas"
    ],
    ingredients: [
      "Ganoderma Lucidum Extract (Hongo Lingzhi)",
      "Ácido Hialurónico",
      "Vitamina E",
      "Aceites naturales de origen orgánico",
      "Glicerina vegetal"
    ],
    skinType: ["Todos los tipos de piel", "Piel seca", "Piel deshidratada"],
    price: 45.00,
    size: "160ml",
    usage: "Aplicar mañana y noche sobre la piel limpia. Masajear suavemente en movimientos circulares hasta absorción completa.",
    dermatologicalInfo: "Dermatológicamente testada. Aprobada para piel sensible. Libre de parabenos y sulfatos.",
  },
  {
    id: "2",
    name: "DXN Smoothness and Nourishment Cream",
    description: "Fórmula especial que suaviza la textura cutánea mientras nutre profundamente con ingredientes naturales certificados.",
    imageSrc: "/images/SC121.jpg",
    isFeatured: true,
    category: "Cosmética",
    productUrl: "https://dxnlodkeren.empretienda.com.ar/cuidado-de-la-piel/dxn-smoothness-and-nourishment-cream",
    whatsappUrl: "https://wa.me/p/26554409934227351/5493873698636",
    benefits: [
      "Suavidad y textura sedosa",
      "Regeneración celular profunda",
      "Nutrición intensa y duradera",
      "Reduce líneas de expresión",
      "Revitaliza la piel apagada"
    ],
    ingredients: [
      "Ganoderma Lucidum (Lingzhi)",
      "Colágeno marino hidrolizado",
      "Aceite de Rosa Mosqueta",
      "Vitamina C estabilizada",
      "Extracto de Centella Asiática"
    ],
    skinType: ["Piel madura", "Piel sensible", "Todos los tipos"],
    price: 52.00,
    size: "160ml",
    usage: "Aplicar 2-3 veces al día sobre la piel limpia y seca. Para mejores resultados, usar después del tónico.",
    dermatologicalInfo: "Dermatológicamente probada. Hipoalergénica. Certificado cruelty-free.",
  },
  {
    id: "3",
    name: "DXN Maximum Hydration Cream",
    description: "Máxima hidratación para pieles secas y deshidratadas. Restaura la elasticidad natural y deja la piel radiante y suave.",
    imageSrc: "/images/SC119.jpg",
    isFeatured: true,
    category: "Cosmética",
    productUrl: "https://dxnlodkeren.empretienda.com.ar/cuidado-de-la-piel/dxn-maximum-hydration-cream",
    whatsappUrl: "https://wa.me/p/27120030877622918/5493873698636",
    benefits: [
      "Hidratación máxima y prolongada",
      "Restaura elasticidad y firmeza",
      "Piel radiante y luminosa",
      "Reduce sequedad extrema",
      "Barrera cutánea reforzada"
    ],
    ingredients: [
      "Ácido Hialurónico de múltiples pesos moleculares",
      "Ganoderma Lucidum",
      "Pantenol",
      "Aloe Vera",
      "Manteca de Karité"
    ],
    skinType: ["Piel seca", "Piel deshidratada", "Piel sensible"],
    price: 48.00,
    size: "350ml",
    usage: "Aplicar generosamente cada mañana y noche. Puede usarse como base para maquillaje o como tratamiento nocturno intenso.",
    dermatologicalInfo: "Testada para piel sensible. No comedogénica. Libre de químicos sintéticos.",
  },
  {
    id: "4",
    name: "DXN Deep Moisturizing Cream",
    description: "Crema de hidratación profunda con Ganoderma Lucidum. Ideal para regeneración nocturna y reparación cutánea intensiva.",
    imageSrc: "/images/SC118.jpg",
    isFeatured: true,
    category: "Cosmética",
    productUrl: "https://dxnlodkeren.empretienda.com.ar/cuidado-de-la-piel/dxn-deep-moisturizing-cream",
    whatsappUrl: "https://wa.me/p/26330387506660470/5493873698636",
    benefits: [
      "Regeneración y reparación nocturna profunda",
      "Hidratación intensiva",
      "Restauración de la barrera lipídica",
      "Desintoxicación cutánea",
      "Efecto tensor suave"
    ],
    ingredients: [
      "Ganoderma Lucidum polisacáridos",
      "Ceramidas",
      "Ácido Láctico",
      "Squalano",
      "Extractos botánicos certificados"
    ],
    skinType: ["Piel deshidratada", "Piel inflamada", "Piel reactiva"],
    price: 54.00,
    size: "350ml",
    usage: "Aplicar por las noches después de limpiar. Aplicar cantidad generosa y dejar actuar toda la noche.",
    dermatologicalInfo: "Dermatológicamente comprobada. Recomendada por especialistas. Fórmula anti-inflamatoria.",
  },
  {
    id: "5",
    name: "DXN Ultra Nutritive Cream",
    description: "Tratamiento nutricional ultra concentrado. Rico en antioxidantes para revitalizar y rejuvenecer tu piel desde adentro.",
    imageSrc: "/images/SC117.jpg",
    isFeatured: false,
    category: "Cosmética",
    productUrl: "https://dxnlodkeren.empretienda.com.ar/cuidado-de-la-piel/dxn-ultra-nutritive-cream",
    whatsappUrl: "https://wa.me/p/26316782811355179/5493873698636",
    benefits: [
      "Nutrición ultra concentrada",
      "Antioxidantes potentes",
      "Revitalización y rejuvenecimiento",
      "Brillo y luminosidad extrema",
      "Protección anti-envejecimiento"
    ],
    ingredients: [
      "Ganoderma Lucidum (máxima concentración)",
      "Vitamina E (Tocoferol)",
      "Astaxantina",
      "Coenzima Q10",
      "Polífenoles de Green Tea"
    ],
    skinType: ["Piel madura", "Piel envejecida", "Todos los tipos"],
    price: 58.00,
    size: "350ml",
    usage: "Aplicar 1-2 veces diarias sobre la piel limpia. Para tratamiento intensivo, usar noche a noche.",
    dermatologicalInfo: "Clínicamente testada. Mayor concentración de principios activos. Efecto tensor inmediato.",
  },
  {
    id: "6",
    name: "DXN Café 3 en 1",
    description: "DXN Café 3 en 1 es todo lo que usted necesita para una taza completa de café suave y delicioso.",
    imageSrc: "/images/cafe3en1.jpg",
    isFeatured: true,
    category: "Café",
    productUrl: "",
    whatsappUrl: "",
    benefits: [
      "Preparación rápida y práctica",
      "Sabor suave y delicioso",
      "Sin colorantes, saborizantes ni conservadores artificiales",
      "Energía natural para comenzar el día",
      "Textura cremosa y reconfortante"
    ],
    ingredients: [
      "Café 100% arábica",
      "Leche en polvo vegetal",
      "Extracto de Ganoderma Lucidum",
      "Vitaminas del grupo B",
      "Fibra natural"
    ],
    skinType: ["Todos", "Personas activas", "Amantes del café"],
    price: 42.00,
    size: "150g",
    usage: "Disolver un sachet en agua caliente y mezclar hasta obtener una bebida cremosa.",
    dermatologicalInfo: "Fórmula libre de conservantes artificiales y saborizantes sintéticos.",
  },
  {
    id: "7",
    name: "DXN Black Coffee",
    description: "Café negro intenso DXN para quienes buscan energía pura, concentración y un sabor profundo sin azúcar.",
    imageSrc: "/images/cafeinstantaneo.jpg",
    isFeatured: true,
    category: "Café",
    productUrl: "",
    whatsappUrl: "",
    benefits: [
      "Incrementa la energía sin sensación pesada",
      "Mejora el enfoque mental",
      "Bajo en calorías y sin azúcares añadidos",
      "Rico en antioxidantes naturales",
      "Ideal para rutinas activas"
    ],
    ingredients: [
      "Café instantáneo de alta calidad",
      "Extracto de Ganoderma Lucidum",
      "Extracto de cardamomo",
      "Vitaminas del grupo B",
      "Polifenoles naturales"
    ],
    skinType: ["Todos", "Adultos", "Emprendedores"],
    price: 36.00,
    size: "120g",
    usage: "Agregar una cucharadita en agua caliente y revolver bien.",
    dermatologicalInfo: "Sin colorantes ni conservantes. Fórmula limpia para consumo diario.",
  },
  {
    id: "8",
    name: "DXN Lion's Mane Coffee",
    description: "Café con Lion's Mane para potenciar tu enfoque, claridad mental y bienestar general en cada taza.",
    imageSrc: "/images/lionsmanecoffe.jpg",
    isFeatured: true,
    category: "Café",
    productUrl: "",
    whatsappUrl: "",
    benefits: [
      "Apoya la concentración y la memoria",
      "Energía suave y estable",
      "Aroma intenso y sabor equilibrado",
      "Favorece el bienestar neuronal",
      "Sin aditivos artificiales"
    ],
    ingredients: [
      "Café instantáneo premium",
      "Extracto de Lion's Mane",
      "Extracto de Ganoderma Lucidum",
      "Vitaminas del grupo B",
      "Fibra natural"
    ],
    skinType: ["Todos", "Profesionales", "Estudiantes"],
    price: 48.00,
    size: "150g",
    usage: "Disolver un sachet en agua caliente y mezclar hasta que quede homogéneo.",
    dermatologicalInfo: "Fórmula natural sin colorantes ni conservantes.",
  },
  {
    id: "9",
    name: "DXN Shiitake Coffee 3 in 1",
    description: "Café 3 en 1 con extracto de shiitake, ideal para energía equilibrada y una experiencia deliciosa.",
    imageSrc: "/images/shiitakecofee3en1.jpg",
    isFeatured: false,
    category: "Café",
    productUrl: "",
    whatsappUrl: "",
    benefits: [
      "Ayuda a mantener energía constante",
      "Sabor suave y cremoso",
      "Aporta beneficios del shiitake",
      "Fácil de preparar",
      "Perfecto para comenzar el día"
    ],
    ingredients: [
      "Café instantáneo",
      "Extracto de shiitake",
      "Leche en polvo vegetal",
      "Extracto de Ganoderma Lucidum",
      "Vitaminas naturales"
    ],
    skinType: ["Todos", "Amantes del café", "Personas activas"],
    price: 45.00,
    size: "150g",
    usage: "Mezclar un sachet con agua caliente y revolver hasta disolver.",
    dermatologicalInfo: "Libre de saborizantes y conservantes artificiales.",
  },
  {
    id: "10",
    name: "DXN Shiitake Coffee 3 en 1 Suave",
    description: "Versión suave del clásico DXN Shiitake Coffee 3 en 1 para quienes buscan una taza delicada y nutritiva.",
    imageSrc: "/images/shiitakecoffee_3en1suave.jpg",
    isFeatured: false,
    category: "Café",
    productUrl: "",
    whatsappUrl: "",
    benefits: [
      "Sabor más suave y delicado",
      "Energía sin amargor excesivo",
      "Ideal para el desayuno o la tarde",
      "Aporte de shiitake y Ganoderma",
      "Fácil preparación instantánea"
    ],
    ingredients: [
      "Café instantáneo suave",
      "Extracto de shiitake",
      "Leche en polvo vegetal",
      "Extracto de Ganoderma Lucidum",
      "Vitaminas del grupo B"
    ],
    skinType: ["Todos", "Piel equilibrada", "Consumidores sensibles"],
    price: 45.00,
    size: "150g",
    usage: "Disolver en agua caliente y mezclar hasta obtener una bebida cremosa.",
    dermatologicalInfo: "Formulado sin conservantes artificiales ni colorantes.",
  },
  {
    id: "11",
    name: "DXN Shiitake Cream Coffee",
    description: "Café cremoso con shiitake que combina sabor y bienestar en una bebida nutritiva y reconfortante.",
    imageSrc: "/images/shiitakecreamcoffee.jpg",
    isFeatured: false,
    category: "Café",
    productUrl: "",
    whatsappUrl: "",
    benefits: [
      "Textura cremosa y suave",
      "Aporta protección antioxidante",
      "Sabor reconfortante",
      "Fácil de preparar",
      "Buena opción para el bienestar diario"
    ],
    ingredients: [
      "Café instantáneo",
      "Extracto de shiitake",
      "Leche en polvo vegetal",
      "Extracto de Ganoderma Lucidum",
      "Vitaminas naturales"
    ],
    skinType: ["Todos", "Amantes del latte", "Personas activas"],
    price: 50.00,
    size: "150g",
    usage: "Mezclar con agua caliente y revolver hasta disolver completamente.",
    dermatologicalInfo: "Sin saborizantes ni conservantes artificiales.",
  },
  {
    id: "12",
    name: "DXN Cocoshii",
    description: "Cacao nutritivo DXN con sabor intenso, perfecto para una bebida saludable y reconfortante.",
    imageSrc: "/images/Cocoshii.jpg",
    isFeatured: false,
    category: "Cacao",
    productUrl: "",
    whatsappUrl: "",
    benefits: [
      "Alto contenido de antioxidantes",
      "Sabor chocolate natural",
      "Aporta vitalidad y bienestar",
      "Ideal para bebidas o recetas saludables",
      "Sin azúcares añadidos"
    ],
    ingredients: [
      "Cacao en polvo orgánico",
      "Extracto de Ganoderma Lucidum",
      "Fibra natural",
      "Magnesio natural",
      "Extracto de maca"
    ],
    skinType: ["Todos", "Amantes del chocolate", "Personas activas"],
    price: 39.00,
    size: "200g",
    usage: "Preparar con leche vegetal o agua caliente y mezclar bien.",
    dermatologicalInfo: "Apto para dietas veganas y libre de gluten.",
  },
  {
    id: "13",
    name: "DXN Lemonshii",
    description: "Té de limón con Lion's Mane para una bebida refrescante que apoya el enfoque y el bienestar.",
    imageSrc: "/images/lemonshii.jpg",
    isFeatured: false,
    category: "Té",
    productUrl: "",
    whatsappUrl: "",
    benefits: [
      "Sabor cítrico refrescante",
      "Apoya la claridad mental",
      "Propiedades antioxidantes",
      "Hidratación deliciosa",
      "Ideal para cualquier momento del día"
    ],
    ingredients: [
      "Extracto de limón natural",
      "Extracto de Lion's Mane",
      "Extracto de Ganoderma Lucidum",
      "Té verde natural",
      "Vitaminas naturales"
    ],
    skinType: ["Todos", "Personas activas", "Consumidores de té"],
    price: 35.00,
    size: "150g",
    usage: "Disolver una cucharadita en agua caliente o fría y mezclar.",
    dermatologicalInfo: "Libre de edulcorantes artificiales.",
  },
  {
    id: "14",
    name: "DXN Lion's Mane Oocha",
    description: "Bebida Oocha con Lion's Mane para un balance natural entre bienestar y concentración.",
    imageSrc: "/images/LionsManeOocha.jpg",
    isFeatured: false,
    category: "Té",
    productUrl: "",
    whatsappUrl: "",
    benefits: [
      "Promueve la claridad mental",
      "Sabor suave y herbal",
      "Apoya la energía equilibrada",
      "Fácil de preparar",
      "Aporte funcional con Lion's Mane"
    ],
    ingredients: [
      "Extracto de Lion's Mane",
      "Extracto de Ganoderma Lucidum",
      "Té verde Oocha",
      "Vitaminas naturales",
      "Extracto de jengibre"
    ],
    skinType: ["Todos", "Amantes del té", "Buscadores de bienestar"],
    price: 42.00,
    size: "150g",
    usage: "Mezclar con agua caliente y disfrutar como un té reconfortante.",
    dermatologicalInfo: "Apto para consumo diario sin conservantes.",
  },
  {
    id: "15",
    name: "DXN Aloe Vita",
    description: "Bebida natural con aloe para hidratar el cuerpo y apoyar tu bienestar con un sabor suave y refrescante.",
    imageSrc: "/images/AloeVita.jpg",
    isFeatured: false,
    category: "Té",
    productUrl: "",
    whatsappUrl: "",
    benefits: [
      "Hidratación natural",
      "Sabor fresco y ligero",
      "Apoya la digestión saludable",
      "Aporta vitaminas y minerales",
      "Fácil de tomar en cualquier momento"
    ],
    ingredients: [
      "Extracto de aloe vera",
      "Extracto de Ganoderma Lucidum",
      "Té verde natural",
      "Vitaminas esenciales",
      "Fibra natural"
    ],
    skinType: ["Todos", "Piel sensible", "Personas activas"],
    price: 37.00,
    size: "150g",
    usage: "Disolver en agua fría o caliente y mezclar bien.",
    dermatologicalInfo: "Formulado sin conservantes artificiales.",
  },
];
