'use client';

import Image from 'next/image';
import { ShoppingCart, Plus } from 'lucide-react';

// Definimos qué datos necesita recibir la tarjeta
interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  isFeatured?: boolean; // Opcional, para mostrar el badge "Destacado"
  onAddToCart?: () => void; // Función para manejar el click
}

export default function ProductCard({
  name,
  description,
  price,
  imageSrc,
  isFeatured = false,
  onAddToCart
}: ProductProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-brand-brown/5 flex flex-col h-full">
      
      {/* 1. Contenedor de Imagen */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        {/* Badge de Destacado (Solo si isFeatured es true) */}
        {isFeatured && (
          <span className="absolute top-3 right-3 z-10 bg-brand-gold text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            Destacado
          </span>
        )}
        
        {/* Imagen del Producto con efecto Zoom al pasar el mouse */}
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* 2. Contenedor de Información */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-bold text-brand-brown mb-2 leading-tight">
          {name}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow font-sans">
          {description}
        </p>

        {/* 3. Footer de la tarjeta: Precio y Botón */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-sans">Precio</span>
            <span className="font-serif text-2xl font-medium text-brand-brown">
              ${price.toLocaleString('es-AR')}
            </span>
          </div>

          <button 
            onClick={onAddToCart}
            className="flex items-center gap-2 bg-brand-green hover:bg-[#689F38] text-white px-4 py-2.5 rounded-lg transition-colors duration-200 shadow-sm active:scale-95"
            aria-label={`Agregar ${name} al carrito`}
          >
            <ShoppingCart size={18} />
            <span className="font-bold text-sm">Comprar</span>
          </button>
        </div>
      </div>
    </div>
  );
}