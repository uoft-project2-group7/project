const doSecond = () => {
    for (let i = 0; i < document.getElementsByClassName('card').length; i++) {
        const addScore = () => {
            let goalMath = Number(document.getElementsByClassName('stats-goals')[i].innerHTML) * 3;
            let assistMath = Number(document.getElementsByClassName('stats-assists')[i].innerHTML) * 2;
            return goalMath + assistMath;
        }
        document.getElementsByClassName('card-score')[i].innerHTML = addScore();
        document.getElementsByClassName('card-score')[i].style.visibility = "visible";
    }
}

document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 32) {
        console.log('trigger');
        doSecond();
    }
});