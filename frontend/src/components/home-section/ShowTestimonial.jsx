import React from "react";
import TestimonialSection from "./TestimonialSection";
import { Typography } from "@mui/material";

const ShowTestimonial = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h1" sx={{ fontSize: "4.5", textAlign: "center" }}>
        Testimonios de nuestros clientes
      </Typography>
      <br />
      <br />
      <TestimonialSection
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quidem deleniti, velit dolorem nulla possimus, earum nihil dolores quis dolore consequuntur in repellat quae esse ratione itaque eaque illo magni"
        name="Pepito Perez"
      />
      <TestimonialSection
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quidem deleniti, velit dolorem nulla possimus, earum nihil dolores quis dolore consequuntur in repellat quae esse ratione itaque eaque illo magni"
        name="Pepito Perez"
      />
      <TestimonialSection
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quidem deleniti, velit dolorem nulla possimus, earum nihil dolores quis dolore consequuntur in repellat quae esse ratione itaque eaque illo magni"
        name="Pepito Perez"
      />
      <TestimonialSection
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quidem deleniti, velit dolorem nulla possimus, earum nihil dolores quis dolore consequuntur in repellat quae esse ratione itaque eaque illo magni"
        name="Pepito Perez"
      />
    </>
  );
};

export default ShowTestimonial;
