import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Cliente Satisfecha",
    location: "Tartagal, Argentina",
    photoSrc: "/images/testimonial-maria.jpg",
    content: "Las cremas DXN transformaron mi piel. Desde el primer uso noté la hidratación y suavidad. Mi familia notó la diferencia.",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    role: "Distribuidor DXN",
    location: "Salta, Argentina",
    photoSrc: "/images/testimonial-carlos.jpg",
    content: "No solo mejoré mi bienestar, sino que encontré una oportunidad de negocio con apoyo real. El equipo de Lo d' Keren me ayudó a crecer.",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Asesora de Salud",
    location: "Buenos Aires, Argentina",
    photoSrc: "/images/testimonial-ana.jpg",
    content: "Recomiendo DXN a todas mis clientas. La calidad es excelente y los resultados se ven rápido. Ideal para quienes buscan salud y negocio.",
    rating: 5
  }
];

const stats = [
  { value: "500+", label: "Clientes Satisfechos" },
  { value: "100%", label: "Natural & Orgánico" },
  { value: "24/7", label: "Soporte Disponible" },
  { value: "5★", label: "Rating Promedio" },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-brand-cream/20 relative overflow-hidden pattern-geometric">
      <div className="container mx-auto px-4">
        
        {/* ENCABEZADO CON DECORACIÓN */}
        <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-brand-gold/10 text-brand-brown px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest border border-brand-gold/30">
              Historias Reales
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-brown mb-4 sm:mb-6 leading-tight">
            Resultados que Hablan
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Testimonios de clientes que transformaron su piel con nuestras cremas dermatológicas premium.
          </p>
        </div>

        {/* TARJETAS DE TESTIMONIOS CON ANIMACIONES */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-24">
          {testimonials.map((item, idx) => (
            <div 
              key={item.id} 
              className="group bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden border border-brand-gold/10 hover:border-brand-gold/40 card-hover animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Efecto de gradiente al fondo */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Ícono de Comillas */}
              <div className="absolute top-3 sm:top-6 right-3 sm:right-6 text-brand-gold/20 group-hover:text-brand-gold/40 transition-colors">
                <Quote size={40} className="sm:w-12 sm:h-12" fill="currentColor" />
              </div>

              <div className="relative z-10">
                {/* Estrellas */}
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="sm:w-5 sm:h-5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Texto del Testimonio */}
                <p className="text-gray-700 mb-6 sm:mb-8 font-sans leading-relaxed text-xs sm:text-sm md:text-base h-20 sm:h-24 overflow-hidden group-hover:text-gray-800 transition-colors">
                  "{item.content}"
                </p>

                {/* Divisor */}
                <div className="w-12 h-1 bg-gradient-to-r from-brand-gold to-brand-brown rounded-full mb-4 sm:mb-6 transform origin-left group-hover:w-20 transition-all duration-500" />

                {/* Usuario */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative w-12 sm:w-14 h-12 sm:h-14 rounded-full overflow-hidden border-2 border-brand-gold/30 group-hover:border-brand-gold/60 transition-colors flex-shrink-0 bg-brand-cream/80">
                    {item.photoSrc ? (
                      <img src={item.photoSrc} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-brand-gold/30 to-brand-brown/30 flex items-center justify-center">
                        <span className="text-lg sm:text-2xl font-bold text-brand-brown opacity-50">{item.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="text-left">
                    <h4 className="font-serif font-bold text-brand-brown text-sm sm:text-base group-hover:text-brand-gold transition-colors leading-tight">{item.name}</h4>
                    <p className="text-xs text-brand-gray uppercase tracking-widest font-bold">{item.role}</p>
                    {item.location && <p className="text-[11px] text-gray-500 mt-1">{item.location}</p>}
                  </div>
                </div>
                {item.videoUrl && (
                  <div className="mt-4">
                    <a href={item.videoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown hover:text-brand-gold transition-colors">
                      🎥 Ver Testimonio en Video
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* BARRA DE ESTADÍSTICAS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-20 border-t-2 border-brand-gold/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-3 group animate-scale-in" style={{ animationDelay: `${idx * 0.15}s` }}>
              <div className="font-serif text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-brown font-bold group-hover:from-brand-brown group-hover:to-brand-gold transition-all duration-300">
                {stat.value}
              </div>
              <p className="text-gray-600 font-sans text-sm uppercase tracking-wider group-hover:text-brand-brown transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}