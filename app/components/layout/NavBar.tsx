'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-brand-cream via-brand-cream to-white border-b-2 border-brand-gold/20 shadow-lg backdrop-blur-md bg-opacity-95 w-full">
      <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4 w-full">

        {/* BARRA SUPERIOR */}
        <div className="flex items-center justify-between gap-4 sm:gap-8 w-full min-w-0">

          {/* LOGO CON HOVER */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 z-50 group flex-shrink-0">
            <div className="relative w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-brand-gold/20 to-brand-brown/10 rounded-xl p-2 group-hover:from-brand-gold/30 group-hover:to-brand-brown/20 transition-all duration-300 border border-brand-gold/30">
              <Image
                src="/images/logo.png"
                alt="Logo Lo d Keren"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 150px, 200px" // Le dice que en móviles ocupa unos 150px y en PC 200px
              />
            </div>
            <span className="hidden sm:block font-serif text-base sm:text-lg font-bold text-brand-brown group-hover:text-brand-gold transition-colors">Lo d' Keren</span>
          </Link>

          {/* MENÚ DESKTOP */}
          <div className="hidden lg:flex items-center gap-8 font-sans text-brand-brown font-medium text-sm">
            <Link href="/" className="relative group">
              <span className="hover:text-brand-gold transition-colors">Inicio</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-gold to-brand-brown group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/nosotros" className="relative group">
              <span className="hover:text-brand-gold transition-colors">Nosotros</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-gold to-brand-brown group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/productos" className="relative group">
              <span className="hover:text-brand-gold transition-colors">Productos</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-gold to-brand-brown group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/negocio" className="relative group">
              <span className="hover:text-brand-gold transition-colors">Negocio</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-gold to-brand-brown group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          {/* CTA Botón Desktop */}
          <Link href="/productos" className="hidden md:flex">
            <button className="relative group bg-gradient-to-r from-brand-gold to-brand-brown text-white px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-bold text-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden">
              <span className="relative z-10">Ver Productos</span>
              <div className="absolute inset-0 bg-white/20 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
          </Link>

          {/* BOTÓN HAMBURGUESA (Móvil) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-brand-brown hover:text-brand-gold transition-colors z-50 focus:outline-none p-2 hover:bg-brand-cream/50 rounded-lg flex-shrink-0"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 w-screen bg-gradient-to-b from-brand-cream to-white border-b-2 border-brand-gold/20 shadow-2xl py-6 px-4 flex flex-col gap-1 animate-fade-in-up">

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-brand-brown hover:text-brand-gold hover:bg-brand-cream/50 font-medium py-3 px-4 rounded-lg transition-all border-l-4 border-transparent hover:border-brand-gold text-sm"
          >
            Inicio
          </Link>
          <Link
            href="/nosotros"
            onClick={() => setIsOpen(false)}
            className="block text-brand-brown hover:text-brand-gold hover:bg-brand-cream/50 font-medium py-3 px-4 rounded-lg transition-all border-l-4 border-transparent hover:border-brand-gold text-sm"
          >
            Nosotros
          </Link>
          <Link
            href="/productos"
            onClick={() => setIsOpen(false)}
            className="block text-brand-brown hover:text-brand-gold hover:bg-brand-cream/50 font-medium py-3 px-4 rounded-lg transition-all border-l-4 border-transparent hover:border-brand-gold text-sm"
          >
            Productos
          </Link>
          <Link
            href="/negocio"
            onClick={() => setIsOpen(false)}
            className="block text-brand-brown hover:text-brand-gold hover:bg-brand-cream/50 font-medium py-3 px-4 rounded-lg transition-all border-l-4 border-transparent hover:border-brand-gold text-sm"
          >
            Negocio
          </Link>

          {/* Botón Catálogo en Móvil */}
          <div className="pt-4 border-t border-brand-gold/20">
            <Link href="/productos" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-gradient-to-r from-brand-gold to-brand-brown text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                Ver Productos
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}