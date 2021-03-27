const router = require("express").Router();
const { User, Team, Player, TeamPlayers } = require("../../models");

// GET route to find all teams

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
      "team_score"
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Player,
        //through: TeamPlayers,
        attributes: ["nhl_id", "full_name", "position"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET route to find single team

router.get("/:id", (req, res) => {
  Team.findOne({
    where: {
      // equal to SELECT * FROM users WHERE id = 1
      id: req.params.id,
    },
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
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No team found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Post route to create a team
router.post("/", (req, res) => {
  Team.create({
    team_name: req.body.team_name,
    center: req.body.center,
    right_wing: req.body.right_wing,
    left_wing: req.body.left_wing,
    dman1: req.body.dman1,
    dman2: req.body.dman2,
    goalie: req.body.goalie,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => {        
      let newTeamPlayerData = [
        {
          team_id: dbPostData.id,
          player_id: dbPostData.center
        },
        {
          team_id: dbPostData.id,
          player_id: dbPostData.right_wing
        },
        {
          team_id: dbPostData.id,
          player_id: dbPostData.left_wing
        },
        {
          team_id: dbPostData.id,
          player_id: dbPostData.dman1
        },
        {
          team_id: dbPostData.id,
          player_id: dbPostData.dman2
        },
        {
          team_id: dbPostData.id,
          player_id: dbPostData.goalie
        }
      ];
      TeamPlayers.bulkCreate(newTeamPlayerData);
      res.json(dbPostData)})
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Team.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No team found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
