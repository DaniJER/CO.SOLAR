// src/components/home-section/InitialHomeSection.jsx

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// Ya NO necesitas importar useTheme aquí
// Ya NO necesitas la prop navBarHeight

const InitialHomeSection = () => {
  // Ya no recibe navBarHeight
  const mainImg = "/img/fondo-pantalla2.jpg";

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        minHeight: "calc(100vh - var(--navbar-height, 0px))",
        marginTop: "calc(-1 * var(--navbar-height, 0px))",
        paddingTop: "var(--navbar-height, 0px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        zIndex: -1,
      }}
    >
      <Box
        component="img"
        src={mainImg}
        alt="Co.solar imagen principal"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: -1,
        }}
      />
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ zIndex: 1, textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
      >
        Potencia tu futuro con Co.Solar
      </Typography>
      <Typography
        variant="h5"
        sx={{ mb: 4, zIndex: 1, textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
      >
        Soluciones energéticas limpias y eficientes para tu hogar o negocio.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          zIndex: 1,
          backgroundColor: "secondary.main",
          "&:hover": {
            backgroundColor: "secondary.dark",
          },
        }}
      >
        ¡Cotiza Ahora!
      </Button>
    </Box>
  );
};

export default InitialHomeSection;
