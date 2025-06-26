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
      src: "https://res.cloudinary.com/diwwjzmsh/image/upload/v1750862954/FULU3431-min_u1tt18.jpg",
      tittle: "Caucasia, Antioquia",
    },
    {
      src: "https://res.cloudinary.com/diwwjzmsh/image/upload/v1750862954/INSN3911-min_za9yyq.png",
      tittle: "Jardín Caceres, Antioquia",
    },
    {
      src: "https://res.cloudinary.com/diwwjzmsh/image/upload/v1750862953/CMOM7578-min_sx9wf3.png",
      tittle: "Jardín Caceres, Antioquia",
    },
    {
      src: "https://res.cloudinary.com/diwwjzmsh/image/upload/v1750862953/BBPM2465-min_dmbgan.png",
      tittle: "Jardín Caceres, Antioquia",
    },
  ];

  return (
    <>
      <br></br>
      <Box
        sx={{
          display: "block",
          width: "100vw",
          height: { md: "130vh" },
          paddingBottom: { md: "1rem" },
          paddingTop: { xs: "10rem", md: 0 },
          alignContent: "center",
          marginTop: { md: "-1rem" },
          marginBottom: { md: "3rem" },
          bgcolor: "primary.dark",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#fff",
            textAlign: "center",
            marginTop: { xs: "-10rem", md: "-3.9rem" },
            margin: "0 auto",
            justifyContent: { sm: "center" },
            fontSize: {
              md: "2.5rem",
              xs: "1.9rem",
              sm: "1.9rem",
            },
            width: { sm: "90%" },
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
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          style={{
            width: "100%",
            maxWidth: "1200px",
            height: "550px",
            margin: "35px auto",
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
    </>
  );
}

export default SlideImageSection;
