import Image from "next/image";
import { Check } from "lucide-react";

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-brand-cream">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texto */}
        <div className="space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-brown mb-4">
            Bienvenido a Lo d' Keren
          </h2>
          <div className="space-y-4 text-gray-600 font-sans leading-relaxed">
            <p>
              En <strong>Lo d' Keren</strong>, creemos que el bienestar integral es posible cuando conectamos la salud física con la libertad personal y financiera.
            </p>
            <p>
              Nuestra misión es compartir los beneficios del <strong>Ganoderma Lucidum</strong>, un hongo milenario conocido como el "Rey de las Hierbas", a través de productos DXN de la más alta calidad.
            </p>
            <p>
              Cada taza de café que compartes, cada producto que recomiendas, es un paso hacia una vida más saludable y próspera.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mt-8">
            {['100% Natural', 'Certificado Orgánico', 'Calidad Premium'].map((tag) => (
              <span key={tag} className="bg-brand-green/90 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Imagen */}
        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/about-woman.jpg" // Foto de la mujer tomando café
            alt="Mujer disfrutando café"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}