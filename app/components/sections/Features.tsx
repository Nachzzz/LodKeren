import { Leaf, Heart, Zap } from "lucide-react";

const features = [
  {
    icon: <Leaf className="w-8 h-8 text-brand-green" />,
    title: "100% Orgánico",
    desc: "Cultivado sin químicos ni pesticidas, respetando los ciclos naturales para preservar todos sus nutrientes."
  },
  {
    icon: <Heart className="w-8 h-8 text-brand-brown" />,
    title: "Fortalece tu Salud",
    desc: "El Ganoderma ayuda a reforzar el sistema inmunológico, mejorar la circulación y equilibrar el organismo."
  },
  {
    icon: <Zap className="w-8 h-8 text-brand-gold" />,
    title: "Energía Natural",
    desc: "Aumenta tu vitalidad de forma sostenida sin nerviosismo ni caídas de energía como el café tradicional."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-brand-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-brand-brown mb-4">El Poder del Ganoderma</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre por qué el Ganoderma Lucidum es considerado un superalimento con más de 4,000 años de tradición medicinal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="font-serif text-2xl text-brand-brown mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}