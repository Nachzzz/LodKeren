'use client';

import Image from 'next/image';
import { ChevronDown, X, Check } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '@/app/data/products';

export default function ProductCard(product: Product) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { name, description, imageSrc, isFeatured = false, category, benefits, ingredients, skinType, price, size, usage, dermatologicalInfo, whatsappUrl } = product;

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  return (
    <div 
      className={`
        group relative bg-white rounded-2xl transition-all duration-300 ease-out transform-gpu
        overflow-hidden border border-brand-brown/10 flex flex-col
        ${isExpanded ? 'shadow-2xl ring-1 ring-brand-gold/30 z-20' : 'shadow-lg hover:shadow-xl cursor-pointer card-hover h-full'}
      `}
      onClick={() => !isExpanded && setIsExpanded(true)}
    >
      
      {/* 1. Contenedor de Imagen (Ajustado para que respire mejor al expandirse) */}
      <div className={`relative w-full overflow-hidden bg-gradient-to-br from-brand-cream to-brand-cream/80 transition-all duration-300 ease-out transform-gpu ${isExpanded ? 'h-56 sm:h-72' : 'aspect-square'}`}>
        {isFeatured && (
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
            <span className="bg-gradient-to-r from-brand-gold to-brand-brown text-white text-xs font-bold px-2 sm:px-4 py-1 sm:py-2 rounded-full uppercase tracking-widest shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              Destacado
            </span>
          </div>
        )}
        
        {/* EL CAMBIO ESTÁ AQUÍ: object-contain y p-6 para padding interno */}
        <Image
          src={imageSrc}
          alt={name}
          fill
          className={`object-contain object-center p-4 sm:p-6 transition-transform duration-500 ease-out ${isExpanded ? 'scale-100' : 'group-hover:scale-105'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {!isExpanded && <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />}
      </div>

      {/* 2. Información Principal (Siempre visible) */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow bg-white z-10 transform-gpu">
        <div className="flex justify-between items-start mb-2 sm:mb-3 gap-3">
          <div className="min-w-0">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-brown leading-tight group-hover:text-brand-gold transition-colors duration-300 pr-2">
              {name}
            </h3>
            {category && (
              <p className="mt-2 text-[10px] sm:text-xs text-brand-brown/80 font-semibold bg-brand-cream/80 px-2 py-1 rounded-full inline-block uppercase tracking-[0.18em]">
                {category}
              </p>
            )}
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-[10px] sm:text-xs text-gray-600 font-semibold bg-brand-cream px-2 py-0.5 rounded-full inline-block mt-1">{size}</p>
          </div>
        </div>
        
        <p className={`text-gray-600 text-xs sm:text-sm font-sans leading-relaxed transition-all duration-300 ease-out ${isExpanded ? 'mb-4' : 'line-clamp-3 mb-2 flex-grow'}`}>
          {description}
        </p>

        {/* 3. SECCIÓN EXPANDIBLE (Optimizada para móviles) */}
        <div 
          className={`grid transition-all duration-300 ease-out transform-gpu ${
            isExpanded ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'
          }`}
        >
          <div className="overflow-hidden flex flex-col gap-4 sm:gap-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 pt-4 border-t border-brand-gold/20">
              {/* Beneficios */}
              <div>
                <h3 className="font-serif text-sm font-bold text-brand-brown mb-2 flex items-center gap-2">
                  <span>✨</span> Beneficios
                </h3>
                <div className="space-y-1.5">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-2 items-start text-xs">
                      <Check size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ingredientes y Piel */}
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-serif text-sm font-bold text-brand-brown mb-2 flex items-center gap-2">
                    <span>🌿</span> Ingredientes
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {ingredients.map((ingredient, idx) => (
                      <span key={idx} className="bg-brand-gold/10 text-brand-brown text-[10px] px-2 py-1 rounded-full border border-brand-gold/20 font-medium">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-brand-brown mb-2 flex items-center gap-2">
                    <span>👤</span> Ideal Para
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skinType.map((type, idx) => (
                      <span key={idx} className="bg-indigo-50 text-indigo-800 text-[10px] px-2 py-1 rounded-full border border-indigo-200 font-medium">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modos de uso y Certificaciones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <h3 className="font-serif font-bold text-brand-brown text-xs mb-1 flex items-center gap-1.5">
                  <span>💧</span> Modo de Uso
                </h3>
                <p className="text-gray-700 text-xs leading-relaxed">{usage}</p>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                <h3 className="font-serif font-bold text-brand-brown text-xs mb-1 flex items-center gap-1.5">
                  <span>✅</span> Dermatológico
                </h3>
                <p className="text-gray-700 text-xs leading-relaxed">{dermatologicalInfo}</p>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  if (whatsappUrl) {
                    window.open(whatsappUrl, '_blank');
                  }
                }} 
                className="flex-1 bg-gradient-to-r from-brand-gold to-brand-brown text-white font-bold py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 text-sm active:scale-95 transform-gpu"
              >
                📞 Consultar
              </button>
              <button 
                onClick={handleClose}
                className="sm:w-1/3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2.5 rounded-lg transition-all duration-300 text-sm flex items-center justify-center gap-2 active:scale-95 transform-gpu"
              >
                <X size={16} /> Cerrar
              </button>
            </div>

          </div>
        </div>

        {/* 4. Indicador de expandir (Solo visible cuando está contraído) */}
        {!isExpanded && (
          <div className="flex items-center justify-center pt-3 sm:pt-4 border-t border-brand-gold/20 mt-auto">
            <span className="text-xs text-brand-brown font-bold uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
              Ver Detalles <ChevronDown size={14} className="transform group-hover:translate-y-0.5 transition-transform duration-300" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}