console.log("Paper Rock Scissor game")

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoiche() {
    let random = getRandomInt(3)
    let choiche
    if (random === 1) {
        choiche = "rock"
    } else if (random === 2) {
        choiche = "paper"
    } else {
        choiche = "scissors"
    }
    return choiche

    
}

function getHumanChoiche() {
    let humanChoiche = prompt("Pick rock paper or scissors")
    return humanChoiche.toLocaleLowerCase()

}





function playGame() {

    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoiche, computerChoiche) {
        if (humanChoiche === "paper" && computerChoiche === "rock") {
        console.log("You win paper beat rock")
        ++humanScore
        } else if (humanChoiche === "rock" && computerChoiche === "scissors") {
        console.log("You win rock beat scissors ")
        ++humanScore
        } else if (humanChoiche === "scissors" && computerChoiche === "paper") {
        console.log("You win scissors beat paper")
        ++humanScore
        } else if (humanChoiche == computerChoiche) {
        console.log("draw")
        } else {
        console.log("You Lose " + computerChoiche + " beat " + humanChoiche)
        ++computerScore
        }
    }   

    function displayScore() {
        console.log("Computer Score: " + computerScore)
        console.log("Humans Score: " + humanScore)
    }

    round = 0

    for (let i = 0; i < 5; ++i) {
        const humanChoiche = getHumanChoiche()
        const computerChoiche = getComputerChoiche()
        console.log("Round " + ++round)
        console.log("Computer Choiche: " + computerChoiche)
        console.log("Humans Choiche: " + humanChoiche)
        playRound(humanChoiche, computerChoiche)
        displayScore()
        
    }

    
}

playGame()