'use client';

import { useMemo, useState } from 'react';
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
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach(p => set.add(p.category || 'Otros'));
    return ['Todos', ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const priority = (category?: string) => {
      if (category === 'Café') return 0;
      if (category === 'Té') return 1;
      if (category === 'Cacao') return 2;
      if (category === 'Cosmética') return 3;
      return 4;
    };

    const sortProducts = (a: typeof products[number], b: typeof products[number]) => {
      const priorityDiff = priority(a.category) - priority(b.category);
      if (priorityDiff !== 0) return priorityDiff;
      return a.name.localeCompare(b.name, 'es', { sensitivity: 'base' });
    };

    const selected = selectedCategory === 'Todos'
      ? products
      : products.filter(p => p.category === selectedCategory);

    return [...selected].sort(sortProducts);
  }, [selectedCategory]);

  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar />
      
      <Hero />

      <About />

      <Features />

      <Business />

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
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-brand-brown mb-3 sm:mb-4 leading-tight">
              Productos DXN — Salud, Suplementos y Cosmética
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Explora nuestras categorías: café, cacao, Ganoderma, suplementos y cosmética. Filtra por categoría para ver lo que buscas.
            </p>
          </div>

          {/* Filtros por categoría */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map(cat => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-3 py-2 rounded-full text-sm font-semibold ${selectedCategory===cat? 'bg-brand-brown text-white': 'bg-gray-100 text-gray-700'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid de productos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {filtered.map((product) => (
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

      {/* <Business /> */}

      <Testimonials />

      <Footer />
    </main>
  );
}