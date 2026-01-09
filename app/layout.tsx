import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
// IMPORTAMOS LOS NUEVOS COMPONENTES
import { CartProvider } from "./context/CartContext";
import FloatingCart from "./components/layout/FloatingCart";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-lato" });

export const metadata: Metadata = {
  title: "Lo d' Keren | Salud y Libertad",
  description: "Productos DXN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${lato.variable} bg-brand-cream text-brand-brown antialiased`}>
        {/* Envolvemos todo con el CartProvider */}
        <CartProvider>
          {children}
          {/* Agregamos el Carrito Flotante aquí para que esté en todas las pantallas */}
          <FloatingCart />
        </CartProvider>
      </body>
    </html>
  );
}