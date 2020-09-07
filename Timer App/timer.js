// loads the clock upon page load
document.body.onload = startClock()

/**
 * Called upon page load, starts the clock and keeps it ticking
 */
function startClock() {
    updateClock()
    setInterval(updateClock, 1000)
}

/**
 * Method that updates the clock time
 */
function updateClock() {
    // Creating the Clock:

    // for getting the current time
    let currentDate = new Date()
    let currentHours = currentDate.getHours()
    let currentMinutes = currentDate.getMinutes()
    let currentSeconds = currentDate.getSeconds()


    // adds a leading zero to minutes and seconds values

    // if the current minute is less than ten, add a zero beforehand, if not, add
    // the empty string beforehand
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes
    // same idea with currentSeconds
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds


    // now for "AM" or "PM"

    // if currentHours is less than 12, then it's in the AM, if not, then it's in the PM
    // set timeOfDay equal to AM if true, and PM if false
    let timeOfDay = ( currentHours < 12 ) ? "AM" : "PM"

    // we want to display non-24 hour time, so if the currentHours is 13 or more, return
    // currentHours - 12 to convert it to 12-hour time. If it's not greater than 12, then
    // there's no reason to convert it, and return the initial value
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours

    // if it's showing 0 for hours, that means it's 12 in 12-hour time format
    currentHours = ( currentHours === 0 ) ? 12 : currentHours

    // creates the result string
    let currentTimeString = `${currentHours}:${currentMinutes}:${currentSeconds} ${timeOfDay}`


    // Displaying the Clock:
    document.getElementById("clock").innerText = currentTimeString

    return currentDate
}

console.log(new Date().getTime())

function createTimerHtml() {
    return `
        <div class="timer">
            <span id="timer"></span>
            <button id="pause"></button>
        </div>
    `
}

function createTimer(timerLengthHours, timerLengthMinutes) {
    let timerLength = (timerLengthHours * 60 * 60) + (timerLengthMinutes * 60) 
    let timerInterval = setInterval( () => {
        timerLength--
        document.getElementById("timer").innerText = `${timerLength}`

        if (timerLength < 0) {
            clearInterval(timerInterval)
            document.getElementById("timer").innerText = "Time Expired"
        }
    }, 1000)
}

class Timer {
    id
    startButton = "startButton"
    pauseButton = "pauseButton"
    timerLength
    isPaused = false
    constructor(hours, minutes) {
        this.id = Math.random().toString()
        this.hours = hours
        this.minutes = minutes
        this.timerLength = (hours * 60 * 60) + (minutes * 60)
        this.createHtml()
    }
    start() {
        let timerInterval = setInterval( () => {
            if (this.isPaused) {
                let n = 0
                let pauseInterval = setInterval( () => {
                    console.log(n++)
                    if (!this.isPaused) {
                        clearInterval(pauseInterval)
                    }
                }, 1000)
            }

            this.timerLength--
            this.updateDisplay()
            if (this.timerLength < 0) {
                document.getElementById(this.id).innerText = "Timer Expired"
                clearInterval(timerInterval)
            }
        }, 1000)
    }
    updateDisplay() {
        document.getElementById(this.id).innerText = this.timerLength.toString()
    }
    createHtml() {
        let html = `
            <div class="timer">
                <span id="${this.id}">${this.timerLength}</span>
                <button id="${this.startButton}">Start</button>
                <button id="${this.pauseButton}">Pause/Play</button>
            </div>
        `
        document.body.innerHTML += html
        document.getElementById("startButton").addEventListener("click", () => {
            this.start()
            console.log("start")
        })
        document.getElementById("pauseButton").addEventListener("click", () => {
            console.log("pause/play")
            console.log(this.isPaused)
            this.isPaused = !this.isPaused
            console.log(this.isPaused)
            
        })
    }
}

let timer1 = new Timer (0, .1)







