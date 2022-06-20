const dotenv = require("dotenv/config");

exports.ENV = {
  PORT: process.env.PORT ? +process.env.PORT : 3000,
  DB_HOST: process.env.DB_HOST ? process.env.DB_HOST : "localhost",
  DB_PORT: process.env.DB_PORT ? +process.env.DB_PORT : 3306,
  DB_USER: process.env.DB_USER ? process.env.DB_USER : "root",
  DB_PASSWORD: process.env.DB_PASSWORD ? process.env.DB_PASSWORD : "",
  DB_NAME: process.env.DB_NAME ? process.env.DB_NAME : "",
};

exports.responseHandler = {
  success: ({ res, code, message, result }) => {
    res.status(code ?? 200).send({
      status: "success",
      message,
      result,
    });
  },
  error: ({ res, code, message, error }) => {
    res.status(code ?? 500).send({
      status: "success",
      message,
      error,
    });
  },
};
