const { Player } = require('../models');

const playerData = [
  {
    nhl_id: 8478402,
    full_name: 'Connor McDavid',
    position: 'C'    
  },
  {
    nhl_id: 8477934,
    full_name: 'Leon Draisaitl',
    position: 'C'    
  },
  {
    nhl_id: 8476460,
    full_name: 'Mark Scheifele',
    position: 'C'    
  },
  {
    nhl_id: 8479318,
    full_name: 'Auston Matthews',
    position: 'C'    
  },
  {
    nhl_id: 8471685,
    full_name: 'Anze Kopitar',
    position: 'C'    
  },
  {
    nhl_id: 8474141,
    full_name: 'Patrick Kane',
    position: 'RW'    
  },
  {
    nhl_id: 8478483,
    full_name: 'Mitch Marner',
    position: 'RW'    
  },
  {
    nhl_id: 8475913,
    full_name: 'Mark Stone',
    position: 'RW'    
  },
  {
    nhl_id: 8478420,
    full_name: 'Mikko Rantanen',
    position: 'RW'    
  },
  {
    nhl_id: 8478444,
    full_name: 'Brock Boeser',
    position: 'RW'    
  },
  {
    nhl_id: 8476456,
    full_name: 'Jonathan Huberdeau',
    position: 'LW'    
  },
  {
    nhl_id: 8473419,
    full_name: 'Brad Marchand',
    position: 'LW'    
  },
  {
    nhl_id: 8477940,
    full_name: 'Nikolaj Ehlers',
    position: 'LW'    
  },
  {
    nhl_id: 8479337,
    full_name: 'Alex DeBrincat',
    position: 'LW'    
  },
  {
    nhl_id: 8474157,
    full_name: 'Max Pacioretty',
    position: 'LW'    
  },
  {
    nhl_id: 8475197,
    full_name: 'Tyson Barrie',
    position: 'D',    
  },
  {
    nhl_id: 8475167,
    full_name: 'Victor Hedman',
    position: 'D'    
  },
  {
    nhl_id: 8473507,
    full_name: 'Jeff Petry',
    position: 'D'    
  },
  {
    nhl_id: 8474590,
    full_name: 'John Carlson',
    position: 'D'    
  },
  {
    nhl_id: 8480800,
    full_name: 'Quinn Hughes',
    position: 'D'    
  },
  {
    nhl_id: 8474563,
    full_name: 'Drew Doughty',
    position: 'D'    
  },
  {
    nhl_id: 8476853,
    full_name: 'Morgan Reilly',
    position: 'D'    
  },
  {
    nhl_id: 8477498,
    full_name: 'Darnell Nurse',
    position: 'D'    
  },
  {
    nhl_id: 8476462,
    full_name: 'Dougie Hamilton',
    position: 'D'    
  },
  {
    nhl_id: 8477447,
    full_name: 'Shea Theodore',
    position: 'D'    
  },
  {
    nhl_id: 8476883,
    full_name: 'Andrei Vasilevsky',
    position: 'G'    
  },
  {
    nhl_id: 8475831,
    full_name: 'Philipp Grubauer',
    position: 'G'    
  },
  {
    nhl_id: 8470594,
    full_name: 'Marc-Andre Fleury',
    position: 'G'    
  },
  {
    nhl_id: 8473575,
    full_name: 'Semyon Varlamov',
    position: 'G'    
  },
  {
    nhl_id: 8476945,
    full_name: 'Connor Hellebuyck',
    position: 'G'    
  },
];

const seedPlayers = () => Player.bulkCreate(playerData);

module.exports = seedPlayers;