/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Mejora la velocidad en desarrollo
  output: "export", // Habilita la exportación estática
  trailingSlash: true, // Opcional: añade slash al final de las URLs
  images: {
    unoptimized: true, // Necesario para exportación estática
  },

  eslint: {
    ignoreDuringBuilds: true, // Evita que ESLint frene el build
  },

  webpack(config) {
    // Encuentra la regla por defecto de Next.js que maneja los SVG como recursos
    const fileLoaderRule = config.module.rules.find(
      (rule) =>
        rule.test &&
        rule.type === "asset/resource" &&
        rule.test.toString().includes("svg")
    );

    // Excluye los .svg de esa regla para usar @svgr/webpack
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    // Agrega la nueva regla para importar SVG como componente React
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
