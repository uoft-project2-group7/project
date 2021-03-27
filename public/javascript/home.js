const doFirst = async () => {
    return await fetch('/api/teams').then(function (response) {
        response.json().then(function (team) {
            for (let i = 0; i < team.length; i++) {
                const values = async () => {

                    await fetch('/api/players').then(function (response) {
                        response.json().then(function (players) {
                            // let totalGoals = [];
                            // let totalAssists = [];
                            const getPoints = async (nhlId) => {
                                let apiUrl = 'https://statsapi.web.nhl.com/api/v1/people/' + nhlId + '/stats?stats=statsSingleSeason&season=20202021';
                                const getData = async () => {
                                    await fetch(apiUrl).then(function (response) {
                                        response.json().then(function (data) {
                                            let currentGoals = Number(document.getElementsByClassName('stats-goals')[i].innerHTML);
                                            let currentAssists = Number(document.getElementsByClassName('stats-assists')[i].innerHTML);
                                            currentGoals += data.stats[0].splits[0].stat.goals;
                                            currentAssists += data.stats[0].splits[0].stat.assists;
                                            document.getElementsByClassName('stats-goals')[i].innerHTML = currentGoals;
                                            document.getElementsByClassName('stats-assists')[i].innerHTML = currentAssists;
                                        })
                                    })
                                }
                                getData();
                            }

                            let cPoints = players.find(obj => { return obj.id === team[i].center });
                            getPoints(cPoints.nhl_id);
                            let rwPoints = players.find(obj => { return obj.id === team[i].right_wing });
                            getPoints(rwPoints.nhl_id);
                            let lwPoints = players.find(obj => { return obj.id === team[i].left_wing });
                            getPoints(lwPoints.nhl_id);
                            let d1Points = players.find(obj => { return obj.id === team[i].dman1 });
                            getPoints(d1Points.nhl_id);
                            let d2Points = players.find(obj => { return obj.id === team[i].dman2 });
                            getPoints(d2Points.nhl_id);

                            // console.log(totalGoals);
                            // console.log(totalAssists);
                            // return [totalGoals, totalAssists];
                        })
                    })
                }
            }
        })
    })
   
}

doFirst();




