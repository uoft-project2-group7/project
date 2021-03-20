const router = require("express").Router()
router.get("/", function (req, res) {
  res.render("home")
});

router.get("/leaderboard", function(req, res) {
  res.render("leaderboard")
});

router.get("/profile-page", function(req, res) {
  res.render("profile-page")
});

module.exports = router
