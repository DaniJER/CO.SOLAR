import React from "react";
import { Box } from "@mui/material";

const WorkImage = () => {
  const workImg = "/img-installations/SWNW3662.PNG";
  return (
    <>
      <Box
        component="img"
        src={workImg}
        alt="equipo de instalación, co.solar"
        sx={{
          width: "100%",
          height: "80vh",
          objectFit: "cover",
          objectPosition: "center",
        }}
      ></Box>
    </>
  );
};

export default WorkImage;
