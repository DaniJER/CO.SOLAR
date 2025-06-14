"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Box, Paper, Typography, Button } from "@mui/material";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function SlideImageSection() {
  const images = [
    {
      src: "/img/cosolar.png",
      tittle: "ejemplo",
    },
    {
      src: "/img/fondo-pagina.jpg",
      tittle: "ejemplo",
    },
    {
      src: "/img/fondo-pantalla2.jpg",
      tittle: "ejemplo",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation]}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      style={{
        width: "100%",
        maxWidth: "1200px", // más ancho
        height: "550px", // altura fija
        margin: "70px auto",
      }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <Paper
            elevation={3}
            sx={{
              width: "100%",
              height: "100%", // Asegura que el contenedor llene todo
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Imagen con altura fija y ajuste completo */}
            <Box
              component="img"
              src={img.src}
              alt={img.tittle}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain", // Recorta bien la imagen
                filter: "brightness(85%)", // oscurece un poco
              }}
            />
            {/* Título centrado sobre la imagen */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
              }}
            >
              <Typography variant="h4" sx={{ mb: 1 }}>
                {img.tittle}
              </Typography>
              <Button variant="contained" color="primary">
                Saber más
              </Button>
            </Box>
          </Paper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlideImageSection;
