import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
const TestimonialSection = (props) => {
  return (
    <>
      <br></br>
      <Box
        sx={{
          textAlign: "justify",
          margin: "0 auto",
          width: {
            xs: "100%",
            sm: "100%",
            md: "50%",
          },
        }}
      >
        <Typography
          variant="p"
          sx={{
            margin: "1.8rem",
            width: { xs: "90%", sm: "35rem" },
            textAnchor: "initial",
            fontSize: "1.5rem",
          }}
        >
          "{props.text}".
        </Typography>

        <br></br>
        <br></br>
        <Typography
          variant="p"
          sx={{ fontWeight: "bold", fontSize: "1.5rem", textAlign: "left" }}
        >
          -{props.name}
        </Typography>
      </Box>
      <br></br>
    </>
  );
};

export default TestimonialSection;
