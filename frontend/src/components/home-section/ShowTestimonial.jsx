import React from "react";
import TestimonialSection from "./TestimonialSection";
import { Box, Typography } from "@mui/material";

const ShowTestimonial = (props) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "primary.dark",
          height: { xs: "190vh", md: "115vh" },
          justifyItems: { xs: "center", md: "center" },
          alignContent: { md: "center" },
          alignItems: { md: "center" },
          marginTop: { md: "-12rem" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            marginTop: { md: "3rem", xs: "-5rem" },
            paddingTop: { md: "2rem", xs: "7rem" },
            color: "#FFF",
          }}
        >
          Testimonios de nuestros clientes
        </Typography>
        <Box
          sx={{
            marginTop: { md: "2rem" },
            alignContent: { md: "flex-start" },
            display: { md: "flex", xs: "block" },
            flexWrap: "wrap",
            alignItems: { md: "center" },
            margin: "auto",
            gap: { md: "8rem" },
            width: "100%",
            height: { md: "125vh", xs: "80vh" },
            paddingTop: { xs: "4rem" },
          }}
        >
          <TestimonialSection
            videoUrl="https://res.cloudinary.com/diwwjzmsh/video/upload/v1750863886/Co.solar_Ruben_1_wsez5z.mp4"
            videoTitle="Don Ruben"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1750976061/ruben-portrait_zovfng.png"
          />
          <TestimonialSection
            videoUrl="https://res.cloudinary.com/diwwjzmsh/video/upload/v1750863568/GIRALSALUD_IPS_muiuld.mp4"
            videoTitle="GiraldSalud"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1750976061/health-portrait_qa1exj.png"
          />
          <TestimonialSection
            videoUrl="https://res.cloudinary.com/diwwjzmsh/video/upload/v1750863561/CO.SOLAR_CASA_DETRAS_DEL_EXITO_feo4vp.mp4"
            videoTitle="Familia en Caucasia"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1750976061/portrait-family_cfjvt1.png"
          />
        </Box>
      </Box>
    </>
  );
};

export default ShowTestimonial;
