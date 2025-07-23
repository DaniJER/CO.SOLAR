import { Router } from "express";
import pool from "../db.js";

const router = Router();

router.get("/users", (req, res) => {
  res.send("obteniendo usuarios...");
  const { rows } = pool.query("SELECT * from persons");
  console.log(rows);
});
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send("obteniendo usuarios" + id);
});

router.post("/users", (req, res) => {
  res.send("creando usuarios");
});

router.delete("/users/:id", (req, res) => {
  res.send("Eliminando usuario");
});

router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send("actualizando usuario " + id);
});

export default router;
