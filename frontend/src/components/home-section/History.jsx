import React from "react";
import { Box, Typography } from "@mui/material";

const History = () => {
  return (
    <>
      <Box
        sx={{
          display: { md: "flex", xs: "block" },
          gap: { md: "9rem" },
          width: "100%",
          height: "100vh",
          /*bgcolor: "fourth.dark",*/
          color: "#000",
          textAlign: { md: "justify", xs: "justify" },
          alignItems: { md: "center" },
          justifyItems: { md: "center" },
          alignContent: { md: "center" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            marginLeft: { md: "2rem" },
            paddingTop: { xs: "3rem" },
            width: {
              md: "40%",
              xs: "100%",
              sm: "100",
            },
          }}
        >
          Impulsando un Futuro Radiante, Panel a Panel
        </Typography>
        <Typography
          variant="h5"
          sx={{
            width: {
              md: "60%",
              xs: "100%",
              sm: "100",
            },
            height: { xs: "40vh" },
            marginRight: "3rem",
            justifyItems: { md: "center" },
            alignContent: { md: "center" },
            paddingTop: { xs: "4rem" },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          laudantium repellendus quia id earum animi ullam numquam, eius non
          voluptatem voluptatibus eveniet
        </Typography>
      </Box>
    </>
  );
};

export default History;
