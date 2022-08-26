const mineField = document.querySelector("#pnlMineField"),
    startBtn = document.querySelector('.startBtnM'),
    flags = document.querySelector('#flags'),
    timer = document.querySelector('#timerM');


let minelocation = [];
let flagCount;
let timerCount;
let TimerM;

function createMineField() {
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            const btnMineField = document.createElement('div')
            btnMineField.classList.add('mineField')
            btnMineField.setAttribute('xComp', `${i}`);
            btnMineField.setAttribute('yComp', `${j}`);
            btnMineField.setAttribute('ngCount', '0');

            mineField.append(btnMineField)

            btnMineField.addEventListener('mousedown', mouseClick)
        }
    }
}

function mouseClick(e){
    if (e.button === 2) {
        if (!this.classList.contains("flaged")) {
            this.classList.add("flaged")
            flagCount--
            flags.innerHTML = flagCount;
        }
        else {
            this.classList.remove("flaged")
            flagCount++
            flags.innerHTML = flagCount;
        }
    }
    if (e.button === 0) {
        if (!this.classList.contains("flaged")) {
            if (parseInt(this.getAttribute('ngCount')) === 0) {
                this.style.backgroundColor = 'white'
                this.classList.add('revealed')
                revealBlank(this);
            }
            else if (parseInt(this.getAttribute('ngCount')) === 9) {
                this.style.backgroundColor = 'red'
                revealMines();
                gameOver();
            }
            else {
                this.innerText = this.getAttribute('ngCount');
                this.style.backgroundColor = 'white'
                this.classList.add('revealed')
            }
        }
        checkResults();
    }
}

function addNeighbourCount() {
    const btnAll = document.querySelectorAll(".mineField");
    btnAll.forEach(e => {
        let btnX = parseInt(e.getAttribute('xComp'))
        let btnY = parseInt(e.getAttribute('yComp'))
        if (e.classList.contains('mine')){
            btnAll.forEach(b => {
                let btnx = parseInt(b.getAttribute('xComp'))
                let btny = parseInt(b.getAttribute('yComp'))
    
                if (btnx === btnX - 1 && (btny === btnY - 1 || btny === btnY || btny === btnY + 1) ||
                    btnx === btnX && (btny === btnY - 1 || btny === btnY + 1) ||
                    btnx === btnX + 1 && (btny === btnY - 1 || btny === btnY || btny === btnY + 1)) 
                    {
                    ngCount = parseInt(b.getAttribute('ngCount'))
                    if (ngCount !== 9) {
                        ngCount++;
                        b.setAttribute('ngCount', ngCount.toString())
                    }
                }
            })
        }
    })
}

function revealBlank(btn) {
    const btnAll = document.querySelectorAll(".mineField");
    let btnX = parseInt(btn.getAttribute('xComp'))
    let btnY = parseInt(btn.getAttribute('yComp'))
    btnAll.forEach(e => {
        let btnx = parseInt(e.getAttribute('xComp'))
        let btny = parseInt(e.getAttribute('yComp'))

        if (btnx === btnX - 1 && btny === btnY - 1 ||
            btnx === btnX - 1 && btny === btnY ||
            btnx === btnX - 1 && btny === btnY + 1 ||
            btnx === btnX && btny === btnY - 1 ||
            btnx === btnX && btny === btnY + 1 ||
            btnx === btnX + 1 && btny === btnY - 1 ||
            btnx === btnX + 1 && btny === btnY ||
            btnx === btnX + 1 && btny === btnY + 1) {
            ngCount = parseInt(e.getAttribute('ngCount'))
            if (ngCount !== 9 && ngCount !== 0) {
                e.style.backgroundColor = 'white'
                e.innerHTML = ngCount;
                e.classList.add('revealed')
            } else if (ngCount === 0 && !e.classList.contains('revealed')) {
                e.style.backgroundColor = 'white'
                e.classList.add('revealed')
                revealBlank(e);
            }
        }
    })
}

function getMinesLocations() {
    minelocation = [];
    while (minelocation.length < 12) {
        let rand = Math.floor(Math.random() * 81) + 1;
        if (!minelocation.includes(rand)) {
            minelocation.push(rand);
        }
    }
    return minelocation;
}

function setMineLocation() {
    const btnAll = document.querySelectorAll(".mineField");
    btnAll.forEach(e => {
        let btnX = parseInt(e.getAttribute('xComp'))
        let btnY = parseInt(e.getAttribute('yComp'))
        value = (btnX - 1) * 9 + btnY
        if (minelocation.includes(value)) {
            e.classList.add("mine");
            e.setAttribute('ngCount', '9');
        }
    })
}

function revealMines() {
    const btnAll = document.querySelectorAll(".mineField");
    btnAll.forEach(e => {
        let btnX = parseInt(e.getAttribute('xComp'))
        let btnY = parseInt(e.getAttribute('yComp'))
        value = (btnX - 1) * 9 + btnY
        if (minelocation.includes(value)) {
            e.classList.add("mine-revealed");
        }
    })
}

function gameOver() {
    addDatatoDB(timerCount,'Lost',0)
    alert('You lost, Dear')
    clearInterval(TimerM)
    btnAll = document.querySelectorAll(".mineField");
    btnAll.forEach(e => {
        e.classList.add('noClick')
    })
}

function gameWon(){
    addDatatoDB(timerCount,'Won',69)
    alert('You Won in ' + timerCount + ' seconds')
    clearInterval(TimerM)
    btnAll = document.querySelectorAll(".mineField");
    btnAll.forEach(e => {
        e.classList.add('noClick')
    })
}

function checkResults(){
    btnAll = document.querySelectorAll('.mineField')
    let count = 0;
    btnAll.forEach( e => {
        if (e.classList.contains('revealed')){
            count++
        }
        if (count === 69){
            gameWon();
        }
    })
}

function revealFirst(){
    const btnAll = document.querySelectorAll(".mineField");
    for (let i=1; i<= 99; i++){
        let btn = btnAll[i]
        if (parseInt(btn.getAttribute('ngCount')) === 0){
            btn.style.backgroundColor = 'white'
            btn.classList.add('revealed')
            revealBlank(btn)
            break;
        }
    }
}

function Timer() {
    timerCount++
    timer.textContent = timerCount
}

function addDatatoDB(time, result, score) {                                               
    $.ajax({
        type: "POST",
        url: "Minesweeper.aspx/UpdateData",
        data: "{ time: '" + time + "',result: '" + result + "',score: '" + score + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: "true",
        cache: "false",
    });
}

window.addEventListener('DOMContentLoaded', () => {
    document.addEventListener("contextmenu", function (e) { e.preventDefault(); }, false);
})

startBtn.addEventListener('click', () => {
    clearInterval(TimerM)
    mineField.innerHTML= ''
    flagCount = 12;
    flags.innerHTML = flagCount;
    timerCount = 00
    timer.textContent = timerCount;
    TimerM = setInterval(Timer, 1000)
    createMineField();
    getMinesLocations();
    setMineLocation();
    addNeighbourCount();
    revealFirst();
})