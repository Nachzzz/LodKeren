'use client';

import Image from 'next/image';
import { ChevronUp, X, Check } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '@/app/data/products';

export default function ProductCard(product: Product) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { name, description, imageSrc, isFeatured = false, benefits, ingredients, skinType, price, size, usage, dermatologicalInfo } = product;

  if (isExpanded) {
    return (
      <div 
        className="col-span-full bg-white rounded-2xl shadow-xl border border-brand-brown/10 overflow-hidden animate-expand"
        style={{ animation: 'expand 0.4s ease-out' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8">
          
          {/* Columna 1: Imagen */}
          <div className="sm:col-span-1 flex flex-col items-center justify-start">
            <div className="relative w-full max-w-xs h-64 bg-gradient-to-br from-brand-cream to-brand-cream/50 rounded-xl flex items-center justify-center p-4 mb-4">
              <Image
                src={imageSrc}
                alt={name}
                width={250}
                height={250}
                className="object-contain max-h-full"
              />
              {isFeatured && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-brand-gold to-brand-brown text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  ⭐ Destacado
                </div>
              )}
            </div>
            
            {/* Precio y tamaño */}
            <div className="w-full text-center">
              <p className="text-4xl font-bold text-brand-gold mb-2">${price.toFixed(2)}</p>
              <p className="text-sm text-gray-600 font-semibold bg-brand-cream px-3 py-1 rounded-full inline-block">{size}</p>
            </div>

            {/* Botón cerrar */}
            <button
              onClick={() => setIsExpanded(false)}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-all"
            >
              <X size={20} />
              Cerrar
            </button>
          </div>

          {/* Columna 2 y 3: Información */}
          <div className="sm:col-span-2 space-y-5">
            
            {/* Título y descripción */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-brown mb-3">{name}</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                {description}
              </p>
            </div>

            {/* Beneficios */}
            <div>
              <h3 className="font-serif text-xl font-bold text-brand-brown mb-3 flex items-center gap-2">
                <span>✨</span> Beneficios Principales
              </h3>
              <div className="space-y-2">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-3 items-start text-sm">
                    <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ingredientes */}
            <div>
              <h3 className="font-serif text-xl font-bold text-brand-brown mb-3 flex items-center gap-2">
                <span>🌿</span> Ingredientes Clave
              </h3>
              <div className="flex flex-wrap gap-2">
                {ingredients.map((ingredient, idx) => (
                  <span
                    key={idx}
                    className="bg-brand-gold/20 text-brand-brown text-sm px-3 py-2 rounded-full border border-brand-gold/30 font-medium"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Tipos de piel */}
            <div>
              <h3 className="font-serif text-xl font-bold text-brand-brown mb-3 flex items-center gap-2">
                <span>👤</span> Recomendado Para
              </h3>
              <div className="flex flex-wrap gap-2">
                {skinType.map((type, idx) => (
                  <span key={idx} className="bg-indigo-100 text-indigo-800 text-sm px-3 py-2 rounded-full border border-indigo-300 font-medium">
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Modo de uso */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4">
              <h3 className="font-serif font-bold text-brand-brown text-base mb-2 flex items-center gap-2">
                <span>💧</span> Modo de Uso
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{usage}</p>
            </div>

            {/* Certificaciones */}
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-4">
              <h3 className="font-serif font-bold text-brand-brown text-base mb-2 flex items-center gap-2">
                <span>✅</span> Certificaciones Dermatológicas
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{dermatologicalInfo}</p>
            </div>

            {/* Botón de acción */}
            <button className="w-full bg-gradient-to-r from-brand-gold to-brand-brown text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all text-base">
              📞 Consultar Disponibilidad
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Vista normal (colapsada)
  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-brand-brown/10 flex flex-col h-full card-hover cursor-pointer" 
      onClick={() => setIsExpanded(true)}
    >
      
      {/* Contenedor de Imagen */}
      <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-brand-cream to-brand-cream/80">
        {isFeatured && (
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
            <span className="bg-gradient-to-r from-brand-gold to-brand-brown text-white text-xs font-bold px-2 sm:px-4 py-1 sm:py-2 rounded-full uppercase tracking-widest shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
              Destacado
            </span>
          </div>
        )}
        
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Información */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-brown mb-2 sm:mb-3 leading-tight group-hover:text-brand-gold transition-colors">
          {name}
        </h3>
        
        <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-4 sm:mb-6 flex-grow font-sans leading-relaxed">
          {description}
        </p>

        {/* Botón Ver Detalles */}
        <div className="flex items-center justify-center pt-3 sm:pt-4 border-t border-brand-gold/20">
          <span className="text-xs text-brand-brown font-bold uppercase tracking-wider opacity-70">
            Ver Detalles
          </span>
          {/* <div className="w-10 h-10 bg-gradient-to-r from-brand-gold to-brand-brown rounded-lg flex items-center justify-center group-hover:from-brand-brown group-hover:to-brand-gold transition-all duration-300 shadow-md">
            <ChevronUp size={18} className="text-white transform group-hover:-translate-y-1 transition-transform" />
          </div> */}
        </div>
      </div>
    </div>
  );
}