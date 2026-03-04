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

let humanScore = 0
let computerScore = 0

function playRound(humanChoiche, computerChoiche) {
    if (humanChoiche === "paper" && computerChoiche === "rock") {
        console.log("You win paper beat rock")
    } else if (humanChoiche === "rock" && computerChoiche === "scissors") {
        console.log("You win rock bear scissors ")
    } else if (humanChoiche === "scissors" && computerChoiche === paper) {
        console.log("You win scissors beat paper")
    } else if (humanChoiche == computerChoiche) {
        console.log("draw")
    } else {
        console.log("You Lose " + computerChoiche + " beat " + humanChoiche)
    }
}

const humanChoiche = getHumanChoiche()
const computerChoiche = getComputerChoiche()

console.log("Computer Choiche: " + computerChoiche)
console.log("Humans Choiche: " + humanChoiche)

playRound(humanChoiche, computerChoiche)

