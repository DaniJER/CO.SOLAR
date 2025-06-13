/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    // 1. Encuentra la regla por defecto de Next.js para `asset/resource`
    // que maneja imágenes, incluyendo SVGs.
    const fileLoaderRule = config.module.rules.find((rule) => {
      // Busca la regla que tiene un 'test' y que apunta a 'asset/resource'
      // y que contiene 'svg' en su expresión regular o tipo.
      // toString() es un truco para poder buscar 'svg' en la expresión regular.
      return (
        rule.test &&
        rule.type === "asset/resource" &&
        rule.test.toString().includes("svg")
      );
    });

    // Si la encontramos, la modificamos para excluir los SVGs de esta regla.
    // Esto es CRÍTICO para que nuestro loader @svgr/webpack sea el único que maneja los SVGs.
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    // 2. Agrega tu regla para @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/i, // Asegura que coincida con archivos .svg
      // `issuer` asegura que este loader solo actúe cuando el SVG es importado
      // desde archivos JavaScript, TypeScript o MDX.
      issuer: {
        and: [/\.(js|ts|md)x?$/],
      },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // svgoConfig: { // Puedes comentar esto temporalmente si sospechas que SVGO causa problemas
            //   plugins: [
            //     {
            //       name: "removeViewBox",
            //       active: false, // Mantener viewBox es crucial para escalado con Material-UI
            //     },
            //   ],
            // },
            icon: true, // Esto es muy útil para Material-UI SvgIcon, convierte el SVG en un componente React
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
