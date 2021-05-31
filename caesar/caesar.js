/*
julius caesar

'Hello this is message' , 1 // shift every by 1
'Ifmmp'

*/


// Homework (around 20 lines of code) for encripting messages
function caesarsCipher() {

    let text = document.getElementById('msg-input').value
    let key = document.getElementById('key-input').value

    key %= 26 // modulo operator cant be higher than 25

    let encryptedText = ''
    let currentCharCode = null
    let newCharCode = null
    for (let i = 0; i < text.length; i++) {
        currentCharCode = text.charCodeAt(i)
        newCharCode = currentCharCode + key

        if (isCapitalLetter(currentCharCode)) { // capital letters
            if (newCharCode > 90) {
                newCharCode -= 26
            } else if (newCharCode < 65) {
                newCharCode += 26
            }
        } else if (isLowerCaseLetter(currentCharCode)) { // lower case letters
            if (newCharCode > 122) {
                newCharCode -= 26
            } else if (newCharCode < 97) {
                newCharCode += 26
            }
        } else {
            newCharCode = currentCharCode
        }

        let newChar = String.fromCharCode(newCharCode)
        encryptedText += newChar

        //encryptedText += String.fromCharCode(newCharCode)
    }
    //return encryptedText
    let resultContainer = document.getElementById('result-container')
    resultContainer.innerText = encryptedText
   
}

function isCapitalLetter(charCode) {
    return charCode >= 65 && charCode <= 90
}

function isLowerCaseLetter(charCode) {
    return charCode >= 97 && charCode <= 122
}


//console.log(ceasarsCipher('ABC', 1))

//console.log(String.fromCharCode(65))
//ceasarsCipher('ABC',1)



// 'A' , 26, 'A'
// 'A' , 27, 'B'
// 26 % 26 === 0
// 25 % 26 === 25 !!!!!!!!!!
// 27 % 26 === 1
// 28 % 26 === 2


