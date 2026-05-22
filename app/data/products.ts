// Datos enriquecidos de productos con información detallada
export interface Product {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  isFeatured?: boolean;
  
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
    usage: "Aplicar 2-3 veces al día sobre la piel limpia y secas. Para mejores resultados, usar después del tónico.",
    dermatologicalInfo: "Dermatológicamente probada. Hipoalergénica. Certificado cruelty-free.",
  },
  {
    id: "3",
    name: "DXN Maximum Hydration Cream",
    description: "Máxima hidratación para pieles secas y deshidratadas. Restaura la elasticidad natural y deja la piel radiante y suave.",
    imageSrc: "/images/SC119.jpg",
    isFeatured: true,
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
];
