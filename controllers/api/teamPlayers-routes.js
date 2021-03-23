const router = require("express").Router();
const { TeamPlayers } = require("../../models");
// const withAuth = require('../../utils/auth')

router.get("/", (req, res) => {
  TeamPlayers.findAll({})
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  TeamPlayers.create({
    team_id: req.body.team_id,
    player_id: req.body.player_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
