//initialization 
const gridS = document.querySelector('#Space-grid'),
    resultsDisplay = document.querySelector('#result'),
    startBtnS = document.querySelector('.startBtnS'),
    timerS = document.querySelector('#timerS');

let squares = document.querySelectorAll('.box');

let timerCountS;
let timerIdS;

let invader;
let hero;
let direction;
let interval;
let width;
let isRight;
let results;
let invadersRemoved;

// Creating Grid
function createGrid() {
    for (let i = 0; i < 225; i++) {
        const box = document.createElement('div')
        box.classList.add('box')
        gridS.append(box)
    }
}

// Giving invader class to invader
function Invader() {
    const sqaures = document.querySelectorAll('.box')
    for (i = 0; i < 3; i++) {
        for (let j = 0; j < invader[i].length; j++) {
            if (!(invadersRemoved[i]).includes(j)) {
                sqaures[invader[i][j]].classList.add('invader')
            }
        }
    }
}

// to remove invader class
function remover() {
    const sqaures = document.querySelectorAll('.box')
    invader.forEach(elemnt => {
        elemnt.forEach(e => {
            sqaures[e].classList.remove('invader')
        })
    })
}

// control the movement of hero and bomb
function controlHero(e) {
    if ((e.keyCode === 68 || e.keyCode === 39) && hero < 209) {
        squares[hero].classList.remove('hero')
        hero++ //if we press the right arrow on our keyboard, the hero will go right one
        squares[hero].classList.add('hero')
    } else if (e.keyCode === 87 || e.keyCode === 38) {
        let bomb = hero
        let newInterval = 0
        newInterval = setInterval(() => {
            squares[bomb].classList.remove('bomb')
            if (bomb > width) {
                bomb -= width
                squares[bomb].classList.add('bomb')
            } else clearInterval(newInterval)

            if (squares[bomb].classList.contains('invader')) {
                squares[bomb].classList.remove('bomb')
                squares[bomb].classList.remove('invader')
                squares[bomb].classList.add('boom')

                setTimeout(() => squares[bomb].classList.remove('boom'), 300)
                clearInterval(newInterval)
                results++
                resultsDisplay.innerHTML = results
                for (i = 0; i < 3; i++) {
                    let r = invader[i].indexOf(bomb)
                    if (r !== -1) {
                        const invaderRemoved = r
                        invadersRemoved[i].push(invaderRemoved)
                    }
                }
            }
        }, 100)

    } else if ((e.keyCode === 65 || e.keyCode === 37) && hero > 195) {
        squares[hero].classList.remove('hero')
        hero-- // if we press left, the hero will go left one div
        squares[hero].classList.add('hero')
    }
}

// making invader move
function moveInvader() {
    const squares = document.querySelectorAll('.box')

    const leftEdge = invader[0][0] % width === 0
    const rightEdge = invader[2][invader[2].length - 1] % width === width - 1
    remover()

    if (rightEdge && isRight) {
        invader.forEach(elemnt => {
            for (let i = 0; i < elemnt.length; i++) {
                elemnt[i] += width + 1
            }
        })
        direction = -1
        isRight = false
    }

    if (leftEdge && !isRight) {
        invader.forEach(elemnt => {
            for (let i = 0; i < elemnt.length; i++) {
                elemnt[i] += width - 1
            }
        })
        direction = 1
        isRight = true
    }
    invader.forEach(elemnt => {
        for (let i = 0; i < elemnt.length; i++) {
            elemnt[i] += direction
        }
    })

    Invader()

    if (squares[hero].classList.contains('invader')) {
        clearInterval(interval)
        alert('GAME OVER')
    }
    for (i = 0; i < 3; i++) {
        for (let j = 0; j < invader[i].length; j++) {
            if (invader[i][j] > 224) {
                clearInterval(interval)
                alert('GAME OVER')
            }
        }
    }
    if (results === 30) {
        clearInterval(interval)
        alert('You have WON in ' + timerCountS + ' seconds');
    }
}

function spaceTimer() {
    timerCountS++
    timerS.textContent = timerCountS
}

window.addEventListener('DOMContentLoaded', () => {
    document.addEventListener("contextmenu", function (e) { e.preventDefault(); }, false);
})

startBtnS.addEventListener('click', () => {
    gridS.innerHTML = ''
    clearInterval(interval)
    clearInterval(timerIdS)
    timerCountS = 0
    timerS.textContent = timerCountS
    
    invader = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            [30, 31, 32, 33, 34, 35, 36, 37, 38, 39]]
    hero = 202
    direction = 1
    interval = 0
    width = 15
    isRight = true
    results = 0
    invadersRemoved = [[], [], []]
    
    createGrid()
    Invader()
    timerIdS = setInterval(spaceTimer, 1000)
    squares = document.querySelectorAll('.box')
    squares[hero].classList.add('hero')
    interval = setInterval(moveInvader, '600')
    document.addEventListener('keyup', controlHero)
})

