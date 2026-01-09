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

export const metadata: Metadata = {
  // 1. URL BASE (IMPORTANTE: Cambia esto por tu link real de Vercel)
  metadataBase: new URL('https://lo-de-keren.vercel.app'),

  // 2. Título y Descripción (Lo que sale en Google)
  title: {
    default: "Lo d' Keren | Salud y Libertad con aroma a Café",
    template: "%s | Lo d' Keren" // Para que otras páginas sean "Contacto | Lo d' Keren"
  },
  description: "Descubre el poder del Ganoderma y transforma tu bienestar. Distribución oficial de productos DXN: Café saludable, Spirulina y oportunidades de negocio.",
  
  // 3. Palabras Clave (Para Google)
  keywords: ["DXN", "Ganoderma", "Café Lingzhi", "Salud", "Negocio", "MLM", "Argentina", "Cocozhi"],

  // 4. Open Graph (Lo que sale en WhatsApp, FB, LinkedIn)
  openGraph: {
    title: "Lo d' Keren | Salud y Libertad",
    description: "Mejora tu salud y tu economía con productos naturales DXN. ¡Pide tu catálogo por WhatsApp!",
    url: 'https://lod-keren-mdr1.vercel.app',
    siteName: "Lo d' Keren",
    images: [
      {
        url: '/images/og-image.jpg', // La imagen rectangular que creamos
        width: 1200,
        height: 630,
        alt: "Lo d' Keren - Bienestar y Café DXN",
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },

  // 5. Iconos (El loguito en la pestaña del navegador)
  icons: {
    icon: '/images/logo.png', // Tu logo cuadrado
    apple: '/images/logo.png', // Para iPhone
  },
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