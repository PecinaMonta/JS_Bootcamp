const AVAILABLE_WORDS = ['reactor', 'book',
                         'satisfaction', 'afternoon', 'lifestyle']


                         const KEYBOARD_TOP = 'QWER'
                         const KEYBOARD_MID = ''
                         const KEYBOARD_BOT = ''
let word = null
window.onload = function() {
    play()
}


function play() {
    word = generateRandomWord().toUpperCase
    let mid = document.getElementById('mid')

    let middleLetters = document.createElement('div')
    middleLetters.className = 'guessWord'
    mid.appendChild(middleLetters)


    for (let i = 0; i < word.length; i++) {
        let emptyLetter = document.createElement('div')
        emptyLetter.className = 'letterContainer'
        middleLetters.appendChild(emptyLetter)
        
    }

    let letters = middleLetters.children

    letters[0].innerText = word[0]
    letters[letters.length - 1].innerText = word[word.length - 1]

    //let letterContainers = mid.children
    //let f = letterContainers[0]
   // let l = letterContainers[letterContainers.length - 1]
    //f.textContent = word[0]

    //l.textContent = word[word.length - 1]
}

function generateRandomWord() {
    let ri = Math.floor(Math.random() * AVAILABLE_WORDS.length) //random index = ri
    return AVAILABLE_WORDS[ri] // return whatever is at indes ri

}
