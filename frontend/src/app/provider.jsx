// src/app/providers.jsx
"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/themes/themes";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import { Box } from "@mui/material";

export function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <nav>
          <NavBar />
        </nav>

        {/* Aquí el contenido crece para ocupar el espacio disponible */}
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}
