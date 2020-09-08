// Retrieving elements from html using the DOM
const setupDiv = document.getElementById('setup');
const punchlineDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchlineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');
// Global variable declarations
let punchline = "";

// event listeners
punchlineBtn.addEventListener("click", getPunchline);
newJokeBtn.addEventListener("click", getJoke);

/**
 * getPunchLine function
 *  - inserts punchline into the punchlineDiv
 *  - adds the class "bubble" to punchlineDiv
 *  - toggles the "hidden" class on both buttons
 */
function getPunchline() {
    punchlineDiv.innerText = punchline;
    punchlineDiv.classList.add("bubble");
    toggleButtons();
}

/**
 * toggle the buttons
 */
function toggleButtons() {
    punchlineBtn.classList.toggle("hidden");
    newJokeBtn.classList.toggle("hidden");
}


/**
 * Asynchronous function getJoke, that fetches a joke from the link
 */
async function getJoke() {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    if (jokePromise.ok) {
        const joke = await jokePromise.json();
        setupDiv.innerText = joke[0].setup;
        punchline = joke[0].punchline;
        punchlineDiv.innerText = "";
        punchlineDiv.classList.remove("bubble");
        toggleButtons();
    } else {
        console.error(jokePromise.status);
    }
}

getJoke();