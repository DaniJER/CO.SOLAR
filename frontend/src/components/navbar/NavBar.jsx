// src/components/ResponsiveAppBar.jsx

"use client"; // Esencial para usar hooks de React como useState y useEffect

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
import MenuIcon from "@mui/icons-material/Menu"; // Icono de hamburguesa
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"; // Icono de bombilla para el logo

import Link from "next/link"; // Importa Link de Next.js

// Define tus páginas de navegación
const pages = [
  { name: "Inicio", path: "/" },
  { name: "Cotizar", path: "/quote" }, // Asume que tienes una página /cotizar para tu formulario
  { name: "Servicios", path: "/services" },
  { name: "Testimonios", path: "/cases" },
  { name: "Contacto", path: "/contact" },
];

const NavBar = () => {
  const theme = useTheme();
  // `sm` es el breakpoint para pantallas pequeñas (600px y arriba).
  // `isMobile` será true si la pantalla es menor a 600px.
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent">
      {" "}
      {/* El color de la barra (AppBar) sigue siendo 'primary' */}
      <Toolbar>
        {/* Logo/Título para pantallas grandes */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
          }}
        >
          <LightbulbOutlinedIcon sx={{ mr: 1, color: "black" }} />{" "}
          {/* Icono en negro */}
          <Typography
            variant="h6"
            noWrap
            component={Link} // Usa Link de Next.js
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "black", // <--- ¡Color del logo en negro para pantallas grandes!
              textDecoration: "none",
              "&:hover": {
                color: "#333", // Un negro un poco más oscuro al pasar el ratón
              },
            }}
          >
            Co.Solar
          </Typography>
        </Box>

        {/* Menú de hamburguesa y logo para pantallas pequeñas */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit" // El color del icono de hamburguesa será el de la AppBar
          >
            <MenuIcon />
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
              <MenuItem
                key={page.name}
                onClick={handleCloseNavMenu}
                component={Link} // Usa Link de Next.js
                href={page.path}
              >
                <Typography textAlign="center" sx={{ color: "black" }}>
                  {" "}
                  {/* <--- ¡Color del texto del menú en negro! */}
                  {page.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
          {/* Logo para pantallas pequeñas al lado del menú de hamburguesa */}
          <LightbulbOutlinedIcon
            sx={{ mr: 1, display: { xs: "block", sm: "none" }, color: "black" }}
          />{" "}
          {/* Icono en negro */}
          <Typography
            variant="h6"
            noWrap
            component={Link} // Usa Link de Next.js
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "black", // <--- ¡Color del logo en negro para pantallas pequeñas!
              textDecoration: "none",
              display: { xs: "block", sm: "none" }, // Mostrar solo en XS
              "&:hover": {
                color: "#333", // Un negro un poco más oscuro al pasar el ratón
              },
            }}
          >
            CoSolar
          </Typography>
        </Box>

        {/* Botones de navegación para pantallas grandes */}
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "black", // <--- ¡Color de los botones de navegación en negro!
                display: "block",
                "&:hover": {
                  color: "#333", // Un negro un poco más oscuro al pasar el ratón
                },
              }}
              component={Link} // Usa Link de Next.js
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
