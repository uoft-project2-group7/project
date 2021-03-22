const stepText = [
    'What will your TEAM be called?',
    'Select your CENTER',
    'Select your RIGHT WING',
    'Select your LEFT WING',
    'Select your first DEFENDER',
    'Select your second DEFENDER',
    'Select your GOALIE'
]
let stepNum = 0;
let selection = [];

const printInstructions = (step) => {
    document.querySelector('#creation-select').textContent = stepText[step];
}

const nameFormHandler = () => {
    document.querySelector('#name-form').style.display = "none";
    stepNum++;
    printInstructions(stepNum);
}

document.addEventListener("DOMContentLoaded", function () {
    printInstructions(stepNum);
});

document.querySelector('#submit-name').addEventListener('click', nameFormHandler);
console.log('banana');