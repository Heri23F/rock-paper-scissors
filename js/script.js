console.log("Paper Rock Scissor game")

// Get random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

// Get random choice beetween rock, paper, and scissors
function getComputerchoice() {
    let random = getRandomInt(3)
    let choice
    if (random === 1) {
        choice = "rock"
    } else if (random === 2) {
        choice = "paper"
    } else {
        choice = "scissors"
    }
    return choice

    
}

// Get user input
function getHumanchoice() {
    let humanchoice = prompt("Pick rock paper or scissors")
    return humanchoice.toLocaleLowerCase()

}




// Game Logic
function playGame() {

    let humanScore = 0
    let computerScore = 0

    // compare human choice with computer choice who win based on the condition and update the score
    function playRound(humanchoice, computerchoice) {
        if (humanchoice === "paper" && computerchoice === "rock") {
        console.log("You win paper beat rock")
        ++humanScore
        } else if (humanchoice === "rock" && computerchoice === "scissors") {
        console.log("You win rock beat scissors ")
        ++humanScore
        } else if (humanchoice === "scissors" && computerchoice === "paper") {
        console.log("You win scissors beat paper")
        ++humanScore
        } else if (humanchoice == computerchoice) {
        console.log("draw")
        } else {
        console.log("You Lose " + computerchoice + " beat " + humanchoice)
        ++computerScore
        }
    }   

    function displayScore() {
        console.log("Computer Score: " + computerScore)
        console.log("Humans Score: " + humanScore)
    }

    round = 0

    // Game loop
    for (let i = 0; i < 5; ++i) {
        const humanchoice = getHumanchoice()
        const computerchoice = getComputerchoice()
        console.log("Round " + ++round)
        console.log("Computer choice: " + computerchoice)
        console.log("Humans choice: " + humanchoice)
        playRound(humanchoice, computerchoice)
        displayScore()
        
    }

    
}

playGame()