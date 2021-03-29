const stepText = [
    'What will your TEAM be called?',
    'Select your CENTER',
    'Select your RIGHT WING',
    'Select your LEFT WING',
    'Select your first DEFENDER',
    'Select your second DEFENDER',
    'Select your GOALIE'
];
let stepNum = -1;
let selection = [];

const printInstructions = () => {
    stepNum++;
    document.querySelector('#creation-select').textContent = stepText[stepNum];
}

const nameFormHandler = () => {
    selection.push(document.querySelector('#name-input').value);
    document.querySelector('#name-form').style.display = "none";
    printInstructions();
    document.querySelector('#c-selection').style.display = "grid";
}

const cardSelectHandler = (playerId) => {
    selection.push(playerId);
    printInstructions();
    if (document.getElementById('c-selection').style.display === "grid") {
        document.getElementById('c-selection').style.display = "none";
        document.getElementById('rw-selection').style.display = "grid"
    } else if (document.getElementById('rw-selection').style.display === "grid") {
        document.getElementById('rw-selection').style.display = "none";
        document.getElementById('lw-selection').style.display = "grid"
    } else if (document.getElementById('lw-selection').style.display === "grid") {
        document.getElementById('lw-selection').style.display = "none";
        document.getElementById('d1-selection').style.display = "grid"
    } else if (document.getElementById('d1-selection').style.display === "grid") {
        document.getElementById('d1-selection').style.display = "none";
        document.getElementById('d2-selection').style.display = "grid"
    } else if (document.getElementById('d2-selection').style.display === "grid") {
        document.getElementById('d2-selection').style.display = "none";
        document.getElementById('g-selection').style.display = "grid"
    } else {
        postData();
    }
}

const postData = () => {
    fetch('/api/teams', {
        method: 'post',
        body: JSON.stringify({
            "team_name": selection[0],
            "center": selection[1],
            "right_wing": selection[2],
            "left_wing": selection[3],
            "dman1": selection[4],
            "dman2": selection[5],
            "goalie": selection[6]
        }),
        headers: { 'Content-Type': 'application/json' }
    })

    document.location.replace('/');
}

document.addEventListener("DOMContentLoaded", function () {
    printInstructions(stepNum);
    document.querySelector('#c-selection').style.display = "none";
    document.querySelector('#rw-selection').style.display = "none";
    document.querySelector('#lw-selection').style.display = "none";
    document.querySelector('#d1-selection').style.display = "none";
    document.querySelector('#d2-selection').style.display = "none";
    document.querySelector('#g-selection').style.display = "none";
});

document.querySelector('#submit-name').addEventListener('click', nameFormHandler);