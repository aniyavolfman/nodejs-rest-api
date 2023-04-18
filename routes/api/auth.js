const express = require("express");
const { schemas } = require("../../models/users");
const { validateBody } = require("../../middlewares/index");
const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  ctrl.register
);

router.post(
  "/users/login",
  validateBody(schemas.loginSchema),
  ctrl.login
);

module.exports = router;
