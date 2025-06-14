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
      src: "https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Slide+1",
      title: "Vista de Montaña",
    },
    {
      src: "https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Slide+2",
      title: "Paisaje Verde",
    },
    {
      src: "https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Slide+3",
      title: "Océano Azul",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation={true} // Habilitar flechas de navegación
      pagination={{ clickable: true }} // Habilitar paginación (puntos)
      modules={[Pagination, Navigation]} // Importar los módulos necesarios
      loop={true} // Desplazamiento infinito
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay opcional
      style={{ width: "100%", maxWidth: "900px", margin: "20px auto" }} // Estilos básicos del contenedor Swiper
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
            <Box
              component="img"
              src={img.src}
              alt={img.title}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "400px",
                objectFit: "cover",
              }}
            />
            <Typography variant="h5" sx={{ mt: 2 }}>
              {img.title}
            </Typography>
            <Button variant="contained" sx={{ mt: 1 }}>
              Saber más
            </Button>
          </Paper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlideImageSection;
