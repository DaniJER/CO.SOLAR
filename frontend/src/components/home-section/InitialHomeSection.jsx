import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const InitialHomeSection = () => {
  const mainImg = "/img/mainBackground.jpg";

  return (
    <>
      <Box
        id="/"
        sx={{
          position: "cover",
          width: "100vw",
          minHeight: "calc(100dvh - var(--navbar-height, 0px))",
          marginTop: "calc(-1 * var(--navbar-height, 0px))",
          paddingTop: "var(--navbar-height, 0px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          overflow: "hidden",
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
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: -1,
            opacity: "0.9", //Opacidad para la imagen inicial
          }}
        />

        <Typography
          variant="h1"
          // component="h1"
          gutterBottom
          sx={{
            zIndex: 1,
            color: "white",
            textShadow: "2px 2px 4px rgb(19, 19, 19)",
            fontSize: "3rem",
            xs: { fontSize: "1.5rem" },
            sm: { fontSize: "1.5rem" },
          }}
        >
          Transforma tu hogar, multiplica tu ahorro.
        </Typography>
        <Typography
          variant="h1"
          sx={{
            mb: 4,
            zIndex: 1,
            color: "white",
            textShadow: "1px 1px 3px rgba(26, 26, 26, 0.7)",
            fontSize: { xs: "1.8rem" },
          }}
        >
          Soluciones energéticas, limpias y eficientes
        </Typography>
        <a
          href="https://wa.me/573152115364?text=Hola,%20vengo%20de%20la%20app%20y%20quisiera%20más%20información%20de%20los%20paneles%20solares."
          target="_blank"
        >
          <Button
            variant="contained"
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
        </a>
      </Box>
    </>
  );
};

export default InitialHomeSection;
