"use client";
import "@/style-components/form.css";
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import NavBar from "../navbar/NavBar";
import Link from "next/link";

const LoginForm = () => {
  const mainImg = "/img/mainBackground.jpg";
  return (
    <>
      <Box
        sx={{
          minHeight: { md: "100vh", xs: "100vh" },
        }}
      >
        <Box
          sx={{
            maxWidth: 400,
            mx: "auto",
            p: 3,
            mt: 4,
            border: "1px solid #eee",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Iniciar sesión
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Nombre de usuario"
              id="userInput"
              placeholder="Usuario de ejemplo"
              variant="outlined" // 'outlined', 'filled', 'standard'
              margin="normal" // Agrega margen superior e inferior
            />

            <TextField
              fullWidth
              label="Contraseña"
              id="lastNameInput"
              placeholder="Escribe tu contraseña"
              variant="outlined"
              margin="normal"
            />
            <Link href="/" style={{ color: "ActiveBorder" }}>
              <Typography>Olvidé mi contraseña</Typography>
            </Link>
            <br></br>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "1.9rem",
              }}
            >
              <Button variant="contained" color="primary">
                Iniciar sesión
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
