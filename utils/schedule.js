var getNhlSchedule = function () {
  const apiUrl = "https://statsapi.web.nhl.com/api/v1/schedule";
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
        let games = data.dates[0].games;
        var i;
        for (i = 0; i < games.length; i++) {

          let todaygames = data.dates[0].games[i].teams;
          let awayteam = todaygames.away.team.name;
          let hometeam = todaygames.home.team.name;
          let scoreaway = todaygames.away.score;
          let scorehome = todaygames.home.score;
          let stats = `G: ${goals} A: ${assists}`;

          console.log(games);
          console.log(todaygames);
          console.log(awayteam);
          console.log(hometeam);
          console.log(scoreaway);
          console.log(scorehome);
          document.getElementById('future1').innerHTML = awayteam;
        }
      })

      .catch((err) => {
        console.log(err);
      })

  });

  console.log("outside");
}

const displayGames = function(repos, searchTerm) {
  
}


getNhlSchedule();