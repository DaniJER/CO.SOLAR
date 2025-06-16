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
      src: "/img-installations/ADKR1239.png",
      tittle: "ejemplo",
    },
    {
      src: "/img-installations/DYFP0641.PNG",
      tittle: "ejemplo",
    },
    {
      src: "/img-installations/tltt8538.PNG",
      tittle: "ejemplo",
    },
  ];

  return (
    <>
      <Typography sx={{ textAlign: "center", fontWeight: 100 }}>
        <br />
        <br />
        <h1>Más de tres mil personas beneficiadas con nuestros proyectos</h1>
      </Typography>
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
          maxWidth: "1200px",
          height: "550px",
          margin: "35px auto",
          padding: "35 auto",
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Paper
              elevation={3}
              sx={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                padding: "35 auto",
              }}
            >
              <Box
                component="img"
                src={img.src}
                alt={img.tittle}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(90%)",
                }}
              />
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
    </>
  );
}

export default SlideImageSection;
