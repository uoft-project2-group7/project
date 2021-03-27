const router = require("express").Router();
const { Player } = require("../../models");

router.get("/", (req, res) => {
  Player.findAll({})
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Player.findOne({
    where: {
      
      nhl_id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No player found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Player.create({
    nhl_id: req.body.nhl_id,
    full_name: req.body.full_name,
    position: req.body.position,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Player.update(
    {
      stat1: req.body.stat1,
      stat2: req.body.stat2,
      stat3: req.body.stat3,
      stat4: req.body.stat4
    },
    {
      where: {
        nhl_id: req.params.id
      }
    }
  )
  .then(dbPlayerData => {
    if (!dbPlayerData) {
      res.status(404).json({ message: 'No player found with this id' });
      return;
    }
    res.json(dbPlayerData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
