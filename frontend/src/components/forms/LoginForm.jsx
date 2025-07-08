"use client";
import "@/style-components/form.css";
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation"; // Agregado para redirección

const LoginForm = () => {
  const router = useRouter(); // Hook de redirección

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/login", formData);
      const { token, role } = res.data;

      // Guardar token y rol en localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      // Redirigir según rol
      if (role === "Empleado") {
        router.push("/dashboard/empleado");
      } else if (role === "Cliente") {
        router.push("/dashboard/cliente");
      } else {
        console.warn("Rol desconocido:", role);
      }
    } catch (error) {
      console.error(
        "Error al iniciar sesión",
        error.response?.data || error.message
      );
      alert(error.response?.data?.mensaje || "Error al iniciar sesión");
    }
  };

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
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Correo electrónico"
              name="email"
              id="emailInput"
              placeholder="usuario@ejemplo.com"
              variant="outlined"
              margin="normal"
              value={formData.email}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              name="password"
              id="password"
              placeholder="Escribe tu contraseña"
              variant="outlined"
              margin="normal"
              value={formData.password}
              onChange={handleChange}
            />
            <Link href="/" style={{ color: "ActiveBorder" }}>
              <Typography>Olvidé mi contraseña</Typography>
            </Link>
            <br />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "1.9rem",
              }}
            >
              <Button variant="contained" color="primary" type="submit">
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
