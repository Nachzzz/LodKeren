import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-brown to-[#4D2E29] text-white pt-16 sm:pt-24 pb-8 sm:pb-12 border-t-2 border-brand-gold/30 relative overflow-hidden">
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 pattern-geometric opacity-10" />

      <div className="container mx-auto px-4 relative z-10">

        {/* --- PARTE SUPERIOR (4 COLUMNAS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">

          {/* Columna 1: Marca y Logo */}
          <div className="space-y-6">
            <div className="bg-white/10 p-3 rounded-xl inline-block w-24 sm:w-28 h-24 sm:h-28 relative border-2 border-brand-gold/30 hover:border-brand-gold/60 transition-colors">
              <Image
                src="/images/logo.png"
                alt="Logo Lo d Keren"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 150px, 200px" // Le dice que en móviles ocupa unos 150px y en PC 200px
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-gold">Lo d' Keren</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans max-w-xs">
                Cremas dermatológicas premium con la esencia de la tradición árabe y la ciencia moderna.
              </p>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="font-serif text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white border-b-2 border-brand-gold/30 pb-2 sm:pb-3">Enlaces Rápidos</h3>
            <ul className="space-y-3 sm:space-y-4 font-sans text-gray-300 text-xs sm:text-sm">
              <li><Link href="#inicio" className="hover:text-brand-gold transition-colors flex items-center gap-2"><span>→</span> Inicio</Link></li>
              <li><Link href="#nosotros" className="hover:text-brand-gold transition-colors flex items-center gap-2"><span>→</span> Sobre Nosotros</Link></li>
              <li><Link href="#productos" className="hover:text-brand-gold transition-colors flex items-center gap-2"><span>→</span> Productos</Link></li>
              <li><Link href="#negocio" className="hover:text-brand-gold transition-colors flex items-center gap-2"><span>→</span> Negocio</Link></li>
            </ul>
          </div>

          {/* Columna 3: Productos Destacados */}
          {/* <div>
            <h3 className="font-serif text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white border-b-2 border-brand-gold/30 pb-2 sm:pb-3">Cremas Premium</h3>
            <ul className="space-y-2 sm:space-y-3 font-sans text-gray-300 text-xs sm:text-sm">
              <li><a href="https://dxnlodkeren.empretienda.com.ar/cuidado-de-la-piel/dxn-total-moisturizing-cream" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors flex items-center gap-2"><span>✨</span> Total Moisturizing</a></li>
              <li><a href="https://dxnlodkeren.empretienda.com.ar/cuidado-de-la-piel/dxn-smoothness-and-nourishment-cream" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors flex items-center gap-2"><span>✨</span> Smoothness & Nourish</a></li>
              <li><a href="https://dxnlodkeren.empretienda.com.ar/cuidado-de-la-piel/dxn-maximum-hydration-cream" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors flex items-center gap-2"><span>✨</span> Maximum Hydration</a></li>
              <li><a href="https://dxnlodkeren.empretienda.com.ar/cuidado-personal/jabon-ganozhi" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors flex items-center gap-2"><span>✨</span> Jabón Ganozhi</a></li>
            </ul>
          </div> */}

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="font-serif text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white border-b-2 border-brand-gold/30 pb-2 sm:pb-3">Contacto</h3>
            <ul className="space-y-3 sm:space-y-5 font-sans text-gray-300 text-xs sm:text-sm mb-6 sm:mb-8">
              <li className="flex items-start gap-2 sm:gap-3 hover:text-brand-gold transition-colors">
                <Phone size={16} className="sm:w-5 sm:h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <a href="tel:+5493873698636" className="hover:underline break-all">+549 3873 698636</a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 hover:text-brand-gold transition-colors">
                <Mail size={16} className="sm:w-5 sm:h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <a href="mailto:contacto@lodkeren.com" className="hover:underline break-all">contacto@lodkeren.com</a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 hover:text-brand-gold transition-colors">
                <MapPin size={16} className="sm:w-5 sm:h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Tartagal, Salta, Argentina</span>
              </li>
            </ul>

            {/* Redes Sociales */}
            <div className="flex gap-2 sm:gap-3">
              <a href="https://www.facebook.com/profile.php?id=61583828153933" target="_blank" rel="noopener noreferrer" className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-gradient-to-br from-brand-gold to-brand-brown flex items-center justify-center hover:from-brand-brown hover:to-brand-gold hover:shadow-lg transition-all text-white hover:-translate-y-1">
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.instagram.com/lodkerendxn/" target="_blank" rel="noopener noreferrer" className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-gradient-to-br from-brand-gold to-brand-brown flex items-center justify-center hover:from-brand-brown hover:to-brand-gold hover:shadow-lg transition-all text-white hover:-translate-y-1">
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* --- DIVISOR --- */}
        <div className="border-t border-brand-gold/20 my-12" />

        {/* --- PARTE INFERIOR (Copyright y Links Legales) --- */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left font-sans text-gray-400 text-sm">
          <p>© 2026 <span className="text-brand-gold font-bold">Lo d' Keren</span>. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-brand-gold transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}