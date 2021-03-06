const router = require('express').Router();
const sequelize = require('../config/connection');
const { Player, Team, TeamPlayers, User } = require('../models');

// get team cards for homepage

router.get('/', (req, res) => {
  console.log('======================');
  Team.findAll({
    attributes:['team_name', 'center', 'right_wing', 'left_wing', 'dman1', 'dman2', 'goalie'],
    include: [
      {
        model: User,
        //attributes: ['id', 'team_name', 'center', 'user_id']

      },
      {
        model: Player,
        //through: TeamPlayers,
        attributes: ["nhl_id", "full_name", "position"],
      }
    ]
  })
  
    .then(dbTeamData => {
      const teams = dbTeamData.map(teams => teams.get({ plain: true }));
      const G = dbTeamData.filter(i => 'G'.includes(i.position)).map(x => x.get({ plain: true }));
      
      res.render('home', {
        teams,
        loggedIn: req.session.loggedIn,
        G
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



// get six random teams
router.get('/team/:id', (req, res) => {
  Team.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'username'
    ],
    include: [
      {
        model: Team,
        attributes: ['id', 'team_name', 'center', 'user_id']
      }
    ]
  })
    .then(dbTeamData => {
      if (!dbTeamData) {
        res.status(404).json({ message: 'No team found with this id' });
        return;
      }

      // const post = dbPostData.get({ plain: true });
      const card = dbPostData.get;

      res.render('card', {
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

router.put('/player/:id', (req, res) => {
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
})


module.exports = router;
