const express = require("express");

const router = express.Router();

const authRouter = require("../modules/auth/auth.routes");
const userManagementRouter = require("../modules/admin/userManagment/userManagment.routes");
const profileRouter = require("../modules/user/profile/profile.route");

const moduleRoutes = [
  {
    path: "/auth",
    route: authRouter,
  },

  {
    path: "/admin",
    route: userManagementRouter,
  },

  {
    path: "/user",
    route: profileRouter,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
