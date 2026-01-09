'use client'; // <--- IMPORTANTE: Ahora necesitamos estado para abrir/cerrar

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // Importamos los íconos

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-cream border-b border-brand-brown/5 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        
        {/* BARRA SUPERIOR (Logo + Botón Desktop + Toggle Móvil) */}
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 z-50">
             <Image 
               src="/images/logo.png" 
               alt="Lo d' Keren" 
               width={50} 
               height={50} 
               className="object-contain"
             />
          </Link>

          {/* MENÚ DESKTOP (Oculto en móvil 'hidden', visible en 'md:flex') */}
          <div className="hidden md:flex items-center gap-8 font-sans text-brand-brown font-medium">
            <Link href="#inicio" className="hover:text-brand-gold transition-colors">Inicio</Link>
            <Link href="#nosotros" className="hover:text-brand-gold transition-colors">Sobre Nosotros</Link>
            <Link href="#productos" className="hover:text-brand-gold transition-colors">Productos</Link>
            <Link href="#negocio" className="hover:text-brand-gold transition-colors">Negocio</Link>
            <Link href="#negocio" className="hover:text-brand-gold transition-colors">Contacto</Link>
            
            {/* Botón Desktop */}
            <button className="bg-brand-gold text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#C59D35] transition-colors shadow-md text-sm"
            >
              <Link href="#productos">Ver Catálogo</Link>
            </button>
          </div>

          {/* BOTÓN HAMBURGUESA (Visible solo en móvil 'md:hidden') */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-brand-brown hover:text-brand-gold transition-colors z-50 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE (Overlay) */}
      {/* Si isOpen es true, mostramos el menú */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-cream border-b border-brand-brown/10 shadow-xl py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200">
          
          <Link 
            href="#inicio" 
            onClick={() => setIsOpen(false)} 
            className="block text-brand-brown hover:text-brand-gold font-medium py-2 border-b border-brand-brown/5"
          >
            Inicio
          </Link>
          <Link 
            href="#nosotros" 
            onClick={() => setIsOpen(false)} 
            className="block text-brand-brown hover:text-brand-gold font-medium py-2 border-b border-brand-brown/5"
          >
            Sobre Nosotros
          </Link>
          <Link 
            href="#productos" 
            onClick={() => setIsOpen(false)} 
            className="block text-brand-brown hover:text-brand-gold font-medium py-2 border-b border-brand-brown/5"
          >
            Productos
          </Link>
          <Link 
            href="#negocio" 
            onClick={() => setIsOpen(false)} 
            className="block text-brand-brown hover:text-brand-gold font-medium py-2 border-b border-brand-brown/5"
          >
            Negocio
          </Link>
          <Link 
            href="#negocio" 
            onClick={() => setIsOpen(false)} 
            className="block text-brand-brown hover:text-brand-gold font-medium py-2 border-b border-brand-brown/5"
          >
            Contacto
          </Link>

          {/* Botón Catálogo en Móvil */}
          <button className="w-full bg-brand-gold text-white py-3 rounded-lg font-bold mt-2 shadow-sm">
            Ver Catálogo
          </button>
        </div>
      )}
    </nav>
  );
}