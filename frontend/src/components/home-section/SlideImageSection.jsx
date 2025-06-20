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
      tittle: "Caucasia",
    },
    {
      src: "/img-installations/DYFP0641.PNG",
      tittle: "Planeta Rica",
    },
    {
      src: "/img-installations/tltt8538.PNG",
      tittle: "El Bagre",
    },
  ];

  return (
    <Box
      sx={{
        display: "block",
        width: "100%",
        height: "100%",
        // backgroundColor: "rgba(65, 61, 61, 0.74)",
        alignContent: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "#000",
          // fontStyle: "italic",
          textAlign: "center",
          // textShadow: "2px 2px 4px rgba(100, 93, 93, 0.7)",
          fontSize: "2.5rem",
        }}
      >
        <br />
        Más de tres mil personas beneficiadas con nuestros proyectos
      </Typography>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
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
                  filter: "brightness(95%)",
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
                <Typography
                  variant="h3"
                  sx={{
                    color: "#ffffff",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                    marginTop: "25rem",
                  }}
                >
                  {img.tittle}
                </Typography>
              </Box>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default SlideImageSection;
