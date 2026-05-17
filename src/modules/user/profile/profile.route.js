const express = require("express");

const profileController = require("./profile.controller");
const authMiddleware = require("../../../middleware/auth.middleware");

const router = express.Router();

router.get(
  "/profile",
  authMiddleware("CUSTOMER"),
  profileController.getProfileController,
);

router.post(
  "/add-address",
  authMiddleware("CUSTOMER"),
  profileController.addAddressController,
);

module.exports = router;
