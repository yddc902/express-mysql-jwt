const { Auth } = require("../models");
const { responseHandler } = require("../utils");

exports.signin = async (req, res) => {
  try {
    const user = await Auth.getUserAuth();
    responseHandler.success({
      res,
      result: user,
    });
  } catch (error) {
    responseHandler.error({
      res,
      error,
      message: "Internal Server Error",
    });
  }
};
