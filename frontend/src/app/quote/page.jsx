"use client";
import "@/components/forms/FormQuote";
import Typography from "@mui/material/Typography";
import Form from "@/components/forms/FormQuote";

const Quote = () => {
  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          mb: 1,
          color: "#000",
          fontSize: "2.5rem",
          textAlign: "center",
          paddingTop: "1.5rem",
        }}
      >
        Cotiza con nosotros tu proyecto
      </Typography>
      <Form />
    </>
  );
};
export default Quote;
