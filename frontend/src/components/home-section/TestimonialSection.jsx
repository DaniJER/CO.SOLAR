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
          display: "flex",
          marginRight: { md: "3.5rem", xs: "4rem" },
          flexWrap: "wrap",
          flexDirection: "column",
          // marginTop: { md: "4rem", xs: "-3rem" },
          // paddingTop: { xs: "4rem" },
          // width: "100%",
        }}
      >
        <video
          controls
          muted
          loop
          playsInline
          poster={preloadImage}
          style={{
            borderRadius: "8px",
            width: "100%", // o un tamaño fijo como "300px"
            maxWidth: "300px", // evita que crezca más allá
            height: "auto",
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </Box>
    </>
  );
};

export default TestimonialSection;
