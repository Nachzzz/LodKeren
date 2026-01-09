'use client';

import Navbar from "./components/layout/NavBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import Business from "./components/sections/Business";
import ProductCard from "./components/cards/ProductCard";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/layout/Footer";
import { useCart } from "./context/CartContext";

export default function Home() {
  const { addToCart } = useCart();

  // Función dummy para el ejemplo
  const handleAdd = (product: any) => {
    addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 });
  };

  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      
      <Hero />

      <About />

      <Features />

      {/* SECCIÓN PRODUCTOS (CATÁLOGO) */}
      <section id="productos" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-brand-brown mb-2">Nuestros Favoritos DXN</h2>
            <p className="text-gray-500">Selección premium de productos que transformarán tu estilo de vida</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Aquí reutilizamos tu componente ProductCard con datos de ejemplo */}
            <ProductCard
              id="1" name="Café Lingzhi 3 en 1" price={25.00} imageSrc="/images/prod-cafe.jpg"
              description="Café instantáneo con Ganoderma, azúcar de caña y crema."
              isFeatured
              onAddToCart={() => handleAdd({ id: '1', name: 'Café Lingzhi', price: 25 })}
            />
            <ProductCard
              id="2" name="Spirulina" price={30.00} imageSrc="/images/prod-spirulina.jpg"
              description="Alga rica en proteínas, vitaminas y minerales."
              isFeatured
              onAddToCart={() => handleAdd({ id: '2', name: 'Spirulina', price: 30 })}
            />
            <ProductCard
              id="3" name="Cocozhi" price={22.00} imageSrc="/images/prod-cocozhi.jpg"
              description="Deliciosa bebida de cacao con Ganoderma."
              isFeatured
              onAddToCart={() => handleAdd({ id: '3', name: 'Cocozhi', price: 22 })}
            />
            <ProductCard
              id="4" name="Té Verde" price={20.00} imageSrc="/images/prod-tea.jpg"
              description="Antioxidantes naturales combinados con Ganoderma."
              onAddToCart={() => handleAdd({ id: '4', name: 'Té Verde', price: 20 })}
            />
          </div>

          <div className="mt-12 text-center">
            <button className="border-2 border-brand-brown text-brand-brown px-8 py-3 rounded-lg font-bold hover:bg-brand-brown hover:text-white transition-colors">
              Ver Catálogo Completo
            </button>
          </div>
        </div>
      </section>

      <Business />

      <Testimonials />

      <Footer />
    </main>
  );
}