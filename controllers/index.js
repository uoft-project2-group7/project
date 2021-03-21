const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
const homeRoutes = require('./home-routes.js');

router.use((req, res) => {
  res.status(404).end();
});

router.use('/', homeRoutes);

module.exports = router;
