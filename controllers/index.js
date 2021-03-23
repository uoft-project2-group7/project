const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require('./home-routes.js');
const playerRoutes = require('./player-routes.js')
// const displayRoute= require("./display")

// router.use("/", displayRoute)
router.use('/', homeRoutes);
router.use("/api", apiRoutes);
router.use('/', playerRoutes);

router.use((req, res) => {
  res.status(404).end();
});



module.exports = router;
