const db = require("../db"); //requerimos el modulo de db

//ejecutamos la función la cual hara la query para buscar al usuario por email
const findUserWithEmail = async (email) => {
  try {
    const result = await db.query("select * from users where email = $1", [
      email,
    ]);
    return result.rows[0];
  } catch (error) {
    console.error(error);
  }
};

const isEmployee = async (id) => {
  try {
    const result = await db.query("select * from employees where id = $1", [
      id,
    ]);
    return result.rows.length > 0;
  } catch (error) {
    console.error(error);
  }
};

const isCustomer = async (id) => {
  try {
    const result = await db.query("select * from customers where id = $1", [
      id,
    ]);
    return result.rows.length > 0;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  findUserWithEmail,
  isEmployee,
  isCustomer,
};
