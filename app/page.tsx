'use client';

import Navbar from "./components/layout/NavBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import Business from "./components/sections/Business";
import ProductCard from "./components/cards/ProductCard";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/layout/Footer";
import { products } from "./data/products";

export default function Home() {

  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar />
      
      <Hero />

      <About />

      <Features />

      {/* SECCIÓN PRODUCTOS (CATÁLOGO) */}
      <section id="productos" className="py-20 sm:py-32 bg-gradient-to-b from-brand-cream/20 to-white">
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
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* Nota importante */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-brand-gold/5 to-brand-brown/5 rounded-2xl border border-brand-gold/20 text-center">
            <p className="text-gray-700 font-sans leading-relaxed text-sm sm:text-base">
              Haz clic en cualquier producto para ver más detalles, beneficios e ingredientes. 
              <span className="block mt-4 text-sm text-brand-brown font-bold">
                💳 Precios especiales disponibles. Consulta con nuestro equipo por WhatsApp.
              </span>
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