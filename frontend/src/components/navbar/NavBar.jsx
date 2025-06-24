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
  { name: "Nosotros", path: "/aboutUs" },
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
        {/* --- Spacer para empujar los botones a la derecha en pantallas grandes --- */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }} />

        {/* --- Menú de hamburguesa y Logo para pantallas PEQUEÑAS (xs) --- */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
            justifyContent: "space-between", // <- Mantiene el menú a la izquierda y el logo a la derecha
          }}
        >
          {/* Menú hamburguesa a la izquierda */}
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
                  <Typography textAlign="center">{page.name}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>

          {/* Logo a la derecha para móviles */}
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
                maxHeight: "100%", // La imagen no será más alta que el Link
                maxWidth: "100%", // La imagen no será más ancha que el Link
                height: "auto",
                width: "auto",
                objectFit: "contain",
                // display: { xs: "block", sm: "none" }, // Esto lo maneja el Link padre
              }}
            />
          </Link>
          {/*
            El Typography "CoSolar" para móviles estaba en un Box con display: { xs: "block", sm: "none" }
            Si quieres que el texto "CoSolar" aparezca junto al logo en móviles, necesitas
            moverlo dentro del mismo Link con el Box del logo.
            Si no lo necesitas, simplemente no lo incluyas en esta sección del Link.
            Lo he quitado para simplificar el centrado del logo.
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
