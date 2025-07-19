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
            videoUrl="https://res.cloudinary.com/diwwjzmsh/video/upload/v1750863561/CO.SOLAR_CASA_DETRAS_DEL_EXITO_feo4vp.mp4"
            videoTitle="Familia en Caucasia"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1750976061/portrait-family_cfjvt1.png"
          />
          <TestimonialSection
            videoUrl="https://res.cloudinary.com/diwwjzmsh/video/upload/v1750863561/CO.SOLAR_CASA_DETRAS_DEL_EXITO_feo4vp.mp4"
            videoTitle="Familia en Caucasia"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1750976061/portrait-family_cfjvt1.png"
          />
          <TestimonialSection
            videoUrl="https://res.cloudinary.com/diwwjzmsh/video/upload/v1750863561/CO.SOLAR_CASA_DETRAS_DEL_EXITO_feo4vp.mp4"
            videoTitle="Familia en Caucasia"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1750976061/portrait-family_cfjvt1.png"
          />
          <TestimonialSection
            videoUrl="https://res.cloudinary.com/diwwjzmsh/video/upload/v1750863561/CO.SOLAR_CASA_DETRAS_DEL_EXITO_feo4vp.mp4"
            videoTitle="Familia en Caucasia"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1750976061/portrait-family_cfjvt1.png"
          />
          <TestimonialSection
            videoUrl="https://res.cloudinary.com/diwwjzmsh/video/upload/v1750863561/CO.SOLAR_CASA_DETRAS_DEL_EXITO_feo4vp.mp4"
            videoTitle="Familia en Caucasia"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1750976061/portrait-family_cfjvt1.png"
          />
          <TestimonialSection
            videoUrl="https://res.cloudinary.com/diwwjzmsh/video/upload/v1750863561/CO.SOLAR_CASA_DETRAS_DEL_EXITO_feo4vp.mp4"
            videoTitle="Familia en Caucasia"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1750976061/portrait-family_cfjvt1.png"
          />
          <TestimonialSection
            videoUrl="https://res.cloudinary.com/diwwjzmsh/video/upload/v1750863561/CO.SOLAR_CASA_DETRAS_DEL_EXITO_feo4vp.mp4"
            videoTitle="Familia en Caucasia"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1750976061/portrait-family_cfjvt1.png"
          />
          <TestimonialSection
            videoUrl="https://res.cloudinary.com/diwwjzmsh/video/upload/v1750863561/CO.SOLAR_CASA_DETRAS_DEL_EXITO_feo4vp.mp4"
            videoTitle="Familia en Caucasia"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1750976061/portrait-family_cfjvt1.png"
          />
          <TestimonialSection
            videoUrl="https://res.cloudinary.com/diwwjzmsh/video/upload/v1750863561/CO.SOLAR_CASA_DETRAS_DEL_EXITO_feo4vp.mp4"
            videoTitle="Familia en Caucasia"
            poster="https://res.cloudinary.com/diwwjzmsh/image/upload/v1750976061/portrait-family_cfjvt1.png"
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
