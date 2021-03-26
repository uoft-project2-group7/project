
var getNhlSchedule = function() {
  const apiUrl = "https://statsapi.web.nhl.com/api/v1/schedule";
  fetch(apiUrl).then(function(response){
  response.json().then(function(data) {
    let totalgames = data.dates[0].games[2].teams;
    let awayteam = totalgames.away.team.name; 
    let hometeam = totalgames.home.team.name;
    let scoreaway = totalgames.away.score;
    let scorehome = totalgames.home.score;

    console.log(totalgames);
    console.log(awayteam);
    console.log(hometeam);
    console.log(scoreaway);
    console.log(scorehome);
    document.getElementById('future1').innerHTML = awayteam;
  }) 

  .catch((err) => {
    console.log(err);
  })
    
  });
  
  console.log("outside");
}
getNhlSchedule();