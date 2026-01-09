import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    // bg-brand-cream: Fondo color crema
    // sticky top-0: Se queda pegado arriba al bajar
    <nav className="sticky top-0 z-50 bg-brand-cream border-b border-brand-brown/5 py-4 shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
           {/* Asegúrate de tener tu logo en public/images/logo.png */}
           <Image 
             src="/images/logo.png" 
             alt="Lo d' Keren" 
             width={50} 
             height={50} 
             className="object-contain"
           />
        </Link>

        {/* MENÚ CENTRAL (Texto Marrón) */}
        <div className="hidden md:flex items-center gap-8 font-sans text-brand-brown font-medium">
          <Link href="#inicio" className="hover:text-brand-gold transition-colors">Inicio</Link>
          <Link href="#nosotros" className="hover:text-brand-gold transition-colors">Sobre Nosotros</Link>
          <Link href="#productos" className="hover:text-brand-gold transition-colors">Productos</Link>
          <Link href="#negocio" className="hover:text-brand-gold transition-colors">Negocio</Link>
          <Link href="#contacto" className="hover:text-brand-gold transition-colors">Contacto</Link>
        </div>

        {/* BOTÓN DORADO (A la derecha) */}
        <button className="bg-brand-gold text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#C59D35] transition-colors shadow-md text-sm">
          Ver Catálogo
        </button>
      </div>
    </nav>
  );
}