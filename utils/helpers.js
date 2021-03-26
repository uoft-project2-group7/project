const fetch = require('node-fetch');
<<<<<<< HEAD
=======

>>>>>>> c581775d8a054356006d391383927c5be240daa2
module.exports = { 
  playerStats: playerdata => {
    let apiUrl = 'https://statsapi.web.nhl.com/api/v1/people/'+ playerdata +'/stats?stats=statsSingleSeason&season=20202021';
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        //console.log(data.stats[0].splits[0].stat);
<<<<<<< HEAD
        let goals = data.stats[0].splits[0].stat.goals;
        let assists = data.stats[0].splits[0].stat.assists;
        let stats = `G: ${goals} A: ${assists}`;
        console.log(stats);
        return stats;
      })
    }) 
  }
}
=======

        let goals = data.stats[0].splits[0].stat.goals;
        let assists = data.stats[0].splits[0].stat.assists;
        let stats = `G: ${goals} A: ${assists}`;
        
        console.log(stats);
        return `this text is working`;
      })
    }) 
  }
  
}
>>>>>>> c581775d8a054356006d391383927c5be240daa2
