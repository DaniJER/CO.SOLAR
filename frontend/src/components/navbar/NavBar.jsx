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

const pages = [
  { name: "Inicio", path: "/" },
  { name: "Cotizar", path: "/quote" },
  { name: "Servicios", path: "/services" },
  { name: "Testimonios", path: "/cases" },
  { name: "Contacto", path: "/contact" },
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

  const logoPngPath = "/images/CoSolarLogo.png"; // ¡RUTA DE TU LOGO!

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        {/* --- Logo y Título para pantallas GRANDES (sm y mayores) --- */}
        {/* Aquí el Box ya NO tiene flexGrow: 1. Solo ocupa el espacio de su contenido. */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" }, // Visible solo en pantallas sm y mayores
            alignItems: "center",
          }}
        >
          {/* Logo como PNG y enlace */}
          <Link
            href="/"
            passHref
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={logoPngPath}
              alt="Co.Solar Logo"
              sx={{
                height: "5rem", // Ajusta la altura de tu logo PNG
                width: "6rem", // Asegúrate de que esto mantenga la proporción, o usa width: 'auto'
                // Ya no necesitamos margin: 0 auto aquí.
                marginRight: 1, // Espacio entre el logo y el texto (si lo hay)
              }}
            />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "black",
              textDecoration: "none",
              "&:hover": {
                color: "#333",
              },
            }}
          >
            Co.Solar
          </Typography>
        </Box>

        {/* --- Spacer para empujar los botones a la derecha en pantallas grandes --- */}
        {/* Este Box ocupa el espacio restante */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }} />

        {/* --- Menú de hamburguesa y Logo para pantallas PEQUEÑAS (xs) --- */}
        <Box
          sx={{
            flexGrow: 1, // Mantenemos flexGrow aquí para que el icono de hamburguesa y el logo empujen los elementos (aunque no hay más elementos a la derecha aquí).
            display: { xs: "flex", sm: "none" }, // Visible solo en pantallas xs
            alignItems: "center",
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
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.name}
                onClick={handleCloseNavMenu}
                component={Link}
                href={page.path}
              >
                <Typography textAlign="center" sx={{ color: "black" }}>
                  {page.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>

          {/* Logo como PNG y enlace para pantallas pequeñas */}
          <Link
            href="/"
            passHref
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={logoPngPath}
              alt="Co.Solar Logo"
              sx={{
                height: "3.5rem", // Ajusta la altura de tu logo PNG para pantallas pequeñas
                width: "4.2rem", // Asegúrate de que esto mantenga la proporción, o usa width: 'auto'
                marginRight: 1,
                display: { xs: "block", sm: "none" }, // Mostrar solo en XS
              }}
            />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "black",
              textDecoration: "none",
              display: { xs: "block", sm: "none" }, // Mostrar solo en XS
              "&:hover": { color: "#333" },
            }}
          >
            CoSolar
          </Typography>
        </Box>

        {/* --- Botones de navegación para pantallas GRANDES (sm y mayores) --- */}
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                "&:hover": { color: "#333" },
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
