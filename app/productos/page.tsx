'use client';

import { useMemo, useState } from 'react';
import SiteLayout from '../components/layout/SiteLayout';
import ProductCard from '../components/cards/ProductCard';
import { products } from '../data/products';

export default function ProductosPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((product) => set.add(product.category || 'Otros'));
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

    const sortProducts = (a: (typeof products)[number], b: (typeof products)[number]) => {
      const priorityDiff = priority(a.category) - priority(b.category);
      if (priorityDiff !== 0) return priorityDiff;
      return a.name.localeCompare(b.name, 'es', { sensitivity: 'base' });
    };

    const selected = selectedCategory === 'Todos'
      ? products
      : products.filter((product) => product.category === selectedCategory);

    return [...selected].sort(sortProducts);
  }, [selectedCategory]);

  return (
    <SiteLayout>
      <main className="min-h-screen bg-white">
        <section className="py-20 sm:py-32 bg-gradient-to-b from-brand-cream/20 to-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
              <span className="inline-block rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-brown">
                Catálogo de productos
              </span>
              <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-brand-brown leading-tight">
                Salud, suplementos y cosmética en una sola experiencia
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Elegí una categoría y descubrí los productos DXN que mejor se adaptan a tu estilo de vida.
              </p>
            </div>

            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${selectedCategory === category ? 'bg-brand-brown text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-brand-cream'}`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
