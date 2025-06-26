import React from "react";
import { Box } from "@mui/material";

const WorkImage = () => {
  const workImg =
    "https://res.cloudinary.com/diwwjzmsh/image/upload/v1750862952/ADKR1239-min_knd7cm.png";
  return (
    <>
      <Box
        component="img"
        src={workImg}
        alt="equipo de instalación, co.solar"
        sx={{
          position: "cover",
          width: "100%",
          height: { md: "60vh", xs: "60vh" },
          objectFit: "cover",
          marginTop: { xs: "-10rem", md: "-2.5rem", sm: "2rem" },
          marginBottom: { xs: "-.99rem" },
        }}
      ></Box>
    </>
  );
};

export default WorkImage;
