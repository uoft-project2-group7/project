const stepText = [
    'What will your TEAM be called?',
    'Select your CENTER',
    'Select your RIGHT WING',
    'Select your LEFT WING',
    'Select your first DEFENDER',
    'Select your second DEFENDER',
    'Select your GOALIE'
];
let stepNum = 0;
let selection = [];

const printInstructions = (step) => {
    document.querySelector('#creation-select').textContent = stepText[step];
}

const nameFormHandler = () => {
    document.querySelector('#name-form').style.display = "none";
    stepNum++;
    printInstructions(stepNum);
    document.querySelector('#c-selection').style.display = "grid";

    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', cardSelectHandler);
    }
}

const cardSelectHandler = () => {
    alert('it worked');
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