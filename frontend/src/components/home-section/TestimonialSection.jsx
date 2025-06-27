import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { Block } from "@mui/icons-material";

const TestimonialSection = (props) => {
  const videoUrl = props.videoUrl;
  const preloadImage = props.poster;
  return (
    <>
      <Box
        id="testimonial"
        sx={{
          display: "flex", // Habilita Flexbox
          flexDirection: "column", // Apila el video y el texto verticalmente
          alignItems: "center", // Centra el video y el texto horizontalmente dentro de este Box          // Limita el ancho máximo del contenedor del video y texto
          marginTop: { md: "4rem", xs: "-3rem" },
          margin: { md: "0 auto" },
          paddingTop: { xs: "4rem" },
        }}
      >
        <video
          controls
          muted
          loop
          playsInline
          poster={preloadImage}
          style={{
            display: { md: "block" },
            flexDirection: { md: "column" },
            maxHeight: "400px",
            borderRadius: "8px",
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <Typography
          variant="h5"
          sx={{
            marginTop: { xs: "1rem" },
            color: "#FFF",
          }}
        >
          <b>{props.videoTitle}</b>
        </Typography>
      </Box>
    </>
  );
};

export default TestimonialSection;
