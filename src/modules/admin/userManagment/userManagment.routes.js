const express = require("express");

const userManagmentController = require("./userManagment.controller");
const authMiddleware = require("../../../middleware/auth.middleware");

const router = express.Router();

router.get(
  "/all-users",
  authMiddleware("ADMIN"),
  userManagmentController.getAllUsers,
);

router.get(
  "/user/:id",
  authMiddleware("ADMIN"),
  userManagmentController.getUserById,
);

router.delete(
  "/user/:id",
  authMiddleware("ADMIN"),
  userManagmentController.deleteUserById,
);

module.exports = router;
