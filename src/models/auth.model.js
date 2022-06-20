const { query } = require("../configs");

exports.getUserAuth = async (username, password) => {
  try {
    const sql = `SELECT * FROM tbl_users where username=? password=? limit 1;`;
    /**
     * @typedef {Object} User
     * @property {string} username
     * @property {string} password
     */

    /**
     * @type {User[]} result
     */
    const result = await query(sql, [username, password]);

    return result[0];
  } catch (error) {
    throw error;
  }
};
