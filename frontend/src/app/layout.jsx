import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/provider";

const inter = Inter({ subsets: ["latin"] });

// =====================================================================
// METADATA PARA SEO Y REDES SOCIALES (¡AHORA SÍ, AQUÍ SÍ PUEDE ESTAR!)
// =====================================================================
export const metadata = {
  metadataBase: new URL("https://www.cosolar.com"), // <<== ¡IMPORTANTE! Reemplaza con tu dominio real

  title: {
    default: "CO.SOLAR | Soluciones de Energía Solar en Colombia",
    template: "%s | CoSolar",
  },
  description:
    "CO.SOLAR ofrece soluciones integrales de energía solar para hogares y empresas en Colombia, incluyendo Antioquia, Medellín y Cali. Reduce tus costos de energía con paneles solares de alta eficiencia.",

  keywords: [
    "energía solar",
    "paneles solares",
    "Colombia",
    "Antioquia",
    "Caucasia",
    "cotización energía solar",
    "instalación solar",
    "energías renovables",
    "ahorro energía",
    "soluciones fotovoltaicas",
    "Medellín",
    "Bogotá",
    "Cali",
    "energía limpia",
  ],
  authors: [{ name: "CO.SOLAR", url: "https://www.cosolar.com" }],
  creator: "Equipo de Desarrollo Co.Solar",
  publisher: "CO.SOLAR S.A.S.",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "https://www.cosolar.com", //
  },

  openGraph: {
    title: "COSOLAR | Invierte en Energía Solar para Tu Futuro",
    description: "Líderes en soluciones de energía solar en Colombia.",
    url: "https://www.cosolar.com.co", // <<== ¡IMPORTANTE! Reemplaza
    siteName: "CO.SOLAR",
    locale: "es_CO",
    type: "website",
  },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "Co.Solar: Energía Solar Sostenible en Colombia",
  //   description:
  //     "Transforma tu consumo de energía con las soluciones solares de CoSolar. Ahorra y contribuye al medio ambiente. #EnergiaSolar #Colombia",
  //   site: "@CoSolarOficial", // <<== Tu handle de Twitter si tienes uno
  //   creator: "@TuDesarrollador", // Handle del creador si es diferente
  //   images: ["https://www.cosolar.com/images/twitter-card-image.jpg"], // <<== Imagen específica para Twitter (ej. 1200x675)
  // },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // manifest: "/manifest.webmanifest",
};

// =====================================================================

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Tus links existentes para Material Symbols Outlined Icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=imagesearch_roller"
        />

        {/* Importación de la fuente Roboto para Material-UI */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        {/* Importación de los iconos de Material Design (clásicos) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        {/* Llamando al Providers (client component) */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
