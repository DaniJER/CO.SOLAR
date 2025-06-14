// src/app/providers.jsx
"use client";

import React, { useRef, useEffect } from "react"; // Import useRef and useEffect
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/themes/themes";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import { Box } from "@mui/material";

export function Providers({ children }) {
  const navBarRef = useRef(null); // Create a ref to attach to the NavBar container

  useEffect(() => {
    // This effect runs after the component mounts
    if (navBarRef.current) {
      // Measure the actual height of the NavBar container
      const navHeight = navBarRef.current.offsetHeight;
      // Set a CSS custom property on the root HTML element
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${navHeight}px`
      );
      console.log("NavBar height set to:", navHeight); // For debugging
    }
  }, []); // The empty dependency array ensures this runs only once after initial render

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <nav ref={navBarRef}>
          {" "}
          {/* Attach the ref to the <nav> element */}
          <NavBar />
        </nav>

        {/* The main content area, which will flex-grow */}
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}
