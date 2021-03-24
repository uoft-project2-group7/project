const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require('./home-routes.js');
const profileRoutes = require('./profile-routes.js');
// const displayRoute= require("./display")

// router.use("/", displayRoute)
router.use('/', homeRoutes);
router.use('/profile', profileRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});



module.exports = router;
