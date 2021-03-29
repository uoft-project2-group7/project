//  THIS FILE IS FOR FUTURE UPGRADES TO THE SIDE BAR TODAY'S GAMES

// const { format } = require("sequelize/types/lib/utils");

var getNhlteams = function () {
const apiUrl = "https://statsapi.web.nhl.com/api/v1/teams/";
fetch(apiUrl).then(function (response) {
    return response.json()
  }).then(function (data) {
    console.log(data)
 
    var i;
    for (i = 0; i < data.teams.length; i++) {

      let teamsName = data.teams[i].link;
      let teamsId =data.teams[i].id;
      console.log(teamsName);
      console.log(teamsId);
 
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/${teamsId}/stats`).then(function (response) {
        return response.json()
      }).then(function (stats) {
         let teamStats = stats.stats[0].splits[0].stat;
         teamWins = teamStats.wins;
         teamLosses = teamStats.losses;
         teamPoints = teamStats.pts;
         teamGaAgainst = teamStats.goalsPerGame;
         teamGaFor = teamStats.goalsPerGame;

        console.log(teamGaFor);
      })

      // let teamsId = teams.id;


      // let homeTeamEl = document.createElement("li");
      // homeTeamEl.innerHTML = awayTeam + " " + scoreAway + "  " + "@" + "  " + scoreHome + "  " + homeTeam;
      // let gamesTonight = document.querySelector('#game-card');
      // gamesTonight.appendChild(homeTeamEl);
    }

  })

  .catch((err) => {
    console.log(err);
  })

}

const now = new Date();
const date1 = new Intl.DateTimeFormat('en-US',{ dateStyle: 'full'}).format();
console.log(date1);

let todayDate = document.getElementById('game-card');
todayDate.innerText = date1;


getNhlteams();