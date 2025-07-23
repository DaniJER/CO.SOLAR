// app.js
import express from "express";
import cors from "cors";
import authRoutes from "../routes/authRoutes.js";
import userRoutes from "../routes/users.routes.js";

const app = express();

// Middlewares
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Rutas agrupadas con prefijo /api
app.use("/api", authRoutes);
app.use(userRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
