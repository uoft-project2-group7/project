const router = require('express').Router();
const sequelize = require('../config/connection');
const { Player, Team, TeamPlayers, User } = require('../models');


// get team cards for homepage

router.get('/', (req, res) => {
  console.log('======================');
  Player.findAll({
    attributes: [
      'nhl_id',
      'full_name',
      'position'
    ],
    include: [
      {
        model: Player,
        attributes: ['nhl_id', 'full_name', 'position', 'user_id']
      }
    ]
    
  })
    .then(dbPlayerData => {
      const players = dbPlayerData.map(players => players.get({ plain: true }));
      
      res.render('player-card', {
        players,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get six random teams
router.get('/player/:id', (req, res) => {
  Post.findOne({
    where: {
      nhl_id: req.params.id
    },
    attributes: [
      'nhl_id',
      'full_name',
      'position'
    ],
    include: [
      {
        model: Player,
        attributes: ['nhl_id', 'full_name', 'position', 'user_id']
      }
    ]
  })
    .then(dbPlayerData => {
      if (!dbPlayerData) {
        res.status(404).json({ message: 'No player found with this id' });
        return;
      }

      // const post = dbPostData.get({ plain: true });
      const player = dbPostData.get;

      res.render('player-card', {
        player,
        // loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
