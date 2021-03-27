const updateStats = async () => {
  await fetch('/api/players')
  .then(async function(response) {
    await response.json().then(async function(data) {
      //console.log(data);
      for (i = 0; i < data.length; i++) {
        if (data[i].position === "G") { //check if the player is a goalie
          let nhlId = data[i].nhl_id;
          let apiUrl = 'https://statsapi.web.nhl.com/api/v1/people/'+ nhlId +'/stats?stats=statsSingleSeason&season=20202021';
          await fetch(apiUrl).then(async function(response) {
            await response.json().then(async function(statData) {
              let wins = statData.stats[0].splits[0].stat.wins; //get wins for stat1 column
              let saves = statData.stats[0].splits[0].stat.saves; //get saves for stat2 column
              let goalsAgainst = statData.stats[0].splits[0].stat.goalsAgainst; //goals against for stat3
              let shutouts = statData.stats[0].splits[0].stat.shutouts; // shutouts for stat4
              console.log(`got stats for ${data[i].full_name}`);
              console.log(`wins: ${wins}`);
              let updateurl = `/api/players/${nhlId}`;

              //sends the put request to the correct spot but is returning 404 error
              const response = await fetch((updateurl), {
                method: 'put',
                body: JSON.stringify({
                  stat1: wins,
                  stat2: saves,
                  stat3: goalsAgainst,
                  stat4: shutouts
                }),
                headers: { 'Content-Type': 'application/json' }
              });

              if (response.ok) {
                //document.location.reload();
                console.log(`${nhlId} updated`)                
              } else {
                alert('Player not updated' + response.statusText);
              }
            })
          })
        }
      }
    })  
  })
}

updateStats();
