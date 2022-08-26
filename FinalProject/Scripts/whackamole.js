// initization
const grid = document.querySelector('#gridWac')
let score = document.querySelector('#result')
const timeLeft = document.querySelector('#time-left')
const startBtnW = document.querySelector('.startBtnW')

let result;
let currentTime;
let timerId;
let countDownTimerId;

// creating grid
function createBoard() {
    for (let i = 1; i <= 9; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/white.png')
        card.setAttribute('data-id', i)
        grid.appendChild(card)
    }
}

// assigning random grid and whacin it
let cards = document.querySelectorAll('img')

function selectingGrid() {
    removerM()

    let cards = document.querySelectorAll('img')
    let randomNum = Math.floor(Math.random() * 9)
    let thatCard = cards[randomNum]
    thatCard.setAttribute('src', 'img/mole.jpg')
    thatCard.addEventListener('click', whac)
}

function removerM() {
    let cards = document.querySelectorAll('img')
    cards.forEach(card => {
        card.setAttribute('src', 'img/white.png')
        card.removeEventListener('click', whac)
    })
}

// whac function to find the result 
function whac() {
    result++
    score.innerHTML = result
}

// repeat the it after every .5 sec
function movingMole() {
    timerId = setInterval(selectingGrid, 500)
}

// Creating countdown fuction

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        addWdata(30,'Won', result)
        removerM()
        alert('GAME OVER! Your final score is ' + result)
    }
}

function addWdata(time, result, score) {                                               
    $.ajax({
        type: "POST",
        url: "Whackamole.aspx/UpdateDataW",
        data: "{ time: '" + time + "',result: '" + result + "',score: '" + score + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: "true",
        cache: "false",
    });
}

startBtnW.addEventListener('click', () => {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    grid.innerHTML = ''
    currentTime = 30
    timeLeft.textContent = currentTime
    countDownTimerId = setInterval(countDown, 1000)
    result = 0
    score.innerHTML = result
    timerId = null
    createBoard()
    movingMole()
})