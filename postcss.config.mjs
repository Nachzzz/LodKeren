/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // AQUÍ ESTÁ EL CAMBIO: Usamos el paquete nuevo con arroba
    '@tailwindcss/postcss': {}, 
    autoprefixer: {},
  },
};

export default config;