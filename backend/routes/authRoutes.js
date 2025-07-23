import express from "express";
import authController from "../controllers/authController.js"; // ✅ con extensión .js

const router = express.Router();
router.post("/login", authController.login);
// router.post("registerUser", authController.register);
// router.post("/registerProject", authController.login);

export default router;
