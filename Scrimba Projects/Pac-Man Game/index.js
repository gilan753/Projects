const width = 28
const grid = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
let squares = []
let score = 0

// 28 * 28 = 784
    // 0 = pac-dots
    // 1 = wall
    // 2 = ghost-lair
    // 3 = power-pellet
    // 4 = empty
const layout = [ // use google sheets for different layouts - this is the teacher's
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

/**
 * This is going to create the board with a for loop
 */
function createBoard() {
    // for loop
    for (let i = 0; i < layout.length; i++) {
        // create a square
        const square = document.createElement('div')
        // put square in grid
        grid.appendChild(square)
        // put square in squares array
        squares.push(square)

        // creates the visual 
        // === means "deeply equal"
        if (layout[i] === 0) {
            squares[i].classList.add('pac-dot')
        } else if (layout[i] === 1) { 
            squares[i].classList.add('wall') 
        } else if (layout[i] === 2) {
            squares[i].classList.add('ghost-layer')
        } else if (layout[i] === 3) {
            squares[i].classList.add('power-pellet')
        }
    }
}
// invoke function
createBoard()

// starting position of pac-man
let pacmanCurrentIndex = 490
// makes pac-man show up
squares[pacmanCurrentIndex].classList.add('pacman')

// function for controlling pac-man
// use keycode.info to find out what keycode goes to what key
function control(e) {
    // removes pacman from his current square
    squares[pacmanCurrentIndex].classList.remove('pacman')
    
    // switch case that determines which button was pressed
    switch(e.keyCode) {
        case 40:
            console.log('pressed down')
            if (
                // stops pacman from entering the ghost-layer
                !squares[pacmanCurrentIndex + width].classList.contains('ghost-layer') &&
                // stops pacman from going through walls
                // if the square directly under pacman (by adding the width)
                // does not contain a wall
                !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
                // stops pacman from leaving the edge
                pacmanCurrentIndex + width < width * width
                ) pacmanCurrentIndex += width
            break
        case 38:
            console.log('pressed up')
            if (
                // stops pacman from entering the ghost-layer
                !squares[pacmanCurrentIndex - width].classList.contains('ghost-layer') &&
                // stops pacman from going through walls
                !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
                // stop pacman from leaving the edge
                pacmanCurrentIndex - width >= 0
                ) pacmanCurrentIndex -= width
            break
        case 37:
            console.log('pressed left')
            if (
                // stops pacman from entering the ghost-layer
                !squares[pacmanCurrentIndex - 1].classList.contains('ghost-layer') &&
                // stops pacman from going through walls
                !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
                // if the next square isn't the edge, move pacman to the left
                pacmanCurrentIndex % width !== 0
                ) pacmanCurrentIndex -= 1
                // lets pacman use his shortcut when moving left
                if (pacmanCurrentIndex === 364) {
                    pacmanCurrentIndex = 391
                }
            break
        case 39:
            console.log('pressed right')
            if (
                // stops pacman from entering the ghost-layer
                !squares[pacmanCurrentIndex + 1].classList.contains('ghost-layer') &&
                // stops pacman from going through walls
                !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
                // stops pacman from leaving the edge
                pacmanCurrentIndex % width < width - 1
                ) pacmanCurrentIndex +=1
                // lets pacman use his shortcut when moving right
                if (pacmanCurrentIndex === 391) {
                    pacmanCurrentIndex = 364
                }
            break
    }
    // after we've moved the pacmanCurrentIndex to the right location, reassign pacman to it
    squares[pacmanCurrentIndex].classList.add('pacman')
    // check if pacman has eaten a pac dot
    pacDotEaten()
    // check if pacman has eaten a power pellet
    powerPelletEaten()
    checkForWin()
    checkForGameOver()
}

// when the user releases a key, call the control function
document.addEventListener('keyup', control)

// shows that a pac dot was eaten
function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        // removes the pac dot
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
        // increments the score by one
        score++
        // updates the scoreDisplay
        scoreDisplay.innerText = score
    }
}

// function for when a power pellet is eaten
function powerPelletEaten() {
    // if square pacman is in contains a power pellet
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        // removing class of power pellet
        squares[pacmanCurrentIndex].classList.remove('power-pellet')
        // add a score of 10
        score += 10
        // change each of the four ghosts to isScared = true
        ghosts.forEach(ghost => ghost.isScared = true)
        // use setTimeout to unscare ghosts after 10 seconds
        setTimeout(() => {
            ghosts.forEach(ghost => ghost.isScared = false)
        }, 10000)
    }
}

// class template for the ghosts
class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}

// creating the ghosts
const ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]

// adds the ghosts onto the grid
// for each runs a function for each element in an array
// "ghost" represents the current array element in the iteration
ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
})

// moves the ghosts
ghosts.forEach(ghost => {moveGhost(ghost)})

// function for moving the ghost around
function moveGhost(ghost) {
    console.log('moved ghost')
    // directions for figuring out where we need to go
    const directions = [-1, +1, -width, +width] // left, right, up, down
    // figures out a random direction for the ghosts to go
    let direction = directions[Math.floor(Math.random() * directions.length)]
    console.log(direction)

    // setting the speed of each ghost
    // set interval repeats the function every specified milliseconds
    ghost.timerId = setInterval(function() {
        // if the next square does not contain a wall or ghost
        if (!squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
        ) {
            // remove any ghost class, allowing it to appear to move
            squares[ghost.currentIndex].classList.remove(ghost.className)
            squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
            // add direction to current Index
            ghost.currentIndex += direction
            // add ghost class to the next position
            squares[ghost.currentIndex].classList.add(ghost.className)
            squares[ghost.currentIndex].classList.add('ghost')
        } else direction = directions[Math.floor(Math.random() * directions.length)]

        // if the ghost is currently scared
        if (ghost.isScared) { // don't need to write === true
            // make the ghost look scared
            squares[ghost.currentIndex].classList.add('scared-ghost')
        }

        // if the ghost is currently scared and pacman is on it
        if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')) {
            // remove classnames - ghost.classname, 'ghost', 'scared-ghost'
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            // change ghosts currentIndex back to startIndex
            ghost.currentIndex = ghost.startIndex
            // add score of 100
            score += 100
            // re-add classnames of ghost.className and 'ghost' to the new position
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        }
        checkForGameOver()
    }, ghost.speed)

}

// will stop the setInterval function from running
// clearInterval(ghost.timerId)


// check for game over 
function checkForGameOver() {
    // if the square pacman is in contains a ghost and the square does not contain a scared ghost
    if (squares[pacmanCurrentIndex].classList.contains('ghost') && 
        !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
        // for each ghost - we need to stop it moving
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        // remove event listener from our control function
        document.removeEventListener('keyup', control)
        // tell user the game is over (scoreDisplay)
        scoreDisplay.innerText = ' Game Over - Score: ' + score 
    }
}

// check for win
function checkForWin() {
    if (score === 274) {
        // stop each ghost moving
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        // remove the event listener
        document.removeEventListener('keyup', control)
        // tell our user they have won
        scoreDisplay.innerText = ' Game Over - Win! - Score: ' + score 
    }
}