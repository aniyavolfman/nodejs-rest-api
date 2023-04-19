const express = require("express");
const { schemas } = require("../../models/user");
const { validateBody, auth } = require("../../middlewares/index");
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

router.get("/users/current", auth, ctrl.getCurrent);

router.post("/users/logout", auth, ctrl.logout);

module.exports = router;
