import db from "../db.js"; //requerimos el modulo de db

//ejecutamos la función la cual hara la query para buscar al usuario por email
const findUserWithEmail = async (email) => {
  try {
    const result = await db.query(
      `SELECT p.*, r.role_name AS role
   FROM persons p
   JOIN roles r ON p.role_id = r.role_id
   WHERE p.email = $1`,
      [email]
    );
    return result.rows[0];
  } catch (error) {
    console.error(error);
  }
};

// const isEmployee = async (id) => {
//   try {
//     const result = await db.query("select * from employees where id = $1", [
//       id,
//     ]);
//     return result.rows.length > 0;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const isCustomer = async (id) => {
//   try {
//     const result = await db.query(
//       "SELECT * FROM customers WHERE person_id = $1",
//       [id]
//     );
//     return result.rows.length > 0;
//   } catch (error) {
//     console.error(error);
//   }
// };

export default {
  findUserWithEmail,
  // isEmployee,
  // isCustomer,
};
