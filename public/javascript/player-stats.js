const playerStats = playerdata => {
  let apiUrl = 'https://statsapi.web.nhl.com/api/v1/people/'+ playerdata +'/stats?stats=statsSingleSeason&season=20202021';
  const getStats = await fetch(apiUrl);
  const statData = await getStats.json();
      //console.log(statData);

      let goals = statData.stats[0].splits[0].stat.goals;
      let assists = statData.stats[0].splits[0].stat.assists;
      let stats = `G: ${goals} A: ${assists}`;
      
      console.log(stats);
      return stats;
  } //catch (error) {
    //console.log(error);
  //}      
