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




reset.addEventListener("click", function (){
    let newNumReset = Number(numReset.innerHTML) +1;
    numReset.innerHTML = newNumReset;
   
   
  
    document.getElementById("teamOneCounter").innerHTML = -1;
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


