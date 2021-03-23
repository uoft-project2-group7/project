const router = require('express').Router();
const sequelize = require('../config/connection');
const { Player, Team, TeamPlayers, User } = require('../models');
// const withAuth = require('../utils/auth');

// get team cards for homepage

router.get('/', (req, res) => {
  console.log('======================');
  Player.findAll({
    attributes: [
      'id',
      'full_name',
      'position'
    ],
    include: [
      {
        model: Player,
        attributes: ['id', 'full_name', 'position', 'user_id']
      }
    ]
  })
    .then(dbTeamData => {
      const teams = dbTeamData.map(teams => teams.get({ plain: true }));
      
      res.render('profile-page', {
        teams,
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
      id: req.params.id
    },
    attributes: [
      'id',
      'full_name',
      'position'
    ],
    include: [
      {
        model: Player,
        attributes: ['id', 'full_name', 'position', 'user_id']
      }
    ]
  })
    .then(dbTeamData => {
      if (!dbTeamData) {
        res.status(404).json({ message: 'No player found with this id' });
        return;
      }

      // const post = dbPostData.get({ plain: true });
      const card = dbPostData.get;

      res.render('player-card', {
        card,
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
