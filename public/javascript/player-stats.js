const updateStats = async () => {
  await fetch('/api/players')
  .then(function(response) {
    response.json().then(async function(data) {
      console.log(data);
      for (i = 0; i < data.length; i++) {
        if (data[i].position === "G") {
          let nhlId = data[i].nhl_id;
          let apiUrl = 'https://statsapi.web.nhl.com/api/v1/people/'+ nhlId +'/stats?stats=statsSingleSeason&season=20202021';
          await fetch(apiUrl).then(function(response) {
            response.json().then(async function(statData) {
              let stat1 = statData.stats[0].splits[0].stat.wins;
              let stat2 = statData.stats[0].splits[0].stat.saves;
              let stat3 = statData.stats[0].splits[0].stat.goalsAgainst;
              let stat4 = statData.stats[0].splits[0].stat.shutouts;
              console.log(stat1);

              const response = await fetch(`/api/players/${nhlId}`, {
                method: 'PUT',
                body: JSON.stringify({
                  stat1,
                  stat2,
                  stat3,
                  stat4
                }),
                headers: { 'Content-Type': 'application/json' }
              });

              if (response.ok) {
                document.location.reload();                
              } else {
                alert(response.statusText);
              }
            })
          })
        }
      }
    })  
  })
}

updateStats();
