// src/components/ResponsiveAppBar.jsx

"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import TestimonialSection from "../home-section/TestimonialSection";

const pages = [
  { name: "Inicio", path: "/" },
  // { name: "Cotizar", path: "/quote" },
  // { name: "Servicios", path: "/services" },
  { name: "Testimonios", path: "/#testimonial" },
  { name: "Nosotros", path: "/#aboutUs" },
  { name: "Instalaciones", path: "/#installations" },
  // { name: "Iniciar sesión", path: "/login" },
];

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logoPngPath = "/logos/logo-co.solar.png"; // ¡RUTA DE TU LOGO!

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ zIndex: (theme) => theme.zIndex.appBar }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 64, sm: 80 },
          alignItems: "center",
          zIndex: "1",
        }}
      >
        {/* --- Logo y Título para pantallas GRANDES (sm y mayores) --- */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            passHref
            style={{
              display: "flex",
              alignItems: "center",
              height: "3.5rem", // altura razonable
            }}
          >
            <Box
              component="img"
              src={logoPngPath}
              alt="Co.Solar Logo"
              sx={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }} />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
            justifyContent: "space-between", // <- Mantiene el menú a la izquierda y el logo a la derecha
          }}
        >
          <IconButton
            size="large"
            aria-label="open navigation menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Link
                  href={page.path}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: "100%",
                  }}
                >
                  <Typography textAlign="center">
                    <b>{page.name}</b>
                  </Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>

          <Link
            href="/"
            passHref
            style={{
              textDecoration: "none",
              display: "flex", // Hacemos el Link un contenedor flex
              alignItems: "center", // Centra la imagen verticalmente dentro del Link
              justifyContent: "center", // Centra la imagen horizontalmente dentro del Link
              height: "6.5vh", // Define un tamaño fijo para el Link en móviles (ej. 6.5vh)
              width: "auto", // Deja que el ancho se ajuste proporcionalmente
              // border: '1px solid green', // Para depurar el tamaño del Link
            }}
          >
            <Box
              component="img"
              src={logoPngPath}
              alt="Co.Solar Logo"
              sx={{
                maxHeight: "100%",
                maxWidth: "100%",
                height: "auto",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Link>
          {/*
          
          */}
        </Box>

        {/* --- Botones de navegación para pantallas GRANDES (sm y mayores) --- */}
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                "&:hover": { textDecoration: "underLine" },
              }}
              component={Link}
              href={page.path}
            >
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
