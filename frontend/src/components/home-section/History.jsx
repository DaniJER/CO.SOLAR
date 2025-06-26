import React from "react";
import { Box, Typography } from "@mui/material";
import { LaptopChromebook } from "@mui/icons-material";

const History = () => {
  return (
    <>
      <Box
        sx={{
          alignItems: { md: "center", xs: "justify" },
          display: { md: "flex", xs: "block" },
          gap: { md: "10rem" },
          width: "100%",
          height: { md: "60vh", xs: "155vh", sm: "105vh" },
          color: "#000",
          justifyContent: { xs: "center", md: "space-around" },
          marginTop: { md: "-.99rem", sm: "-.01rem", xs: "1rem" },
          marginBottom: { xs: "1rem" },
          paddingTop: { xs: "5vh", md: "1rem" },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#000",
            fontSize: {
              md: "2.5rem",
              xs: "2.5rem",
              sm: "3rem",
            },
            width: { xs: "90%", md: "50%", sm: "90%" },
            marginLeft: { md: "2rem", xs: "auto" },
            marginRight: { xs: "auto" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Tu Casa, tu energía: El sol a tu servicio.
        </Typography>
        <Typography
          sx={{
            marginTop: { xs: "2rem", md: 0 },
            textAlign: { xs: "justify", md: "justify" },
            marginRight: { md: "2rem", xs: "auto" },
            marginLeft: { xs: "auto" },
            width: {
              md: "60%",
              xs: "75%",
              sm: "85%",
            },
            fontSize: { xs: "1.6rem", md: "1.1rem", sm: "1.7rem" },
          }}
        >
          Desde nuestro inicio en 2023, nos hemos consolidado como líderes en
          soluciones de energía solar, transformando la vida de miles de
          hogares, negocios y empresas. Hemos experimentado un crecimiento
          exponencial gracias a nuestro compromiso con la innovación y la
          eficiencia, ofreciendo sistemas de paneles solares que garantizan
          ahorros significativos y un futuro más sostenible. En los últimos dos
          años, hemos llevado energía limpia y renovable a diversos municipios
          del bajo Cauca Antioqueño, y ahora a la costa Pacifica y Caribe,
          impulsando la independencia energética y contribuyendo activamente a
          un planeta más verde.
        </Typography>
      </Box>
    </>
  );
};

export default History;
