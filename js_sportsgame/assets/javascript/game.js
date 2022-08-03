let reset = document.querySelector("#reset-button")
let numReset = document.querySelector("#num-resets")

let teamOne = document.querySelector("#teamone-shoot-button")
let teamOneCounter = document.querySelector("#teamone-numshots")
let teamOneGoal = document.querySelector("#teamone-numgoals")

let teamTwo = document.querySelector("#teamtwo-shoot-button")
let teamTwoCounter = document.querySelector("#teamtwo-numshots")
let teamTwoGoal = document.querySelector("#teamtwo-numgoals")

function pointCounter() {
    const randomBool = Math.random() <= 0.5;
    return randomBool;
}


reset.addEventListener("click", function () {
    team1 = teamOneGoal.innerHTML;
    team2 = teamTwoGoal.innerHTML;

    
    if (team1 > team2) {
        alert("Team one wins!!")
    } else if (team1 < team2) {
        alert("Team 2 wins!");
    } else {
        alert("it's a tie!");
    }

    let newNumReset = Number(numReset.innerHTML) + 1;
    numReset.innerHTML = newNumReset;

    /* resets all variables*/
    teamOneCounter.innerHTML = 0;
    teamOneGoal.innerHTML = 0;
    teamTwoCounter.innerHTML = 0;
    teamTwoGoal.innerHTML = 0;

    const audioElement = new Audio('car_horn.mp3');
    audioElement.play();


})

teamOne.addEventListener("click", function () {

    let newTeamOneCounter = Number(teamOneCounter.innerHTML) + 1;
    let point = pointCounter()
    teamOneCounter.innerHTML = newTeamOneCounter;

    if (point === true) {
        let newTeamOneGoal = Number(teamOneGoal.innerHTML) + 1;
        teamOneGoal.innerHTML = newTeamOneGoal;


    }

})

teamTwo.addEventListener("click", function () {

    let newTeamTwoCounter = Number(teamTwoCounter.innerHTML) + 1;
    let point = pointCounter()
    teamTwoCounter.innerHTML = newTeamTwoCounter;

    if (point === true) {
        let newTeamTwoGoal = Number(teamTwoGoal.innerHTML) + 1;
        teamTwoGoal.innerHTML = newTeamTwoGoal;

    }

})




