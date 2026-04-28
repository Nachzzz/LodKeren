import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[600px] md:h-[750px] flex items-center justify-center overflow-hidden">
      
      {/* 1. IMAGEN DE FONDO CON PARALLAX */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Cremas1.png"
          alt="Cremas dermatológicas"
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* OVERLAY GRADIENTE ÁRABE - Colores cálidos */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/75 via-brand-brown/60 to-transparent" />
        
        {/* Patrón decorativo sutil */}
        <div className="absolute inset-0 pattern-geometric opacity-30" />
        
        {/* Degradado suave en la base */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-brand-cream/50 to-transparent" />
      </div>

      {/* 2. CONTENIDO PRINCIPAL CON ANIMACIONES */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto mt-6 sm:mt-10 animate-fade-in-up">
        
        {/* Etiqueta decorativa */}
        <div className="mb-6 sm:mb-8 inline-block">
          <span className="bg-brand-gold/20 text-brand-brown px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest border border-brand-gold/40">
            ✨ Belleza Natural & Cuidado Dermatológico
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl text-white mb-6 sm:mb-8 leading-tight drop-shadow-xl">
          Cremas Premium para <br /> tu Piel Perfecta
        </h1>
        
        <p className="text-gray-50 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto font-sans font-light drop-shadow-lg leading-relaxed">
          Descubre la fusión perfecta entre la tradición árabe y la ciencia moderna. Nuestras cremas dermatológicas DXN transforman tu piel con ingredientes 100% naturales y certificados.
        </p>
        
        {/* BOTONES CON EFECTO HOVER */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-in-right">
          {/* Botón Principal */}
          <Link href="#productos">
            <button className="relative group bg-gradient-to-r from-brand-gold to-brand-brown text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Ver Productos Disponibles
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </span>
              {/* Efecto brillante al pasar */}
              <div className="absolute inset-0 bg-white/10 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
          </Link>
          
          {/* Botón Secundario */}
          <Link href="#nosotros">
            <button className="border-2 border-white text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              Conocer la Marca
            </button>
          </Link>
        </div>

        {/* Indicador de scroll sutil */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}