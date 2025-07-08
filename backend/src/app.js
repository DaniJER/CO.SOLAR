const express = require("express");
const cors = require("cors");
const authRoutes = require("../routes/authRoutes");

const app = express();

// Middlewares
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Rutas
app.use("/api", authRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
