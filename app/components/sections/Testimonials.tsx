import Image from "next/image";
import { Star, Quote } from "lucide-react";

// Datos de prueba (puedes cambiarlos luego)
const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Cliente Satisfecha",
    content: "Desde que comencé a tomar el café con Ganoderma, mi energía mejoró increíblemente. Ya no necesito varias tazas al día y me siento más saludable.",
    image: "/images/user-1.jpg" // Asegúrate de tener una foto aquí o usa un placeholder
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    role: "Emprendedor DXN",
    content: "DXN cambió mi vida. No solo mejoré mi salud, sino que también encontré una forma de generar ingresos mientras ayudo a otros. ¡Gracias Lo d' Keren!",
    image: "/images/user-2.jpg"
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Cliente Frecuente",
    content: "Los productos son de excelente calidad y el servicio es impecable. La Spirulina se ha convertido en parte esencial de mi rutina diaria.",
    image: "/images/user-3.jpg"
  }
];

const stats = [
  { value: "500+", label: "Clientes Felices" },
  { value: "100%", label: "Productos Naturales" },
  { value: "24/7", label: "Atención Disponible" },
  { value: "5★", label: "Calificación Promedio" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-brown mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans">
            Historias reales de personas que transformaron su salud y su vida
          </p>
        </div>

        {/* TARJETAS DE TESTIMONIOS */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
              
              {/* Ícono de Comillas (Decorativo) */}
              <div className="absolute top-8 right-8 text-brand-cream opacity-50">
                <Quote size={40} fill="#FAF3E0" stroke="none"/> {/* Relleno color crema */}
              </div>

              {/* Estrellas */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-600 mb-8 font-sans leading-relaxed relative z-10">
                "{item.content}"
              </p>

              {/* Usuario */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-gold/20">
                    {/* Placeholder por si no tienes foto aún */}
                   <div className="w-full h-full bg-gray-200" /> 
                   {/* Descomenta esto cuando tengas las fotos reales:
                   <Image src={item.image} alt={item.name} fill className="object-cover" /> 
                   */}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-brown text-sm">{item.name}</h4>
                  <p className="text-xs text-brand-gray uppercase tracking-wide">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BARRA DE ESTADÍSTICAS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-brand-brown/10 pt-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="font-serif text-4xl md:text-5xl text-brand-brown font-medium">
                {stat.value}
              </div>
              <p className="text-gray-500 font-sans text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}