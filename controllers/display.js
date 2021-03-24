const router = require("express").Router()
router.get("/", function (req, res) {
  res.render("home")
});

router.get("/leaderboard", function(req, res) {
  res.render("leaderboard")
});

router.get("/profile", function(req, res) {
  res.render("profile")
});

router.get("/login", function(req, res) {
  res.render("login")
});



module.exports = router
