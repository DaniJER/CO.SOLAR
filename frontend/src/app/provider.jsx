// src/app/providers.jsx
"use client"; // Client Component

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/themes/themes"; // Tu importación de tema
import NavBar from "@/components/navbar/NavBar"; // Tu componente NavBar
import Footer from "@/components/footer/Footer";

// Este componente envolverá toda la lógica de cliente
export function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <nav>
        <NavBar />
      </nav>
      {children}
      <Footer />
    </ThemeProvider>
  );
}
