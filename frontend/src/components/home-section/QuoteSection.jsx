import React from "react";
import { Box, Typography, Button } from "@mui/material";

const QuoteSection = () => {
  return (
    <Box
      sx={{
        justifyItems: "center",
        alignContent: "center",
        backgroundColor: "rgb(24, 23, 23)",
        width: "100%",
        minHeight: { xs: "75vh", md: "60vh" },
        marginBottom: "-4rem",
        marginTop: { md: "-2.5rem", xs: "-3rem" },
      }}
    >
      <Typography variant="h1" color="white" marginBottom="3rem">
        Contactanos <br />
      </Typography>
      <Typography
        variant="h5"
        color="#fff"
        sx={{
          width: { md: "50%", xs: "85%", sm: "75%" },
          textAlign: "justify",
        }}
      >
        Nuestras asesorias, visitas y cotizaciones son totalmente gratuitas.
        Animate y vuelvete un caso más de exito con <b>CO.SOLAR.</b> <br />
        <br />
      </Typography>
      <Button
        size="large"
        sx={{
          color: "#fff",
          textShadow: "1px 1px 3px rgba(26, 26, 26, 0.7)",
          cursor: "pointer",
          zIndex: 1,
          backgroundColor: "fourth.main",
          "&:hover": {
            backgroundColor: "fourth.dark",
          },
        }}
      >
        ¡Cotiza Ahora!
      </Button>
    </Box>
  );
};

export default QuoteSection;
