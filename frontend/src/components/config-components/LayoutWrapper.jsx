// src/components/LayoutWrapper.jsx

"use client"; // <--- ¡MUY IMPORTANTE! Esto lo convierte en un componente de cliente.

import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Componentes que ya tienes
import NavBar from "@/components/navbar/NavBar"; // Verifica la ruta
import InitialHomeSection from "@/components/home-section/InitialHomeSection"; // Verifica la ruta

// Este componente va a envolver tus NavBar e InitialHomeSection
// para asegurar que los hooks de cliente se usen en el lugar correcto.
const LayoutWrapper = () => {
  const theme = useTheme();

  // Calcula la altura REAL de tu Toolbar de la NavBar
  // Estos valores (80 y 64) DEBEN coincidir con los de tu <Toolbar sx={{ minHeight: { xs: 64, sm: 80 }...
  const navBarHeight = useMediaQuery(theme.breakpoints.up("sm")) ? 80 : 64;

  return (
    <>
      <NavBar />
      <InitialHomeSection navBarHeight={navBarHeight} />
      {/* Aquí podrías renderizar otros componentes de la página
          que también necesiten la altura de la navBar, o simplemente
          otras secciones de tu página.
      */}
      {/* <OtherSection /> */}
    </>
  );
};

export default LayoutWrapper;
