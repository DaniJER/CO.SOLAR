// src/components/Footer.jsx

"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Link,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from '@mui/icons-material/GitHub'; // No usada en tu ejemplo, la comento

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.dark", // T
        color: "white", //
        p: 6,
        mt: 8,
        borderTop: "1px solid",
        borderColor: "primary.light",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 8 }}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Sección de Logo/Marca y Derechos de Autor */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" gutterBottom>
              CoSolar
            </Typography>

            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
              © {new Date().getFullYear()} CoSolar. Todos los derechos
              reservados.
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.7)", mt: 1 }}
            >
              Transformando el futuro energético de Colombia.
            </Typography>
          </Box>

          {/* Sección de Enlaces de Navegación */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" gutterBottom>
              Enlaces Rápidos
            </Typography>
            <Stack direction="column" spacing={1}>
              {/* Los Link ya tenían 'color="inherit"' que funciona con el 'color: "white"' del Box padre */}
              <Link
                href="/"
                color="inherit"
                underline="hover"
                sx={{ color: "white" }}
              >
                Inicio
              </Link>
              <Link
                href="/services"
                color="inherit"
                underline="hover"
                sx={{ color: "white" }}
              >
                Servicios
              </Link>
              <Link
                href="/about"
                color="inherit"
                underline="hover"
                sx={{ color: "white" }}
              >
                Nosotros
              </Link>
              <Link
                href="/contact"
                color="inherit"
                underline="hover"
                sx={{ color: "white" }}
              >
                Contacto
              </Link>
              <Link
                href="/quote"
                color="inherit"
                underline="hover"
                sx={{ color: "white" }}
              >
                Cotiza Aquí
              </Link>
            </Stack>
          </Box>

          {/* Sección de Redes Sociales */}
          <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
            <Typography variant="h6" gutterBottom>
              Síguenos
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              justifyContent={{ xs: "center", md: "flex-end" }}
            >
              <IconButton
                aria-label="Facebook"
                color="inherit" // 'inherit' tomará el 'white' del padre
                href="https://facebook.com/Cosolar"
                target="_blank"
                rel="noopener"
                sx={{ "&:hover": { color: "primary.light" } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                color="inherit"
                href="https://twitter.com/tumarca"
                target="_blank"
                rel="noopener"
                sx={{ "&:hover": { color: "primary.light" } }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                color="inherit"
                href="https://instagram.com/co.solarsas"
                target="_blank"
                rel="noopener"
                sx={{ "&:hover": { color: "primary.light" } }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                color="inherit"
                href="https://linkedin.com/company/tumarca"
                target="_blank"
                rel="noopener"
                sx={{ "&:hover": { color: "primary.light" } }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box>
        </Stack>

        {/* Línea divisoria */}
        <Divider sx={{ my: 4, bgcolor: "rgba(255,255,255,0.3)" }} />

        {/* Información Adicional o Legal */}
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography
            variant="body2"
            sx={{ color: "rgba(255, 255, 255, 0.77)" }}
          >
            📍 Sede Principal: Cra. 20 No. 6A-05 La Troncal, Caucasia,
            Antioquia, Colombia.
          </Typography>

          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            📞 Contacto: +57 3XX XXX XXXX | 📧 administración@cosolar.com
          </Typography>
        </Box>
        <br></br>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography
            variant="body2"
            sx={{ color: "rgba(255, 255, 255, 0.45)" }}
          >
            Equipo Desarrollo CO.SOLAR
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
