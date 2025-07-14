const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const personModel = require("../models/personModel");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const person = await personModel.findUserWithEmail(email);
    if (!person)
      return res.status(404).json({ mensaje: "Usuario no encontrado" });

    const matches = await bcrypt.compare(password, person.password);
    if (!matches)
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });

    const { id, role } = person;
    console.log("ROL DESDE DB:", role);

    if (!["customer", "office_employee", "tech_employee"].includes(role)) {
      return res.status(403).json({ mensaje: "Rol inválido" });
    }

    const token = jwt.sign({ id, role }, "secret", {
      expiresIn: "2h",
    });

    res.json({ token, role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error en el servidor" });
  }
};

module.exports = {
  login,
};
