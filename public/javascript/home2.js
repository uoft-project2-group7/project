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
        await fetch('/api/players').then((response) => {
            let returnedScore;
            let x = 0;
            let y = 0;
            response.json().then(async (players) => {
                let cPoints = team[i].center;
                returnedScore = await getPoints(cPoints);
                x += returnedScore[0];
                y += returnedScore[1];

                let rwPoints = team[i].right_wing;
                returnedScore = await getPoints(rwPoints);
                x += returnedScore[0];
                y += returnedScore[1];

                let lwPoints = team[i].left_wing;
                returnedScore = await getPoints(lwPoints);
                x += returnedScore[0];
                y += returnedScore[1];

                let d1Points = team[i].dman1;
                returnedScore = await getPoints(d1Points);
                x += returnedScore[0];
                y += returnedScore[1];

                let d2Points = team[i].dman2;
                returnedScore = await getPoints(d2Points);
                x += returnedScore[0];
                y += returnedScore[1];
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
                document.getElementsByClassName('card-score')[i].innerText = result[0] * 3 + result[1] * 2;
            }
        });
    });
}

asyncCall();