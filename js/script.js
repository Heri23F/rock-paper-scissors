let init = document.body.innerHTML
const container = document.querySelector(".container")
const choiceBtn = document.querySelector(".choice-buttons")


let userChoice = "";

// Get player choice
// use event delegation
choiceBtn.addEventListener("click", (event) => {
    let target = event.target;
    // reassingn userChoice based on id of buttons they click
    switch (target.id) {
        case "rock":
            userChoice = "Rock";
            break;
        case "paper":
            userChoice = "Paper";
            break;
        case "scissors":
            userChoice = "Scissors";
    }

// Generate computer choice

    // Generate random number between 0-2
    let randomNum = Math.floor(Math.random() * 3)

    let computerChoice = ""

    switch (randomNum) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
    }

    console.log("user choice: " + userChoice)
    console.log("random number: " + randomNum)
    console.log("computer choice: " +computerChoice)

    // compare user choice with computer choice
    const userScore = document.querySelector(".player .score")
    const computerScore = document.querySelector(".computer .score")
    const result = document.querySelector(".result")
    result.textContent = ""
    const bothChoice = document.querySelector(".both-choice")
    bothChoice.textContent = `${userChoice} vs ${computerChoice}`
    
    if (userChoice == "Rock" && computerChoice == "Scissors") {
        ++userScore.textContent
        result.textContent = `You win!!`
    } else if (userChoice == "Paper" && computerChoice == "Rock") {
        ++userScore.textContent
        result.textContent = `You win!!`
    } else if (userChoice == "Scissors" && computerChoice == "Paper") {
        ++userScore.textContent
        result.textContent = `You Win!!`
    } else if (userChoice == computerChoice) {
        result.textContent = "Draw"
    } else {
        result.textContent = "You Lose"
        ++computerScore.textContent
    }

    // check round left
    const roundCount = document.querySelector(".round-count");
    --roundCount.textContent
    if (Number(roundCount.textContent) == 0) {
        choiceBtn.remove()
        bothChoice.textContent = `${userScore.textContent} vs ${computerScore.textContent}`
        result.textContent = finalScore()
        let resetbtn = document.createElement("button")
        resetbtn.classList.add("reset-button")
        resetbtn.textContent = "Play again?"
        container.appendChild(resetbtn)

        resetbtn.addEventListener("click", () => {
            location.reload()
        })
    }

    function finalScore() {
        if (Number(userScore.textContent) > Number(computerScore.textContent)) {
            return "You Win!!"
        } else if (Number(userScore.textContent) == Number(computerScore.textContent)) {
            return "Draw!!"
        } else {
            return "You Lose!!"
        }
    }
})


