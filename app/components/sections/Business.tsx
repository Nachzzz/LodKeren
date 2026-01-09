import { TrendingUp, Users, Award } from "lucide-react";

export default function Business() {
  const pedirInfo = () => {
    const phoneNumber = "5493873698636"; // PON AQUÍ EL NÚMERO DE TU CLIENTA (con código de país sin +)

    const text = `Hola!. Quiero obtener más información sobre el negocio con productos DXN.`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };


  return (
    <section id="negocio" className="py-24 bg-brand-brown text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-6">¿Buscas Libertad Financiera?</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
          Transforma tu pasión por la salud en una oportunidad de negocio real. Con DXN, no solo compartes bienestar, también construyes tu futuro.
        </p>

        {/* Tarjetas Oscuras */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: <TrendingUp />, title: "Ingreso Residual", desc: "Construye un negocio que genera ingresos continuos." },
            { icon: <Users />, title: "Comunidad Global", desc: "Únete a miles de emprendedores en todo el mundo." },
            { icon: <Award />, title: "Reconocimientos", desc: "Sistema de bonos y premios por tu esfuerzo." }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
              <div className="w-14 h-14 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Box */}
        <div className="bg-white/10 rounded-3xl p-12 max-w-4xl mx-auto border border-white/10">
          <h3 className="font-serif text-3xl mb-4">Comienza tu Camino hacia la Libertad</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            No necesitas experiencia previa. Te brindamos toda la capacitación, herramientas y apoyo que necesitas para tener éxito.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-brand-gold text-white px-8 py-3 rounded-lg font-bold hover:bg-[#B69530] transition-colors"
              onClick={pedirInfo}
            >
              Unirme al Equipo
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Más Información
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}