// GAME with prompt and alert by Monta Pecina

let firstName = prompt('Please enter your name: ')
let lastName = prompt('Please enter your surname: ')
let willPlay = prompt('Hello, ' + firstName + ' ' + lastName + '. ' + 'Do you want to play a video game? (YES) or (NO)')

let game = ''
if (willPlay === 'YES') {
    alert('Excellent, I don`t have many video games, but I will tell you your game options.')
    game = prompt(firstName + ', You have to choose which video game you would like to play - Basketball (B), Football (F), Hockey (H) or non of them (NaN) please choose one.')
} else {
    alert('Sorry to hear that, enjoy your free time, go outside and do real-life activities. Have a great day ' + firstName + ' ' + lastName + '!')
}

if (game === 'B') {
    let basketballGame = prompt('Which video game - Euroleague (A) or NBA (B) or (NaN)?')
        if (basketballGame === 'A') {
            alert('Good choice, good luck ' + firstName + ' and let`s play Euroleague basketball!')
        } else if (basketballGame === 'B') {
            alert('Good choice, good luck ' + firstName + ' and let`s play NBA basketball!')
        } else {
            alert('Sorry, I don`t have other basketball video games that you would like.')
        }
} else if (game === 'F') {
    let basketballGame = prompt('Which video game - Premier League (A) or Bundesliga (B) or (NaN)?')
        if (basketballGame === 'A') {
            alert('Good choice, good luck ' + firstName + ' and let`s play Premier League football!')
         } else if (basketballGame === 'B') {
            alert('Good choice, good luck ' + firstName + ' and let`s play Bundesliga football!')
        } else {
            alert('Sorry, I don`t have other football video games that you would like.')
        }
} else if (game === 'H') {
    let basketballGame = prompt('Which video game - NHL (A) or Canadas WHL (B) or (NaN)?')
        if (basketballGame === 'A') {
            alert('Good choice, good luck ' + firstName + ' and let`s play NHL hockey!')
        } else if (basketballGame === 'B') {
            alert('Good choice, good luck ' + firstName + ' and let`s play Canadas WHL hockey!')
        } else {
            alert('Sorry, I don`t have other hockey video games that you would like.')
        }
} else  if (game === 'NaN') {
    alert('Sorry, I don`t have other types of video games that you would like.')
}


// let age = prompt("How old are you?")
// let entered = false

// console.log(age)

// if (age <18) {
//     alert("You are not old enough to enter this site!")
// } else {
//     alert("Let's have a drink!")
//     entered = true
// }   

// if (entered) {
//     let drinkChoice = prompt("Would you like some wine (A) or beer (B)?")
//     if (drinkChoice === "A") {
//         prompt("White (A), red (B) or sparkling (C)?")
//         let wine = prompt("Bottle (A) or glass (B)?")
//         if (wine === "A"){
//             alert("It will be 20Eur")
//             entered = true
//         }else if (wine === "B") {
//             alert("It will be 2Eur")
//             entered = true
//         }else {
//             alert("Sorry, we don't serve that!")
//         }
//     if (entered) {
//         console.log("Thank you for your purchase! Have a nice day and drink again!")
//     }
//     } else if (drinkChoice === "B") {
//         let beer = prompt("Lager (A), PaleAle (B) or dark (C)?")
//         if (beer === "A" || "B" || "C") {  
//             let volume     
//             do  {
//                 volume = prompt("Would you like a bottle (A), case of 24 bottles (B) or a keg (C)?")
//                 if (volume === "A") {             
//                     alert("It will not be enough for you, I'm sure!")
//                 }
//             }while (volume === "A")
//             if (volume === "B") {
//                 alert("It will be 24 euros for a case")
//             }
//             else if (volume === "C") {
//                 let cooler = prompt("Do you want a cooler? (Yes), (No) ") 
//                 if (cooler === "Yes") {
//                     alert("You have chosen cooler and keg!")
//                 }else if (cooler === "No") {
//                     alert("Good choice! Drink warm beer")
//                 }else {
//                     alert("Wrong answer!")
//                 }
//             }else {
//                 alert("You have chosen not to drink beer from our selection! Too bad!")
//             }

//         }else {
//             alert("Sorry, we dont serve that!")
//         }
        
//     }
//     else {
//         alert("Drink water")
//     }
// }



// let passengerName = prompt('Hello passenger, please give us your name')
// alert('Greeting, ' + passengerName + '!' + 'Welcome on flight F8359 to Bali')
// alert('Duration of flight is 5 hours, hope you will enjoy this flight, now please listen safety demonstraction shown by filght attendant')
// let service = prompt(passengerName + ' Did you listen safety demontration by flisht attendant carefully')
// console.log(serviceAnswer)



// if (serviceAnswer === 'YES'){
//     alert('Good! ')
// } else if (serviceAnswer === 'NO'){
//     alert('Dear passenger ' + passengerName + ' please read an safety sheen in front of you in case of unexpected landing, its IMPORTANT!')
// }
// let food = prompt()

// //alert('Warning!') //function
// let age = prompt('How old are you?') // ask
// console.log(age)

// if (age < 18) {
//     alert('You are not adult yet!')
// } else {
//     alert('You are an adult!')
// }

// // GAME GAME GAME PROMT ALERT
// let age = prompt('How old are you?')
// let enteredTheCasino = false

// if (age < 21) {
//     console.log('You cannot enter the casion!')
// } else {
//     console.log("Time to gamble!")
//     enteredTheCasino = true
// }

// if (enteredTheCasino) {
//     let machineChoice = prompt('Do you want to use the betting machine (B) or roullette (R) ?')

//     if (machineChoice === "B"){
//             alert("you play on betting machine")
//     } else if (machineChoice === "R") {
//         alert('play roulette')
//     } else {
//         alert('user not here smoking')
//     }
// }