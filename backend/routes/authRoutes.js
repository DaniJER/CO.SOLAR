const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.login);
// router.post("registerUser", authController.register);
// router.post("/registerProject", authController.login);

module.exports = router;
