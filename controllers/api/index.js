const router = require("express").Router();

const userRoutes = require("./user-routes");
const teamRoutes = require("./team-routes");
const playerRoutes = require("./player-routes");
const teamPlayersRoutes = require("./teamPlayers-routes");

router.use("/users", userRoutes);
router.use("/teams", teamRoutes);
router.use("/players", playerRoutes);
router.use("/teamplayers", teamPlayersRoutes);

module.exports = router;
