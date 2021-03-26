var getNhlSchedule = function () {
  const apiUrl = "https://statsapi.web.nhl.com/api/v1/schedule";
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
        let games = data.dates[0].games;
        var i;
        for (i = 0; i < games.length; i++) {

          let todaygames = data.dates[0];
          let awayteam = todaygames.games[i].teams.away.team.name;
          let hometeam = todaygames.games[i].teams.home.team.name;
          let scoreaway = todaygames.games[i].teams.away.score;
          let scorehome = todaygames.games[i].teams.home.score;

          console.log(games);
          console.log(todaygames);
          console.log(awayteam);
          console.log(hometeam);
          console.log(scoreaway);
          console.log(scorehome);
          document.getElementById('future1').innerHTML = awayteam[i]+ " @ " + hometeam; 
        }
        

      })

      .catch((err) => {
        console.log(err);
      })

  });

  console.log("outside");
}

const displayRepos = function(repos, searchTerm) {

}


getNhlSchedule();