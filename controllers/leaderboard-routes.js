const router = require("express").Router();
const { Player, Team, TeamPlayers, User } = require("../models");

router.get("/", (req, res) => {
  res.render("leaderboard", {
    loggedIn: true, // change to verify is user is logged in
  });
});

router.get("/", (req, res) => {
    Team.findAll({
      attributes: [
        "id",
        "team_name",
        "center",
        "right_wing",
        "left_wing",
        "dman1",
        "dman2",
        "goalie",
      ],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Player,
          through: TeamPlayers,
          attributes: ["nhl_id", "full_name", "position"],
        },
      ],
    })
    .then((dbPostData) => {
        // serialize data before passing to template
        const teamScores = dbPostData.map((scores) => scores.get({ plain: true }));
        res.render("leaderboard", { teamScores, loggedIn: true });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;
