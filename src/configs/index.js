const mysql2 = require("mysql2/promise");
const { ENV } = require("../utils");

const connection = mysql2.createPool({
  host: ENV.DB_HOST,
  port: ENV.DB_PORT,
  user: ENV.DB_USER,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_NAME,
});

exports.query = async (query, params = []) => {
  try {
    const [rows, extra] = await connection.query(query, params);
    return rows;
  } catch (error) {
    throw error;
  }
};
