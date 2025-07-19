import React from "react";
import TestimonialSection from "./TestimonialSection";
import { Box, Typography } from "@mui/material";

const ShowTestimonial = (props) => {
  return (
    <>
      <Box
        sx={{
          flexWrap: "wrap",
          textAlign: { xs: "center" },
          bgcolor: "primary.dark",
          minHeight: { md: "100vh" }, // ✅ altura mínima
          marginTop: { md: "-12rem" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            marginTop: { md: "3rem", xs: "-5rem" },
            paddingTop: { md: "2rem", xs: "7rem" },
            color: "#FFF",
          }}
        >
          Testimonios de nuestros clientes
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // ✅ permite que se acomoden en filas
            justifyContent: { md: "center", xs: "center" }, // ✅ centra horizontalmente
            gap: { md: "3.5rem", xs: "2.5rem" }, // ✅ separación entre videos
            width: "100%",
            padding: { md: "2rem", xs: "2rem" },
            paddingBottom: { md: "5rem", xs: "5rem" },
            bgcolor: "primary.dark",
            margin: { xs: " auto", md: "0 auto" },
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
            videoUrl="https://res.cloudinary.com/diwwjzmsh/video/upload/v1752958331/MOMPOX_FINAL_1_zz6cl1.mp4"
            videoTitle="Familia en Caucasia"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1752960034/Screenshot_from_2025-07-19_16-20-14_tbewbu.png"
          />

          <TestimonialSection
            videoUrl="https://res.cloudinary.com/diwwjzmsh/video/upload/v1752960666/DON_ELVAR_p6cosw.mp4"
            videoTitle="Familia en Caucasia"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1752960789/Screenshot_from_2025-07-19_16-32-33_khltq3.png"
          />
          <TestimonialSection
            videoUrl="https://res.cloudinary.com/diwwjzmsh/video/upload/v1752958119/BOMBA_NECHI_1_ybarwx.mp4"
            videoTitle="Familia en Caucasia"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1752959529/Screenshot_from_2025-07-19_16-11-51_gin3up.png"
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
