var getNhlSchedule = function () {
  const apiUrl = "https://statsapi.web.nhl.com/api/v1/schedule";
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
        let games = data.dates[0].games;
        var i;
        for (i = 0; i < games.length; i++) {

          let todayGames = data.dates[0];
          let awayTeam = todayGames.games[i].teams.away.team.name;
          let homeTeam = todayGames.games[i].teams.home.team.name;
          let scoreAway = todayGames.games[i].teams.away.score;
          let scoreHome = todayGames.games[i].teams.home.score;

          let homeTeamEl = document.createElement("li");
          homeTeamEl.innerHTML = awayTeam + " " +scoreAway +"  " + "@" + "  " + scoreHome + "    " + homeTeam;
          let gamesTonight = document.querySelector('#game-card');
          gamesTonight.appendChild(homeTeamEl);

        



          console.log(games);
          console.log(todayGames);
          console.log(awayTeam);
          console.log(homeTeam);
          console.log(scoreAway);
          console.log(scoreHome);

        }




      })

      .catch((err) => {
        console.log(err);
      })

  });

  document.createElement("li");

  console.log("outside");
}



getNhlSchedule();