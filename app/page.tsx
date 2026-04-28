'use client';

import Navbar from "./components/layout/NavBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import Business from "./components/sections/Business";
import ProductCard from "./components/cards/ProductCard";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/layout/Footer";

export default function Home() {
  
  // Datos de productos con enlaces a Empretienda
  const products = [
    {
      id: "1",
      name: "DXN Total Moisturizing Cream",
      description: "Crema hidratante total que penetra profundamente en todas las capas de la piel, proporcionando hidratación integral y duración prolongada.",
      imageSrc: "/images/SC120.jpg",
      productUrl: "https://dxnlodkeren.empretienda.com.ar/cuidado-de-la-piel/dxn-total-moisturizing-cream",
      isFeatured: true
    },
    {
      id: "2",
      name: "DXN Smoothness and Nourishment Cream",
      description: "Fórmula especial que suaviza la textura cutánea mientras nutre profundamente con ingredientes naturales certificados.",
      imageSrc: "/images/SC121.jpg",
      productUrl: "https://dxnlodkeren.empretienda.com.ar/cuidado-de-la-piel/dxn-smoothness-and-nourishment-cream",
      isFeatured: true
    },
    {
      id: "3",
      name: "DXN Maximum Hydration Cream",
      description: "Máxima hidratación para pieles secas y deshidratadas. Restaura la elasticidad natural y deja la piel radiante y suave.",
      imageSrc: "/images/SC119.jpg",
      productUrl: "https://dxnlodkeren.empretienda.com.ar/cuidado-de-la-piel/dxn-maximum-hydration-cream",
      isFeatured: true
    },
    {
      id: "4",
      name: "DXN Deep Moisturizing Cream",
      description: "Crema de hidratación profunda con Ganoderma Lucidum. Ideal para regeneración nocturna y reparación cutánea intensiva.",
      imageSrc: "/images/SC118.jpg",
      productUrl: "https://dxnlodkeren.empretienda.com.ar/cuidado-de-la-piel/dxn-deep-moisturizing-cream",
      isFeatured: true
    },
    {
      id: "5",
      name: "DXN Ultra Nutritive Cream",
      description: "Tratamiento nutricional ultra concentrado. Rico en antioxidantes para revitalizar y rejuvenecer tu piel desde adentro.",
      imageSrc: "/images/SC117.jpg",
      productUrl: "https://dxnlodkeren.empretienda.com.ar/cuidado-de-la-piel/dxn-ultra-nutritive-cream",
      isFeatured: false
    },
    // {
    //   id: "6",
    //   name: "Jabón Ganozhi",
    //   description: "Jabón premium elaborado con Ganoderma para limpieza delicada. Mantiene la piel hidratada y protegida sin resecación.",
    //   imageSrc: "/images/SC120.jpg",
    //   productUrl: "https://dxnlodkeren.empretienda.com.ar/cuidado-personal/jabon-ganozhi",
    //   isFeatured: false
    // }
  ];

  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar />
      
      <Hero />

      <About />

      <Features />

      {/* SECCIÓN PRODUCTOS (CATÁLOGO) */}
      <section id="productos" className="py-20 sm:py-32 bg-gradient-to-b from-brand-cream/20 to-white pattern-geometric">
        <div className="container mx-auto px-4">
          
          {/* Encabezado */}
          <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="bg-brand-gold/10 text-brand-brown px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest border border-brand-gold/30">
                Catálogo de Productos
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-brown mb-4 sm:mb-6 leading-tight">
              Cremas Dermatológicas Premium
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Nuestra selección cuidadosamente curada de productos DXN para el cuidado profesional de tu piel.
            </p>
          </div>

          {/* Grid de productos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {products.map((product) => (
              <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${parseInt(product.id) * 0.1}s` }}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  imageSrc={product.imageSrc}
                  productUrl={product.productUrl}
                  isFeatured={product.isFeatured}
                />
              </div>
            ))}
          </div>

          {/* Nota importante */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-brand-gold/5 to-brand-brown/5 rounded-2xl border border-brand-gold/20 text-center">
            <p className="text-gray-700 font-sans leading-relaxed text-sm sm:text-base">
              Haz clic en cualquier producto para ver más detalles, reseñas y disponibilidad en <strong>Empretienda</strong>.
              {/* <span className="block mt-4 text-sm text-brand-brown font-bold">
                💰 Precios especiales disponibles. Consulta en cada producto.
              </span> */}
            </p>
          </div>
        </div>
      </section>

      <Business />

      <Testimonials />

      <Footer />
    </main>
  );
}