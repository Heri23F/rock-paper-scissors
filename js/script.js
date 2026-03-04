console.log("Hello World")

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoiche() {
    let choiche
    let random = getRandomInt(3)

    if (random === 1) {
        choiche = "rock"
    } else if (random === 2) {
        choiche = "paper"
    } else {
        choiche = "scissor"
    }
    return choiche
    console.log(random)

    
}

console.log(getComputerChoiche())

