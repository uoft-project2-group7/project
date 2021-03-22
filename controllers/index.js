const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require('./home-routes.js');
const playerRoutes = require('./player-routes.js');
const teamRoutes = require('./team-routes.js');
const goalieRoutes = require('./goalie-routes.js');
// const displayRoute= require("./display")

// router.use("/", displayRoute)
router.use('/', goalieRoutes);
router.use('/', teamRoutes);
router.use('/', playerRoutes);
router.use('/', homeRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});



module.exports = router;
