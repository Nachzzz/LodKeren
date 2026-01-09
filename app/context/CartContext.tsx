'use client'; // Esto es vital porque usamos estados del navegador

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 1. Definimos cómo se ve un item del carrito
export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

// 2. Definimos qué funciones tendrá nuestro contexto
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// 3. Creamos el Proveedor (este envolverá a toda la app)
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Al cargar la página, buscamos si hay algo guardado
  useEffect(() => {
    const savedCart = localStorage.getItem('dxn-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Cada vez que el carrito cambie, lo guardamos
  useEffect(() => {
    localStorage.setItem('dxn-cart', JSON.stringify(cart));
  }, [cart]);

  // Función para agregar (si ya existe, suma cantidad)
  const addToCart = (product: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  // Calculamos el total automáticamente
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar el carrito en cualquier componente
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart debe usarse dentro de un CartProvider');
  return context;
}