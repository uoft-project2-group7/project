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
         let teamStats = stats.stats.splits.stat;

        console.log(teamStats);
      })

      // let teamsId = teams.id;


      let homeTeamEl = document.createElement("li");
      homeTeamEl.innerHTML = awayTeam + " " + scoreAway + "  " + "@" + "  " + scoreHome + "  " + homeTeam;
      let gamesTonight = document.querySelector('#game-card');
      gamesTonight.appendChild(homeTeamEl);








    }




  })

  .catch((err) => {
    console.log(err);
  })

 



}



getNhlteams();