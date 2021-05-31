
let letter = 'ABC'

let charCode = letter.charCodeAt(0) // Decimal ASCII Chart
console.log(charCode)
console.log(letter.charCodeAt(1))

let l = String.fromCharCode(65) 
console.log(l)




function generateRandomNumber(uppreBound) {
    let random = Math.random() * uppreBound 
    let floored = Math.floor(random) 
    return floored
}

let firstRandom = generateRandomNumber(10) // 0-9
let secondRandom = generateRandomNumber(20) // 0-19

// lai dabūtu random noapaļotus skaitļus 
//let random = Math.random() //math object, random method 0.000000 - 0.9999999999
//let random = Math.random() * 10 //math object, random method 0.000000 - 9.9999999999
//let floored = Math.floor(random) 
//console.log(random)
//console.log(floored) //noapaļo


Math.floor(4.5) === 4
Math.floor(5.7) === 5



alert('HEYYYY')
let answer = prompt('What dais is today?')

console.log('printēs tikai tad kad augšējie tiks izpildīti!!!')


let guess = prompt('What number am  thinking of (0-9)?')
if (guess === random){
    alert('Good job, you have guessed the number! It was' + floored )
} else {
    alert('Sorry! You lost! The number was ' + floored )
}





function greet(){
    console.log('Hello me!')
}

function changeText() {
    let text = document.getElementById('myText') 
    text.innerHTML = 'ABXD'
}

function changeBackground() {
    let b = document.body // documnet.body // because there is only one body
    b.style.backgroundColor = 'red'
}

let isGreen = true
//let colors = ['red', 'green', 'blue', 'purple', 'yellow', 'cyan']
function changeBackground() {
    let b = document.body // documnet.body // because there is only one body
    //let randomIndex = Math.floor(Math.random() * colors.length) 
   // let randomColor = colors[randomIndex]
    if (isGreen) {
        b.style.backgroundColor = 'red'
        //b.style.backgroundColor = randomColor
    } else {
        b.style.backgroundColor = '#00FF00'
    }
    isGreen = !isGreen
}