"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const leads = JSON.parse(localStorage.getItem("lodkeren_leads") || "[]");
      leads.push({ name, email, source: "hero", createdAt: new Date().toISOString() });
      localStorage.setItem("lodkeren_leads", JSON.stringify(leads));
      setSubmitted(true);
      setName("");
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="inicio" className="relative h-[600px] md:h-[750px] flex items-center justify-center overflow-hidden">
      
      {/* 1. CARRUSEL DE IMÁGENES DE FONDO */}
      <div className="absolute inset-0 z-0">
        <BackgroundCarousel />

        {/* OVERLAY GRADIENTE ÁRABE - Colores cálidos */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/75 via-brand-brown/60 to-transparent pointer-events-none" />

        {/* Patrón decorativo sutil */}
        <div className="absolute inset-0 pattern-geometric opacity-30 pointer-events-none" />

        {/* Degradado suave en la base */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-brand-cream/50 to-transparent pointer-events-none" />
      </div>

      {/* 2. CONTENIDO PRINCIPAL CON ANIMACIONES */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto mt-6 sm:mt-10 animate-fade-in-up w-full overflow-hidden">
        
        {/* Etiqueta decorativa */}
        <div className="mb-6 sm:mb-8 inline-block px-2">
          <span className="bg-brand-gold/20 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest border border-brand-gold/40 block overflow-hidden text-ellipsis">
            DXN • Salud, Bienestar y Oportunidad
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-6xl text-white mb-6 sm:mb-8 leading-tight drop-shadow-xl break-words">
          Transforma tu salud y construye un negocio internacional con DXN
        </h1>

        <p className="text-gray-50 text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-2xl mx-auto font-sans font-light drop-shadow-lg leading-relaxed break-words px-2">
          Productos naturales (café, cacao, Ganoderma y suplementos) y una oportunidad de negocio internacional. Elige tu camino y comienza hoy.
        </p>

        {/* BOTONES CON EFECTO HOVER */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-in-right px-2">
          <Link href="#productos">
            <button className="relative group bg-gradient-to-r from-brand-gold to-brand-brown text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                🛒 Quiero mejorar mi salud
              </span>
            </button>
          </Link>

          <Link href="#negocio">
            <button className="relative group border-2 border-white text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              <span className="relative z-10">🤝 Quiero generar ingresos</span>
            </button>
          </Link>
        </div>

        {/* Formulario de captura simple */}
        {false && (
          <div className="mt-6 sm:mt-8 max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" className="w-full sm:w-1/3 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" type="email" required className="w-full sm:w-1/3 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70" />
              <button type="submit" className="w-full sm:w-auto bg-white text-brand-brown font-bold px-6 py-3 rounded-lg">Recibir guía gratuita</button>
            </form>
            {submitted && <p className="mt-3 text-sm text-green-100">Gracias — revisaremos tu info pronto.</p>}
          </div>
        )}

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

function BackgroundCarousel() {
  const slides = [
    "/images/Cremas1.png",
    "/images/BannerCompl.png"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={src} alt={`Slide ${i + 1}`} fill className="object-cover object-center" priority={i === 0} />
        </div>
      ))}

      <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir a slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${i === current ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </>
  );
}