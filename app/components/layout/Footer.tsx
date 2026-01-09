import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        
        {/* --- PARTE SUPERIOR (4 COLUMNAS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Marca y Logo */}
          <div className="space-y-6">
            <div className="bg-white p-2 rounded-lg inline-block w-24 h-24 relative">
                 {/* Asegúrate de tener el logo.png en public/images/ */}
                <Image 
                  src="/images/logo.png" 
                  alt="Lo d' Keren" 
                  fill
                  className="object-contain p-1"
                />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-sans max-w-xs">
              Salud y libertad con aroma a café. Transformando vidas a través del poder del Ganoderma.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-4 font-sans text-gray-300 text-sm">
              <li><Link href="#inicio" className="hover:text-brand-gold transition-colors">Inicio</Link></li>
              <li><Link href="#nosotros" className="hover:text-brand-gold transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="#productos" className="hover:text-brand-gold transition-colors">Productos</Link></li>
              <li><Link href="#negocio" className="hover:text-brand-gold transition-colors">Negocio</Link></li>
              <li><Link href="#blog" className="hover:text-brand-gold transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Columna 3: Productos Destacados */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-white">Productos Destacados</h3>
            <ul className="space-y-4 font-sans text-gray-300 text-sm">
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Café Lingzhi</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Spirulina</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Cocozhi</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Té Verde</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Morinzhi</Link></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-white">Contacto</h3>
            <ul className="space-y-4 font-sans text-gray-300 text-sm mb-8">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold" />
                <span>+5493873698636</span> {/* Ajusta con el nro real */}
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-gold" />
                <span>contacto@lodkeren.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-brand-gold" />
                <span>Tartagal, Salta</span>
              </li>
            </ul>

            {/* Redes Sociales */}
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61583828153933&sk=about" className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center hover:bg-white hover:text-brand-brown transition-all text-white">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/lodkerendxn/?utm_source=ig_web_button_share_sheet" className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center hover:bg-white hover:text-brand-brown transition-all text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* --- BARRA INFERIOR (LEGALES) --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-sans">
          <p>© 2026 Lo d' Keren. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}