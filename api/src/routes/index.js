const router = require("express").Router(),
  AdminsRoutes = require("./AdminsRoutes"),
  AnimalsRoutes = require("./AnimalsRoutes");

  router.use('/admins', AdminsRoutes)
  router.use('/animals', AnimalsRoutes)

  module.exports= router;