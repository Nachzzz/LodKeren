import { Sparkles, Shield, Leaf } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-10 h-10 text-brand-gold" />,
    title: "Hidratación Profunda",
    desc: "Cremas que penetran las capas de la piel, proporcionando hidratación duradera y visible desde el primer uso. Ideal para pieles secas y sensibles."
  },
  {
    icon: <Shield className="w-10 h-10 text-brand-brown" />,
    title: "Protección y Reparación",
    desc: "Con Ganoderma Lucidum como ingrediente clave, fortalece la barrera cutánea y regenera células dañadas. Anti-edad y antioxidante potente."
  },
  {
    icon: <Leaf className="w-10 h-10 text-brand-green" />,
    title: "100% Natural",
    desc: "Formulaciones libres de parabenos, sulfatos y químicos sintéticos. Dermatológicamente testadas y aprobadas para todo tipo de piel, incluso sensible."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 pattern-geometric opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto px-2">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-brand-gold/10 text-brand-brown px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest border border-brand-gold/30">
              Beneficios Clave
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-brown mb-4 sm:mb-6 leading-tight">
            Cuidado Dermatológico <br /> de Excelencia
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Nuestras cremas DXN combinan la tradición milenaria con ciencia de punta para transformar tu piel.
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-gradient-to-br from-brand-cream/30 to-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-gold/10 hover:border-brand-gold/40 card-hover relative overflow-hidden"
            >
              {/* Fondo decorativo que aparece al hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icono con fondo */}
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-md group-hover:shadow-lg transition-shadow duration-300 transform group-hover:-translate-y-2 transition-transform">
                  {item.icon}
                </div>

                {/* Título */}
                <h3 className="font-serif text-xl sm:text-2xl text-brand-brown mb-3 sm:mb-4 group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors">
                  {item.desc}
                </p>

                {/* Línea decorativa al bottom */}
                <div className="mt-4 sm:mt-6 h-1 w-0 bg-gradient-to-r from-brand-gold to-brand-brown rounded-full group-hover:w-12 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Sección de confianza */}
        <div className="mt-16 sm:mt-20 pt-16 sm:pt-20 border-t border-brand-gold/20">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center px-2">
            {[
              { number: "10+", label: "Años de experiencia en cuidado de piel" },
              { number: "100%", label: "Ingredientes naturales certificados" },
              { number: "∞", label: "Satisfacción garantizada" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <p className="font-serif text-3xl sm:text-4xl text-brand-gold">{stat.number}</p>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}