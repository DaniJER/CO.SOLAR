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
      fontStyle: "normal",
      fontFamily: "kepler-std",
      fontSize: "1.5rem",
      fontWeight: "normal",
    },
    p: {
      fontStyle: "normal",
      fontSize: { xs: "0.9rem", sm: "1.1rem", md: "10rem" },
    },
  },
  // ... otras variaciones de tipografía
  // components: { ... para sobrescribir estilos de componentes específicos }
});

export default theme;
