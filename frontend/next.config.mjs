/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Esto asegura que Next.js maneje los SVGs como componentes de React

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] }, // Aplica solo a SVGs importados desde JS/TS/MDX
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false, // Mantener viewBox es útil para controlar el tamaño del icono
                },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
