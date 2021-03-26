
var getNhlSchedule = function() {
  const apiUrl = "https://statsapi.web.nhl.com/api/v1/schedule";
  fetch(apiUrl).then(function(response){
  response.json().then(function(data) {
    let totalgames = data.dates[0].games[2].teams.away;
    
    console.log(totalgames);
  }) 
    
  });
  
  console.log("outside");
}
getNhlSchedule();