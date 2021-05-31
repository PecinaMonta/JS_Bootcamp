const ROCK_IMG = 'rock.jpg'
const PAPER_IMG = 'paper.jpg'
const SCISSORS_IMG = 'scissors.jpg'

let playerScore = 0
let enemyScore = 0

function chooseWeapon() {
    let playerWeaponSelect = document.getElementById('playerWeaponSelect')
    let playerChoiceImg = document.getElementById('playerChoiceImg')
    changeImage(playerChoiceImg, playerWeaponSelect.value)
}

function changeImage(img, selectedWeapon) {
    if (selectedWeapon === 'rock') img.src = ROCK_IMG
    else if (selectedWeapon === 'paper') img.src = PAPER_IMG
    else if (selectedWeapon === 'scissors') img.src = SCISSORS_IMG
}

function play() {
    let playerWeapon = document.getElementById('playerWeaponSelect').value
    if (playerWeapon !== 'not_selected') {
        let enemyWeapon = getRandomWeapon()
        let enemyImg = document.getElementById('enemyChoiceImg')
        changeImage(enemyImg, enemyWeapon)


        let fightResult = fight(playerWeapon, enemyWeapon)
        displayFightResult(fightResult)
        changeScore(fightResult)
        saveInHistory(playerWeapon, enemyWeapon, fightResult)
    }
}

function getRandomWeapon() {
    let weapons = ['rock', 'paper', 'scissors']
    let randomWeaponIndex = Math.floor(Math.random() * weapons.length) //from 0 to 2
    return weapons[randomWeaponIndex]

}

function fight(pw, ew) {
    if (pw === 'rock') {
        if (ew === 'rock') return 0 //player won
        else if (ew === 'paper') return -1 // player loses
        else if (ew === 'scissors') return 1 // player won
    } else if (pw === 'paper') {
        if (ew === 'rock') return 1 
        else if (ew === 'paper') return 0 
        else if (ew === 'scissors') return -1
    } else if (pw === 'scissors') {
        if (ew === 'rock') return -1
        else if (ew === 'paper') return 1 
        else if (ew === 'scissors') return 0
    }
}

function changeScore(fightResult) {
    if (fightResult === 1) playerScore++
    else if (fightResult === -1) enemyScore++
}

function displayFightResult(fightResult) {
    let msg = ''
    switch(fightResult) {
        case -1: 
            msg = 'You have <span style="color:red;">lost</span>!'
            break
        case 0:
            msg = 'It is a <span style="color:grey;">tie</span>!'
            break
        case 1:
            msg = 'You have <span style="color:green;">won</span>!'
            break
        default:
            msg = 'Rock Paper Scissors'
            break
    }

    let fightResultContainer = document.getElementById('fightResult')
    fightResultContainer.innerHTML = msg // lai iekšējais teksts pārvērstos par msg noteikto
}


function saveInHistory(playerWeapon, enemyWeapon, fightResult) {
    let historyContainer = document.getElementById('historyContainer')
    let msg = ''
    playerWeapon = playerWeapon[0].toUpperCase() + playerWeapon.slice(1)
    enemyWeapon = enemyWeapon[0].toUpperCase() + enemyWeapon.slice(1)

    let playerSpan = `<span class='${playerWeapon[0]}'>${playerWeapon}</span>`
    let enemySpan = `<span class='${enemyWeapon[0]}'>${enemyWeapon}</span>`
    switch(fightResult) {
        case -1:
            msg = playerSpan + ' has lost to ' + enemySpan
            break
        case 0: 
            msg = playerSpan + ' has played a tie with ' + enemySpan
            break
        case 1:
            msg = playerSpan + ' has won over ' + enemySpan
            break
    }

    let score = `[${playerScore} - ${enemyScore}]`
    let fullMsg = msg + ' ' + score
    let historyRow = '<div class="historyRow">' + fullMsg + '</div>'
    historyContainer.innerHTML += historyRow

}


/*
let firstName = 'Jack'
let lastName = 'Rose'
let formatted = `[${firstName} ${lastName}]`
console.log('[' + firstName + ' ' + lastName + ']')*/



//let number = 5
//
//switch(number) {
  //  case 1:
   //     console.log('its one')
   //     break;
   // case 5:
   //     console.log('its five')
   // case 3:
    //    console.log('its trre')
     //   break;
//} same with strings 