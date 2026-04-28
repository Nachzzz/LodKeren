'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Definimos qué datos necesita recibir la tarjeta
interface ProductProps {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  productUrl?: string; // URL externa a Empretienda
  isFeatured?: boolean;
}

export default function ProductCard({
  name,
  description,
  imageSrc,
  productUrl,
  isFeatured = false
}: ProductProps) {
  const CardContent = (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-brand-brown/10 flex flex-col h-full card-hover">
      
      {/* 1. Contenedor de Imagen con Overlay */}
      <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-brand-cream to-brand-cream/80">
        {/* Badge de Destacado */}
        {isFeatured && (
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
            <span className="bg-gradient-to-r from-brand-gold to-brand-brown text-white text-xs font-bold px-2 sm:px-4 py-1 sm:py-2 rounded-full uppercase tracking-widest shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
              Destacado
            </span>
          </div>
        )}
        
        {/* Imagen del Producto */}
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay oscuro al pasar el mouse */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* 2. Contenedor de Información */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-brown mb-2 sm:mb-3 leading-tight group-hover:text-brand-gold transition-colors">
          {name}
        </h3>
        
        <p className="text-gray-600 text-xs sm:text-sm line-clamp-4 mb-4 sm:mb-6 flex-grow font-sans leading-relaxed">
          {description}
        </p>

        {/* 3. Footer: Botón Ver Detalles */}
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-brand-gold/20">
          <span className="text-xs text-brand-brown font-bold uppercase tracking-wider opacity-70">
            Conocer más
          </span>
          <div className="w-10 h-10 bg-gradient-to-r from-brand-gold to-brand-brown rounded-lg flex items-center justify-center group-hover:from-brand-brown group-hover:to-brand-gold transition-all duration-300 shadow-md">
            <ArrowRight size={18} className="text-white transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );

  // Si hay URL, devolvemos como Link, sino como div normal
  if (productUrl) {
    return (
      <Link href={productUrl} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}