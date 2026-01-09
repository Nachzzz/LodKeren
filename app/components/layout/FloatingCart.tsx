'use client';

import { useState } from 'react';
import { useCart } from '@/app/context/CartContext'; // Asegúrate que esta ruta coincida con donde creaste el paso 1
import { ShoppingCart, X, Trash2, MessageCircle } from 'lucide-react';

export default function FloatingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, removeFromCart, total } = useCart();

  // Si el carrito está vacío, no mostramos nada (o solo el botón sin badge)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // --- LÓGICA DE WHATSAPP ---
  const handleCheckout = () => {
    const phoneNumber = "5493873698636"; // PON AQUÍ EL NÚMERO DE TU CLIENTA (con código de país sin +)
    
    const productsMessage = cart.map(item => 
      `- *${item.quantity}x* ${item.name} ($${(item.price * item.quantity).toLocaleString('es-AR')})`
    ).join('%0A'); // %0A es el "Enter"
    
    const text = `Hola! 👋 Quiero realizar el siguiente pedido:%0A%0A${productsMessage}%0A%0A*Total: $${total.toLocaleString('es-AR')}*`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* 1. Botón Flotante (Siempre visible) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-brand-green text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white">
            {totalItems}
          </span>
        )}
      </button>

      {/* 2. Panel Lateral (Overlay) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Fondo oscuro al hacer click cierra el panel */}
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* El Panel Blanco */}
          <div className="relative w-full max-w-md bg-brand-cream h-full shadow-2xl p-6 flex flex-col animate-in slide-in-from-right duration-300">
            
            {/* Cabecera */}
            <div className="flex items-center justify-between mb-6 border-b border-brand-brown/10 pb-4">
              <h2 className="font-serif text-2xl text-brand-brown font-bold">Tu Pedido</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-brand-brown">
                <X size={24} />
              </button>
            </div>

            {/* Lista de Items */}
            <div className="flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 mt-10">Tu carrito está vacío 🍃</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                    <div>
                      <h4 className="font-bold text-brand-brown">{item.name}</h4>
                      <p className="text-sm text-gray-500">
                        {item.quantity} x ${item.price.toLocaleString('es-AR')}
                      </p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-600 p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer con Total y Botón Whatsapp */}
            {cart.length > 0 && (
              <div className="mt-6 border-t border-brand-brown/10 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-sans text-gray-600">Total Estimado</span>
                  <span className="text-2xl font-serif font-bold text-brand-brown">
                    ${total.toLocaleString('es-AR')}
                  </span>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <MessageCircle size={20} />
                  Enviar Pedido por WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}