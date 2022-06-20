const { Router } = require("express");
const { authController } = require("../controllers");

const authRouter = Router();

authRouter.get("/signin", authController.signin);
