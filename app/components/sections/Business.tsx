"use client";

import { TrendingUp, Users, Award } from "lucide-react";

export default function Business() {
  const pedirInfo = () => {
    const phoneNumber = "5493873698636";
    const text = `Hola!. Quiero obtener más información sobre el negocio con productos DXN.`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="negocio" className="py-20 sm:py-32 bg-gradient-to-br from-brand-brown via-[#6D5C56] to-brand-brown text-white relative overflow-hidden">
      {/* Patrón decorativo de fondo árabe */}
      <div className="absolute inset-0 pattern-geometric opacity-20" />
      
      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        
        {/* Encabezado decorado */}
        <div className="mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-brand-gold/20 text-brand-gold px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest border border-brand-gold/40">
              Oportunidad de Negocio
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight">Libertad Financiera & Bienestar</h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
            Transforma tu pasión por la salud en una oportunidad real de negocio. Con DXN, no solo compartes bienestar, también construyes tu futuro independiente.
          </p>
        </div>

        {/* Tarjetas de Beneficios */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {[
            { icon: <TrendingUp className="w-6 sm:w-8 h-6 sm:h-8" />, title: "Ingresos Pasivos", desc: "Construye un negocio que genera ingresos continuos mientras duermes." },
            { icon: <Users className="w-6 sm:w-8 h-6 sm:h-8" />, title: "Comunidad Global", desc: "Únete a miles de emprendedores en todo el mundo con apoyo 24/7." },
            { icon: <Award className="w-6 sm:w-8 h-6 sm:h-8" />, title: "Reconocimientos", desc: "Sistema de bonos, premios y viajes por tu esfuerzo y liderazgo." }
          ].map((item, i) => (
            <div 
              key={i} 
              className="group bg-gradient-to-br from-white/10 to-white/5 border border-brand-gold/30 p-6 sm:p-10 rounded-3xl backdrop-blur-sm hover:border-brand-gold/60 transition-all duration-500 card-hover relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-brand-gold/20 border border-brand-gold/50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-brown transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg sm:text-2xl mb-3 sm:mb-4 group-hover:text-brand-gold transition-colors leading-tight">{item.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed group-hover:text-gray-200 transition-colors">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box Principal */}
        <div className="bg-gradient-to-r from-brand-gold/10 to-white/10 rounded-3xl p-8 sm:p-12 md:p-16 max-w-4xl mx-auto border-2 border-brand-gold/40 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 leading-tight">Comienza tu Viaje hacia la Libertad</h3>
            <p className="text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
              Sin experiencia previa. Recibe capacitación completa, herramientas profesionales y apoyo dedicado del equipo Lo d' Keren para garantizar tu éxito.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <button 
                className="relative group/btn bg-gradient-to-r from-brand-gold to-[#C59D35] text-brand-brown px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl overflow-hidden"
                onClick={pedirInfo}
              >
                <span className="relative z-10">Unirme al Equipo</span>
                <div className="absolute inset-0 bg-white/20 transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
              </button>
              {/* <button className="border-2 border-brand-gold text-brand-gold px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-brand-gold/10 transition-all duration-300 backdrop-blur-sm">
                Solicitar Información
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}