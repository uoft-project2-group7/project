let result;
let cards = document.getElementsByClassName('card').length;

let totalGoals;
let totalAssists;

const getPoints = async (nhlId) => {
    return new Promise(resolve => {
        let apiUrl = 'https://statsapi.web.nhl.com/api/v1/people/' + nhlId + '/stats?stats=statsSingleSeason&season=20202021';
        fetch(apiUrl).then((response) => {
            response.json().then((data) => {
                let currentGoals = data.stats[0].splits[0].stat.goals;
                let currentAssists = data.stats[0].splits[0].stat.assists;
                resolve([currentGoals, currentAssists]);
            })
        })
    })
}

const doMath = async (team, i) => {
    return new Promise(async resolve => {
        console.log('check');
        await fetch('/api/players').then((response) => {
            let returnedScore;
            let x = 0;
            let y = 0;
            response.json().then(async (players) => {
                let cPoints = players.find(obj => { return obj.id === team[i].center });
                returnedScore = await getPoints(cPoints.nhl_id);
                x += returnedScore[0];
                y += returnedScore[1];
                let rwPoints = players.find(obj => { return obj.id === team[i].right_wing });
                getPoints(rwPoints.nhl_id);
                returnedScore = await getPoints(rwPoints.nhl_id);
                x += returnedScore[0];
                y += returnedScore[1];
                let lwPoints = players.find(obj => { return obj.id === team[i].left_wing });
                getPoints(lwPoints.nhl_id);
                returnedScore = await getPoints(lwPoints.nhl_id);
                x += returnedScore[0];
                y += returnedScore[1];
                let d1Points = players.find(obj => { return obj.id === team[i].dman1 });
                getPoints(d1Points.nhl_id);
                returnedScore = await getPoints(d1Points.nhl_id);
                x += returnedScore[0];
                y += returnedScore[1];
                let d2Points = players.find(obj => { return obj.id === team[i].dman2 });
                getPoints(d2Points.nhl_id);
                returnedScore = await getPoints(d2Points.nhl_id);
                x += returnedScore[0];
                y += returnedScore[1];
                console.log(x + "   " + y);
                return resolve([x, y]);
            });
        });
    });
}

const asyncCall = async () => {
    await fetch('/api/teams').then((response) => {
        response.json().then(async (team) => {
            for (let i = 0; i < cards; i++) {
                result = await doMath(team, i);
                document.getElementsByClassName('stats-goals')[i].innerText = result[0];
                document.getElementsByClassName('stats-assists')[i].innerText = result[1];
            }
        });
    });
}

asyncCall();