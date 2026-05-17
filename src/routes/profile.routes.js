const express = require("express");

const profileController = require("../controllers/profile.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get(
  "/",
  authMiddleware("CUSTOMER", "ADMIN"),
  profileController.getProfile
);

router.post(
  "/address",
  authMiddleware("CUSTOMER", "ADMIN"),
  profileController.addAddress
);

module.exports = router;
