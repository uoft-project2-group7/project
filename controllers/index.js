const router = require("express").Router();

const apiRoutes = require("./api");
const displayRoute= require("./display")

router.use("/", displayRoute)
router.use("/api", apiRoutes);

router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router;
