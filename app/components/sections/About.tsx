import Image from "next/image";
import { Check } from "lucide-react";

export default function About() {
  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-gradient-to-b from-white to-brand-cream/30 pattern-geometric">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* IMAGEN DESTACADA CON MARCO ÁRABE */}
          <div className="relative order-2 md:order-1">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-brand-gold/30">
              <Image
                src="/images/Cremas2.png"
                alt="Colección de cremas DXN"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay decorativo */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/20 to-transparent" />
            </div>
            
            {/* Elemento decorativo flotante */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl animate-float" />
          </div>

          {/* TEXTO CON ESTRUCTURA ÁRABE */}
          <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
            
            {/* Encabezado con línea decorativa */}
            <div>
              <div className="flex items-center gap-2 sm:gap-4 mb-2">
                <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-brand-gold to-brand-brown rounded-full" />
                <span className="text-brand-gold font-bold uppercase tracking-widest text-xs sm:text-sm">Sobre Lo d' Keren</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-brown leading-tight">
                Belleza Oriental, <br /> Ciencia Moderna
              </h2>
            </div>

            {/* Descripción principal */}
            <div className="space-y-4 sm:space-y-5 text-gray-700 font-sans leading-relaxed text-sm sm:text-base md:text-lg">
              <p>
                En <strong className="text-brand-brown">Lo d' Keren</strong>, fusionamos la sabiduría de la cosmética árabe tradicional con la innovación científica de DXN. Cada crema es formulada con ingredientes naturales certificados para transformar tu piel.
              </p>
              <p>
                Nuestros productos dermatológicos están diseñados para responder a las necesidades específicas de tu piel: desde hidratación profunda hasta tratamientos anti-edad y reparación cutánea.
              </p>
              <p>
                Creemos que la belleza verdadera viene del cuidado responsable, sostenible y 100% natural.
              </p>
            </div>

            {/* Lista de beneficios con iconos */}
            <div className="space-y-4 pt-4 border-t border-brand-gold/20">
              {[
                { title: "100% Natural", desc: "Sin químicos dañinos ni parabenos" },
                { title: "Dermatológicamente Testado", desc: "Aprobado para todo tipo de piel" },
                { title: "Ganoderma Lucidum", desc: "Ingrediente clave antioxidante milenario" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-brand-brown" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA secundario */}
            <div className="pt-6">
              <button className="inline-flex items-center gap-3 text-brand-brown font-bold hover:text-brand-gold transition-colors group">
                <span>Conocer más sobre DXN</span>
                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}