
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const player1Dice = document.getElementById("player1Dice"); 
const player2Dice = document.getElementById("player2Dice"); 
const player1ScoreBoard = document.getElementById("player1ScoreBoard");
const player2ScoreBoard = document.getElementById("player2ScoreBoard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

function showDisplayButton() {
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
}

rollBtn.addEventListener("click", function() {
    // We are using a const bc in the scope of this function, the randomNumber is constant
    /**
     * - Math.random returns a random number between 0 and 1
     * - Multiplying that by 6 returns a random number between 0 and 5.999...
     * - Adding one to that returns a random number between 1 and 6.99999...
     * - Taking the floor of that gets rid of the zeros, leaving a random integer 
     * between 1 and 6 
     */
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (player1Turn) {
        player1Score += randomNumber;
        player1Scoreboard.textContent = player1Score;
        player1Dice.textContent = randomNumber;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = "Player 2 Turn";
    } else {
        player2Score += randomNumber;
        player2Scoreboard.textContent = player2Score;
        player2Dice.textContent = randomNumber;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        message.textContent = "Player 1 Turn";
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 has won! 🥳";
        showDisplayButton();
    } else if (player2Score >= 20) {
        message.textContent = "Player 2 has won! 🎉";
        showDisplayButton();
    }
    

    /**
     * Alternates player turns by setting the player1Turn variable
     * equal to it's opposite
     */
    player1Turn = !player1Turn;
})

resetBtn.addEventListener("click", function() {
    reset();
})

function reset() {
    message.textContent = "Player 1 Turn";
    player1Scoreboard.textContent = "0";
    player2Scoreboard.textContent = "0";
    player1Dice.textContent = "-";
    player2Dice.textContent = "-";
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    resetBtn.style.display = "none";
    rollBtn.style.display = "block";
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
}