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
        model: User,
        attributes: ['team_created']
      }
    ]
  })
    .then(dbPlayerData => {
      let C = dbPlayerData.filter(i => 'C'.includes(i.position)).map(x => x.get({ plain: true }));
      let RW = dbPlayerData.filter(i => 'RW'.includes(i.position)).map(x => x.get({ plain: true }));
      let LW = dbPlayerData.filter(i => 'LW'.includes(i.position)).map(x => x.get({ plain: true }));
      let D = dbPlayerData.filter(i => 'D'.includes(i.position)).map(x => x.get({ plain: true }));
      let G = dbPlayerData.filter(i => 'G'.includes(i.position)).map(x => x.get({ plain: true }));
      
      res.render('profile', {
        C,
        RW,
        LW,
        D,
        G,
        loggedIn: req.session.loggedIn,
        team_created
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
