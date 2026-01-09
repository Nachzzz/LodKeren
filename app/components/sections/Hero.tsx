import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      
      {/* 1. IMAGEN DE FONDO */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-hands.jpg" // Asegúrate de que esta imagen exista en public/images
          alt="Manos con café"
          fill
          className="object-cover"
          priority
        />
        
        {/* 2. OVERLAY (El filtro marrón) */}
        {/* bg-brand-brown/70 significa color marrón al 70% de opacidad */}
        {/* mix-blend-multiply ayuda a que se integre mejor con la foto */}
        <div className="absolute inset-0 bg-brand-brown/70 mix-blend-multiply" />
        
        {/* Un degradado extra abajo para suavizar la unión con la siguiente sección */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-brown/50 to-transparent" />
      </div>

      {/* 3. CONTENIDO (Texto Blanco) */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight drop-shadow-lg">
          Salud y Libertad con <br /> aroma a Café
        </h1>
        
        <p className="text-gray-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-sans font-light drop-shadow-md">
          Descubre el poder del Ganoderma y transforma tu bienestar. Productos naturales que nutren tu cuerpo y tu espíritu.
        </p>
        
        {/* BOTONES */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Botón Dorado Sólido */}
          <button className="bg-brand-gold text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#C59D35] transition-all transform hover:-translate-y-1 shadow-lg">
            Ver Catálogo
          </button>
          
          {/* Botón Transparente con Borde Blanco */}
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
            Conocer Más
          </button>
        </div>
      </div>
    </section>
  );
}