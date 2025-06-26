import { createTheme } from "@mui/material/styles";

//TEMAS, COLORES Y TIPOGRAFIAS PARA TODA LA PAGINA WEB
const theme = createTheme({
  palette: {
    primary: {
      main: "#0067B9", //AZUL REY
      light: "#177ed0",
      dark: "#0f5185",
      contrastText: "#fff",
    },
    secondary: {
      main: "#00AADB", // AZUL AGUA MARINA
      light: "#2abde7",
      dark: "#127e9e",
      contrastText: "#fff",
    },
    terceary: {
      main: "#f8d20d", // AMARILLO
      light: "#e8d25e",
      dark: "#b79e1a",
      contrastText: "#fff",
    },
    fourth: {
      main: "#ffab00", // AMARILLO
      light: "ecb953",
      dark: "#b88214",
      contrastText: "#fff",
    },
    // espacio para añadir más colores, tipografía, espaciado, breakpoints, etc.
  },
  typography: {
    fontFamily: "kepler-std, roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      fontFamily: "kepler-std, roboto, Arial, sans-serif",
    },
    h2: {
      fontSize: { md: "2.5rem", xs: "1.7rem" },
      fontWeight: "bold",
      fontFamily: "kepler-std, roboto, Arial, sans-serif",
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      fontFamily: "kepler-std, roboto, Arial, sans-serif",
    },
    h4: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      fontFamily: "kepler-std, roboto, Arial, sans-serif",
    },
    p: {
      fontFamily: "roboto",
      fontStyle: "normal",
      fontSize: { xs: "1.5rem", sm: "1.1rem", md: "1.3rem" },
    },
  },
});

export default theme;
