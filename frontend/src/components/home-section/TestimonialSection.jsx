import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
const TestimonialSection = (props) => {
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
        }}
      >
        <h1>Testimonios</h1>
      </Typography>
      <br></br>
      <Typography
        sx={{
          width: { xs: "90%", sm: "35rem" },
          textAlign: "justify",
          textAnchor: "initial",
        }}
      >
        <p>{props.text}</p>
      </Typography>
      <br></br>
      <Typography sx={{ fontWeight: "bold" }}>-{props.name}</Typography>
    </>
  );
};

export default TestimonialSection;
