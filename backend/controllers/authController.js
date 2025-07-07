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
      return res.status(404).json({ mensaje: "Contraseña incorrecta" });

    //¿customer or employee?

    let role = null;

    if (await personModel.isEmployee(person.id)) {
      role = "Empleado";
    } else if (await personModel.isCustomer(person.id)) {
      role = "Cliente";
    } else {
      return res
        .status(403)
        .json({ mensaje: "la persona no tiene un rol valido" });
    }

    const token = jwt.sign({ id: person.id, role }, "secret", {
      expiresIn: "2h",
    });

    res.json({ token, rol });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error en el servidor" });
  }
};

module.exports = {
  login,
};
