// const fetch = require('node-fetch');

// module.exports = { 
//   playerStats: playerdata => {
//     let apiUrl = 'https://statsapi.web.nhl.com/api/v1/people/'+ playerdata +'/stats?stats=statsSingleSeason&season=20202021';
//     fetch(apiUrl).then(function(response) {
//       response.json().then(function(data) {
//         //console.log(data.stats[0].splits[0].stat);

//         let goals = data.stats[0].splits[0].stat.goals;
//         let assists = data.stats[0].splits[0].stat.assists;
//         let stats = `G: ${goals} A: ${assists}`;

//         console.log(stats);
//         return `this text is working`;
//       })
//     }) 
//   }

// }


// for (let i; i < 6; i++) {
//     playerStats: playerdata => {
//         let apiUrl = 'https://statsapi.web.nhl.com/api/v1/people/' + playerdata + '/stats?stats=statsSingleSeason&season=20202021';
//     }

// let dataArray;

// const getData = () => {
//     dataArray = fetch('/api/teams', {
//         method: 'get',
//         body: JSON.stringify({
//             id
//         }),
//         headers: { 'Content-Type': 'application/json' }
//     });
// }

// getData();






// for (let i; i < 6; i++) {
//     playerStats: playerdata => {
//         let apiUrl = 'https://statsapi.web.nhl.com/api/v1/people/' + playerdata + '/stats?stats=statsSingleSeason&season=20202021';
//     }

//     let dataArray;

//     const getData = () => {
//         dataArray = fetch('/api/teams', {
//             method: 'get',
//             body: JSON.stringify({
//                 id
//             }),
//             headers: { 'Content-Type': 'application/json' }
//         });
//     }

//     getData();





const doFirst = async () => {
    return await fetch('/api/teams').then(function (response) {
        response.json().then(function (team) {
            for (let i = 0; i < team.length; i++) {
                const values = async () => {

                    await fetch('/api/players').then(function (response) {
                        response.json().then(function (players) {
                            // let totalGoals = [];
                            // let totalAssists = [];
                            const getPoints = (nhlId) => {
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

                            let cPoints = players.find(obj => { return obj.nhl_id === team[i].center });
                            getPoints(cPoints.nhl_id);
                            let rwPoints = players.find(obj => { return obj.nhl_id === team[i].right_wing });
                            getPoints(rwPoints.nhl_id);
                            let lwPoints = players.find(obj => { return obj.nhl_id === team[i].left_wing });
                            getPoints(lwPoints.nhl_id);
                            let d1Points = players.find(obj => { return obj.nhl_id === team[i].dman1 });
                            getPoints(d1Points.nhl_id);
                            let d2Points = players.find(obj => { return obj.nhl_id === team[i].dman2 });
                            getPoints(d2Points.nhl_id);


                            // console.log(totalGoals);
                            // console.log(totalAssists);
                            // return [totalGoals, totalAssists];
                        })
                    })
                }
                values();
            }
        })
    })
   
}

// const doSecond = () => {
//     for (let i = 0; i < document.getElementsByClassName('stats-goals').length; i++) {
//         console.log(Number(document.getElementsByClassName('stats-goals')[i].innerHTML));
//         const addScore = () => {
//             let goalMath = Number(document.getElementsByClassName('stats-goals')[i].innerHTML) * 3;
//             let assistMath = Number(document.getElementsByClassName('stats-assists')[i].innerHTML) * 2;
//             return goalMath + assistMath;
//         }
//         document.getElementsByClassName('card-score')[i].innerHTML = addScore();
//     }

// }

doFirst();

// console.log(result[0]);
// Promise.all(totalGoals).then((values) => {
//     // console.log(values);
// })
// for (let x = 0; x < totalGoals.length / 5; x++) {
//     let toPrintGoals = [];
//     let toPrintAssists = [];
//     for (let y = 0; y < 5; y++) {
//         toPrintGoals.push(totalGoals[0]);
//         toPrintAssists.push(totalAssists[0]);
//         totalGoals.shift;
//         totalAssists.shift;
//     }
//     toPrintGoals = toPrintGoals.reduce((a, b) => a + b, 0);
//     toPrintAssists = toPrintAssists.reduce((a, b) => a + b, 0);
//     document.getElementsByClassName('stats-goals')[x].textContent.value = toPrintGoals;
//     document.getElementsByClassName('stats-assists')[x].textContent.value = toPrintAssists;
// }




// fetch('/api/teams').then(function (response) {
//     response.json().then(function (players) {
//         //console.log(data.stats[0].splits[0].stat);

//         // let goals = data.stats[0].splits[0].stat.goals;
//         console.log(players);
//     })
// })