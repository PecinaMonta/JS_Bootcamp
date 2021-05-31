// // NODARBIIBA 13.04.2021
// /* angle brackets <><><> */

// console.log("Hello, World!"); // string is any text     log is a function that takes single argument .... iekavas parenthessis un "" quatation marks
// let current_year = 2021; // let creates variable so computer can remeber, for example Integer: 1,2,3 500, -205
// console.log(current_year); // šī lnija saucās Statement un pēc viņa likam semikolu, kaut arī js var nelikt, bet labāk likt
// let current_month = "april"; // string - text ... var vairs nelieto
// console.log(current_month);
// let year_that_was_five_years_ago = 2021 - 5;
// console.log(year_that_was_five_years_ago);
// let ten_years_ago = current_year - 10;
// console.log(ten_years_ago);

// let pi = 3.14; // floating point number, 3.14, 3214.52, 50.0 any number with comma
// let Pi = 3.14; // divas dažādas vērtības. var ar lielajiem, parasti variable names sāk ar mazajiem, bet labāk iesākt visu ar mazajiem
// // 2 * pi * radius
// let radius = 7;
// let circle = 2 * pi * radius;
// console.log(circle); 

// let a = 10; // ja es vēlreiz nodefinēšu let a = 34, tad būš error, var mainīt tikai vērtību pa taisno bez let.
// let b = 5;
// let c = a + b;
// console.log(c);  //15
// c = 1337; // ja variable ar c jau vienreiz ir nodefinēts, tad otrreiz var nerakstīt let priekšā, ja grib nomainīt vērtību
// console.log(c);  // 1337

// let z = 5; // multiply
// let y = 10;
// let h = z * y;
// console.log(h); // 50

// let d = 20; //division
// let q = 2;
// console.log(d / q); // 10 ....   cntrl + / = komentārs pievienojas visiem iezīmētajiem

// let ten_to_the_power_of_two = 10 ** 2; // labāk lietot _2 vietā tekstu two, lai nav cipari.. tekstā, nevar sakt variable ar cipariem, variable nosaukumos nevajag likt ciparus
// console.log(ten_to_the_power_of_two); // 100

// // camelCase ir let myName or helloWorld etc.   THE BEST to use
// // underscored ir my_name or hello_world etc.

// const abc = 'he"llo'; // constant, konstanta vērtība, var piešķirt tikai vienu reizi, cant reasign const variable; for string use single or double quatiton
// let escape_one = 'Quotation mark \''; // escaping a character
// console.log(escape_one);
// const greeting = "he\"llo"; // escaping a character
// const greeting2 = "he'llo"; 
// console.log(greeting);
// console.log(greeting2);

// // Booleans only true (1) or only false (0)
// let i_am_teaching = true;
// let you_are_listening = true;
// console.log(i_am_teaching);
// console.log(you_are_listening);

// // || represents OR operation
// let i_am_teaching_or_you_are_listening = i_am_teaching || you_are_listening; // true and true
// console.log(i_am_teaching_or_you_are_listening);

// // && represents AND operation
// let well_fed = false;
// let inspired = true;
// let happy = well_fed && inspired;
// console.log(happy);

// // !happy represents invertor reading as NOT happy; we just need one bollean answer
// let angry = !happy;
// console.log(angry);

// console.log(!true);
// console.log(!false);

// console.log(5 * "100"); // smart enough to make aritmetic ... 
// console.log("200" + 100); // converts into string

// let first_name = "Pecina";
// let last_name = 'Monta';
// let full_name = last_name + " " +  first_name;
// console.log(full_name); // sting concatenation is basically an addition of sting


// // log is a function which is already made takes a single argument.°
// // function has some functionality
// // 

// //defining function; how to greet someone, describing step
// function greet() { // function is called or named greet (any way we want)
//     console.log('Hello World!') //function says hello world
// }
// // calling a function
// greet();

// //let name = 'janis'; // defined variable
// function greetingwithwho(name) { // name is an argument or parameter, talking of those only in functions
//     console.log('Hello, ' + name + '!')
// }
// greetingwithwho('Janis');



// boilEggs(); 
// function boilEggs() {
//     putWaterBoiling();
//     putEggsIntoTheWater();
//     wait();
// }
// function putWaterBoiling() {
//     console.log("Water is boiling!");
// }
// function putEggsIntoTheWater() {
//     console.log("Putting Eggs!");
// }
// function wait() {
//     sing();
// }
// function sing() {
//     console.log("LA LA LA");
// }


// let j = 2 + 3; //5ci

// function add(j, k) { // burti vienādi, bet šeit nekad nebūs 5ci, bet gan tas ko mēš ieliekam fukcijas izsaukšanā iekavās
//     console.log(j + k); 
// }
// add(10, 5);

// function subtract(j, k) { // burti vienādi, bet šeit nekad nebūs 5ci, bet gan tas ko mēš ieliekam fukcijas izsaukšanā iekavās
//     console.log(j - k); 
// }
// subtract(10, 5);

// // object (or container) with 4 keys and 4 values
// let nameMeObject =  {
//     firstMe: "Es", // key and a value
//     lastMe: "You", // key and a value
//     height: 190, // key and a value
//     hairColour = "brown" // key and a value
// }

// console.log(nameMeObject.height); // printing value of key height with log function
// console.log(nameMeObject.lastMe);



// // NODARBIIBA 15.04.2021 Lesson 3 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// //Global scope - vispārīgi novietoti, jo deklarēti vispārīgi, to var dabūt jebkurā scope


// let someObject = { // variable -> someObject
//     firstName: "Some name", // atribute -> value || key -> value
//     lastName: "Some last name"
// } // šeit iekšā ir nodefinēti local scope

// let name = someObject.firstName // Some name
// console.log(name)
// let lastName = someObject["lastName"] // Some last name

// let number = 5;
// { // curly brackets
// let number = 5;
// number = 6
// } // šeit iekšā ir nodefinēti local scope

// console.log(number)


// let number = 9;
// { // curly brackets
// let number = 11;
// console.log(number)
// } // šeit iekšā ir nodefinēti local scope


// let number = 9;
// { // curly brackets
//     let number = 11;
//     {
//         let number = 20;
//     }
//     console.log(number)
// } // šeit iekšā ir nodefinēti local scope


// function multiplyNew(a, b) { 
//         console.log(a  * b)
// }
// multiplyNew(100, 3)

// // Multiply
// function multiplyNew(a, b) { 
//     let result = a * b
//     return result
// }
// let res = multiplyNew(600, 2)
// console.log(res)


// // ADD
// function addNew(a, b) { 
//     return a + b
// }
// let res = addNew(400, 9)
// console.log(res)

// // Subtract
// function subNew(a, b) { 
//     let result = a - b
//     return result
// }
// let resOfSubtract = subNew(400, 9)
// console.log(resOfSubtract)

// // Divide
// function divNew(a, b) { 
//     let res = a / b
//     return res
// }
// let resOfDivide = divNew(400, 9)
// console.log(resOfDivide)



// // OPERATORS BOOLEANS - BOOLEAN VALUE
// //AND &&
// let someVar = true
// let v = true && true // true
// let y = true && false // false

// //OR ||
// let otherVar = false
// let zz = someVar || otherVar // true

// //NOT !
// let bb = !otherVar // bb = true

// // > greater than
// 5 > 3 // true

// // < smaler than
// 10 < 2 // false

// // >= greather or equal thn
// 10 >= 0 + 10 // true

// // <= smaler or equal than
// let q =5 
// q <= 5 * 5 // true

// // = assignment // dont work for comarison
// let ff = 'ABC'

// // == to compare two values or ===
// 5 == 5 // true
// 5 === 5 // true
// 5 === '5' // tree === comperes values and types of the values!!!

// // != or !==  not equals
// 10 != 5 * 5 //true
// 3 !== 9 // true

// let u = 10
// u = u + 2 // 12
// u += 2 //14

// let r = 100
// r = r - 2 // 98
// u -= 2 // 96

// let mm = 5
// mm = mm * 5 // 25
// mm *= 2 // 50

// let ppp = 5
// // ++ incrementing
// ppp = p + 1 // 6
// ppp += 1 // 7
// ppp++ // 8
// ++ppp // 9

// // -- decrementing
// // the same as incrementing just with minuss symbol

// // create animal object
// let animal = {
//     name: "Good doggo",
//     color: "White and black",
//     height: 100,
//     pet: function(){ // this is a method is a function inside of an object
//         console.log('The dog feels good when you pet it.')
//     },
//     feed: function(food){ // this is a method is a function inside of an object
//         console.log("The dog is very much enjoying eating " + food)
//         return true
//     }
//  }

//  animal.name
//  animal["name"]
//  animal['name']
//  animal.color
//  animal.height

//  animal.pet() // calling funcion pet which belongs to the object of animal
//  let animalIsHappy = animal.feed("sausages") 

//  //Conditional statements
//  //Branching

//  if (true) { //scope of the if statement // scope represents curly braces
//      console.log('Hello!')
//  }

//  if (5 === 5) {  
//     console.log('Hello!') // true
// } else {
//     console.log('OOOOO!!') // not printing
// }

// if (true && false) {  
//     console.log('IF!')  // not printing
// } else if {
//     console.log("ELSE IF one!") // we can whrite as many else if blocks as we want
// } else if (10 == 10) {
//     console.log("ELSE IF second!") // we can whrite as many else if blocks as we want
// }  else {
//     console.log('ELSE!') // false
// }



// let boolOne = false
// let boolTwo = true
// if (boolOne && boolTwo) {  // false, so we skip this block
//     console.log('IF!') 
// } else if (boolOne || boolTwo) {
//     console.log("ELSE IF!") // true, so this will be printed
// } else {
//     console.log('ELSE!') // so skip this else block
// }


// let boolOne = false
// let boolTwo = true
// let boolThree = false
// if ((boolOne || boolTwo) && boolThree) {  // false, so we skip this block
//     console.log('IF!') 
// } else if (boolOne || boolTwo) {
//     console.log("ELSE IF!") // true, so this will be printed
// } else {
//     console.log('ELSE!') // so skip this else block // if all uper statements are false, than this last else will always be executed
// }


// if (true) { // branching alwawys starts with if !!!! and then whatever - else if or else or both
//     console.log('FIRST BLOCK!') 
// } 
// if (true) {
//     console.log('SECOND BLOCK!')
// } else if (5 >= 5) {
//     console.log("HORRAY!") 
// } else {
//     console.log('DONE') 
// }


// let a = "abc"
// let b = a.lenght // izprintēsies 3, jo ir 3 burti - letters
// console.log(b.length + 10) // 13

// // String is an bject, object has methods/properties
// let animals = 'Cat'
// // [] square brackets
// let firstLetter = animal[0]
// console.log(firstLetter)

// let secondLetter = animal[1]
// console.log(secondLetter)

// console.log(animal.indexOf('t'))


// let planet = "neptune"
// console.log(planet[0])
// console.log(planet[5])

// console.log(planet.indexOf('n'))
// console.log(planet.lastIndexOf('n'))
// console.log(planet.indexOf('n', 1)) // sāk skaitīt no e burta, n jeb 0 neņem verā
// console.log(planet.toUpperCase())
// let newWord = planet.slice(2) // slice ir string metode
// console.log(newWord)
// let otherWord = planet.slice(2,5) // index 5 is not included
// console.log(otherWord)

// let combined = otherWord[0] + planet[1] + newWord[0]
// console.log(combined)
// console.log(otherWord == combined)
// console.log(otherWord.length == combined.length)

// console.log("abc" === "abc")
// console.log("abc" != "abc")
// console.log("abc".toUpperCase() == "ABC")
// console.log("abc" == "ABC".toLowerCase())

// let WW = 'ABC' // lai pēdējo indexu vārdam dabūt var šādies rīkoties
// console.log(WW[2])
// console.log(WW.slice(-1))
// console.log(WW.length)

// let goodbye = "BYE, byyye"
// console.log(goodbye)
// goodbye = goodbye.replace('BYE', 'SEE YOU') // nomaina BYE uz SEE YOU, case sensitive
// console.log(goodbye)

// let a = "hello\n\nworld" // \n new line
// console.log(a)


// // Arrays - boxes, containers 

// let someObj = {
//     someProperty: 'someValue'
// }
// let a = 'abc'
// let b = 5
// let arr = [a, b, 'QQ', true, false, someObject] // belong to same array, array is an object in other words box, container, object has methods and properties
// console.log(arr.length)
// let arrLenght = arr.length
// console.log(arr[0])

// console.log(arr[5].someProperty)

// arr.push('Latest value') // methode vai funkcija kas pieder arr 
// console.log(arr[6])
// arr. pop() // doesnt take arguments

// console.log(arr[6])


// let numbers = [1,2,3,4,5]
// numbers.pop()
// console.log(numbers)

// numbers[0] = 100
// console.log(numbers[0])
// console.log(numbers)

// delete numbers[0]
// console.log(numbers)


// // For-loop
// for (let i = 0; i < 10;) {// variable i and assign value 0, condition // true
//     console.log(i) // body of the loop, code that is repeated
// }// local to loop, not global, starting loop and assigning to 0, run until this condition becomes false // printēš 0 lidz bezgalībai, jo infnite loop

// // For-loop
// for (let i = 0; i < 10; i++) {// variable i and assign value 0, condition // true
//     console.log(i) // body of the loop, code that is repeated
// }// local to loop, not global, starting loop and assigning to 0, run until this condition becomes false // printēš 0 lidz 9

// // start i = o
// // is 0 < 10 ? yes!
// // conso

// let names = ['Anna', 'Ance', 'Linda'] // iterating over values of the array
// // console.log(names[0])
// // console.log(names[1])
// // console.log(names[2])
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }

// // For/Of Loop // šis iet cauri katram elementam un viss
// for (element of names) {
//     console.log(element)
// }

// let numbers = [100, 500, 1000, 500]
// // let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3]
// let sum = 0
// for (nr of numbers) {
//     sum += nr // same as sum = sum + nr
// }

// let newNumbers = [1,2,3,4,5]
// let ssum = 0
// for (let i = 0; i < newNumbers.length; i++) {
//     ssum = ssum + newNumbers[i] // or ssum += newNumbers[i]
// }

// //WHILE Loop, run while condition is true
// while (5 === 5) {
//     console.log("Hello!") // will run forever
// }
// while (5 === 4) {
//     console.log("Hello!") // wont run
// }

// let i = 0
// while(i < 10) {
//     console.log(i)
//     i++
// }




//19.04.2021 Lesson 4 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let someNumber = 5;
someNumber = 7; // reasign value to someNumber, no need to write let, there will be error

let isSunny = true
let isSpring = true
let isRaining = false
let isHumid = true
let isSummerSoon = isSunny && isSpring // And operator // true
let isGoingToBeThunder = isRaining || isHumid // OR operator // ture

//branching always starts wit if!!!!
if (!isSummerSoon){ // false // scope. prints scope only if its true
    console.log('Lets get the beach bdy ready') // if we change to false, than noting prints out
} else if (!isGoingToBeThunder) { // false
        console.log('Im going to need my umbrella')
} else if (5 === 5) {
    console.log('hi!')
} else { // if all abowe is false, then else always execute
    console.log('What is the weather then?')
}


for (let i = 0; i < 10; i++) { // i++ is the same as i = i + 1 or i += 1
    console.log(i)
}

for (let k = 0; k < 10; k += 2){ // k = k + 2
    console.log(k)
}

let seasons = ['Winter', 'Spring', 'Summer', 'Autumn']
    console.log(seasons.length)
    console.log(seasons)
    console.log(seasons[1])

    seasons[1] = 'The season of the flowers' // swap Spring to smething else
    console.log(seasons)

for (let i = 0; i < seasons.length; i++){
    console.log(seasons[i])
}


// for-of loop
for (element of seasons){
    console.log(element)
}


let numb = [1 ,2 ,3 ,4 ,5]
let sum = 0 // we have to have some place to sum them, so we have to define start element
for (nr of numb){
    sum += nr
}
console.log(sum)

let text = "This is some text here are some more words"
let word = text.slice(8, 12)
//console.log(word)

let textSplit = text.split(' ')// separator space
console.log(textSplit) // Split is a method
console.log(textSplit[2])

let otherText = 'ABC-DEF-GFED' // separator hyphen - 
console.log(otherText[0])
let otherTextSplit = otherText.split('-')
console.log(otherTextSplit[0])


// Modulo operator %

let z = 5 % 2 // 1
let j = 13 % 5 // 3
let o = 15 % 5 // 0

18 // even number
19 // odd number
20 // even number

function isEven(number) {
    return number % 2 === 0 // to check if number is even
}
console.log(isEven(15))
console.log(isEven(18))


//alert('Warning!') //function
let age = prompt('How old are you?') // ask
console.log(age)

if (age < 18) {
    alert('You are not adult yet!')
} else {
    alert('You are an adult!')
}

// GAME GAME GAME PROMT ALERT
let age = prompt('How old are you?')
let enteredTheCasino = false

if (age < 21) {
    console.log('You cannot enter the casion!')
} else {
    console.log("Time to gamble!")
    enteredTheCasino = true
}

if (enteredTheCasino) {
    let machineChoice = prompt('Do you want to use the betting machine (B) or roullette (R) ?')

    if (machineChoice === "B"){
            alert("you play on betting machine")
    } else if (machineChoice === "R") {
        alert('play roulette')
    } else {
        alert('user not here smoking')
    }
}


//HOMEWORK 15.05.2021 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/**
 * Homework Exercises 15.04.
 */


// Given a string name, e.g. "Johnny", return a greeting of the form "Hello, Johnny!".
function personalGreeting(name) {
    return 'Hello, ' + name + '!'
}
// // Uncomment next line (Ctrl+/) and run the program. Comment it back once the function is working as intended.
console.log(personalGreeting('Geralt')) // This should print 'Hello, Geralt!' to the console


// // Given current year and the year of birth, return how old the person in.
function calculateAge(currentYear, yearOfBirth) {
   return currentYear - yearOfBirth
}
console.log(calculateAge(2021, 1990)) // 31
console.log(calculateAge(2000, 1960)) // 40


// // Swap values a and b by creating a third variable
let a = 5
let b = 3
let c = a 
a = b
b = c
console.log(a) // 3
console.log(b) // 5


// // Given three parameters, add the first two together and subtract the third one. Return the result.

function addSubtract(first, second, third) { // burti vienādi, bet šeit nekad nebūs 5ci, bet gan tas ko mēš ieliekam fukcijas izsaukšanā iekavās
    return first + second - third; 
}
console.log(addSubtract(1, 2, 3))     //  0
console.log(addSubtract(-10, 10, -5)) // 5


// // Create an object and save it to a variable named 'circle'
// // Assign value 10 to property named radius.
// // Create a method getArea() that will return the area of the circle ( 2 * 3.14 * radius ).

let circle = {
   radius: 10,
   color: 'red',
// function inside the object is called method!!!
    getArea: function() {  //method 
       return 2 * 3.14 * this.radius // when we are inside object... jaliek this lai dabutu savadak buus error
   },
   getColor: function() { 
      return this.color
   }    
}
console.log(circle.getArea().toFixed(1)) // 62.8 // toFixed 1 deciamal after 
circle.getColor() === circle.color === circle['color']

// // The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation.
// // We can turn off the alarm clock if it is not a weekday or we're on vacation. Return true if we turn off the alarm clock.
function turnOffAlarmClock(isWeekDay, isVacation) {
    // if (!isWeekDay) {
    //     return true
    // } else if (isVacation) {
    //     return true
    // } else {
    //     return false
    // }
    return !isWeekDay || isVacation // become true, the same as all the lines above
}
console.log(turnOffAlarmClock(false, false)) // true
console.log(turnOffAlarmClock(true, false))  // false
console.log(turnOffAlarmClock(false, true))  // true


// // Given 2 integer values, return True if one is negative and one is positive.
// // Except if the parameter "negative" is True, then return True only if both are negative.
function positiveNegative(first, second, negative) {
    if (negative) { // false
        return first < 0 && second < 0
    } else { // false
        return (first > 0 && second < 0) || (first < 0 && second > 0) // false || false
    }
}
console.log(positiveNegative(-7, -5, false)) // false
console.log(positiveNegative(1, 1, false))   // false
console.log(positiveNegative(1, -1, false))  // true
console.log(positiveNegative(-1, 1, false))  // true
console.log(positiveNegative(-4, -5, true))  // true
console.log(positiveNegative(-4, -5, false)) // false


// // Given a string, return true if the string starts with "Summer" and false otherwise.
function startsWithSummer(text) {
    // return text.startsWith('Summer')      // the best way!!!
    let firstSixLetters = text.slice(0, 6) // six is not included 
    return firstSixLetters === 'Summer' //
}
console.log(startsWithSummer('Summer is not that far away!')) // true
console.log(startsWithSummer('Sum of two variables')) // false
console.log(startsWithSummer('Summerwood is somewhere north from here')) // true
console.log(startsWithSummer('summertimes vs Summertimes')) // false


// // We'll say that a number is "teen" if it is in the range 13..19 inclusive.
// // Given 3 integer values, return true if 1 or more of them are teen.
function isTeen(first, second, third) {
    return (first >= 13 && first <= 19) || (second >= 13 && second <= 19) || (third >= 13 && third <=19)
}
console.log(isTeen(13, 20, 10)) // true
console.log(isTeen(20, 19, 10)) // true
console.log(isTeen(20, 10, 13)) // true
console.log(isTeen(10, 12, 20)) // false


// // Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie.
// // Note that Math.abs(n) returns the absolute value of a number.
function closeToTen(a, b) {
    let distanceA = Math.abs(10 - a)
    let distanceB = Math.abs(10 - b)
    if (distanceA < distanceB) {
        return a
    } else if (distanceB < distanceA) {
        return b
    } else {
        return 0
    }
}
console.log(closeToTen(8, 13)) // 8
console.log(closeToTen(13, 8)) // 8
console.log(closeToTen(13, 7)) // 0


// // Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.
function mixStart(s) {
   let firstTwoCharacters = s[1] + s[2] // let firstTwoCharacters = s.slice(1, 3)
   return firstTwoCharacters === 'ix'
}   
console.log(mixStart("mix snacks")) // true
console.log(mixStart("pix snacks")) // true
console.log(mixStart("piz snacks")) // false


// // For the first parameter a 4-letter string is provided, for the second parameter a string of length >= 1.
// // Calling the function with '<<>>' for the first and 'Daisy' for the second parameter, it will return '<<Daisy>>'
function makeOutWord(pattern, text) {
    return pattern[0] + pattern[1] + text + pattern[2] + pattern[3]
    //return pattern.slice(0, 2) + text + pattern.slice(2, 4)
}
console.log(makeOutWord('<<>>', 'Yay'))    // '<<Yay>>'
console.log(makeOutWord('<<>>', 'WooHoo')) // '<<WooHo>>'
console.log(makeOutWord('[[]]', 'word'))   // '[[word]]'


// // Given three integers, a b c, return true if it is possible to add two of the ints to get the third.
function twoAsOne(a, b, c) {
    return  (a + b === c) || (a + c === b) || (b + c === a)
}
console.log(twoAsOne(1, 2, 3)) // true
console.log(twoAsOne(3, 1, 2)) // true
console.log(twoAsOne(3, 2, 2)) // false


// //Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.
function omitFirstLetterAndConcatenate(first, second) {
    return first.slice(1) + second.slice(1)
}
console.log(omitFirstLetterAndConcatenate('Hello', 'There')) //'ellohere'
console.log(omitFirstLetterAndConcatenate('js', 'code'))     // 'sode'
console.log(omitFirstLetterAndConcatenate('shotl', 'java'))   // 'hotlava'


// // Given an array of ints, return true if 6 appears as either the first or last element in the array.
// // The array will be length 1 or more.
function firstLast6(arr) {
    return arr[0] === 6 || arr[arr.length - 1] === 6
}
console.log(firstLast6([1, 2, 6]))        // true
console.log(firstLast6([6, 1, 2, 3]))     // true
console.log(firstLast6([13, 6, 1, 2, 3])) // false


// // Given 2 arrays of ints, firstArr and secondArr, return true if they have the same first element or they have the same last element.
// // Both arrays will be length 1 or more.
function commonEnd(firstArr, secondArr) {
    //let i = firstArr.length - 1  // can but in [firstArr.length - 1] place
    //let j = secondArr.length - 1  // the same
    return (firstArr[0] === secondArr[0]) || (firstArr[firstArr.length - 1] === secondArr[secondArr.length - 1])
}
console.log(commonEnd([1, 2, 3], [7, 3]))    // true
console.log(commonEnd([1, 2, 3], [7, 3, 2])) // false
console.log(commonEnd([1, 2, 3], [1, 3]))    // true


// // Given 2 arrays, a and b, each length 3, return a new array length 2 containing their middle elements.
function middleWay(a, b) {
    return [a[1], b[1]]
}
console.log(middleWay([1, 2, 3], [4, 5, 6])) // [2, 5]
console.log(middleWay([7, 7, 7], [3, 8, 0])) // [7, 8]
console.log(middleWay([5, 2, 9], [1, 4, 5])) // [2, 4]


// // Given an array , return a new array with the elements in reverse order, so [1, 2, 3] becomes [3, 2, 1].
function reverseArray(arr) {
    return 
}
console.log(reverse([1, 2, 3]))  // [3, 2, 1]
console.log(reverse([5, 11, 9])) // [9, 11, 5]
console.log(reverse([7, 0, 0]))  // [0, 0, 7]


// // Given a number array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0.
// // Return the changed array.
// function fix23(arr) {

// }
// // console.log(fix23([1, 2, 3])) // [1, 2, 0]
// // console.log(fix23([2, 3, 5])) // [2, 0, 5]
// // console.log(fix23([1, 2, 1])) // [1, 2, 1]


// // Given a number array, return the sum of all elements
// function findSum(arr) {

// }
// // console.log(findSum([1,2,3]))    // 6
// // console.log(findSum([100,10,1])) // 111


// // We'll say that a 1 immediately followed by a 3 in an array is "lucky" 1.
// // Return true if the given array contains a lucky 1 in the first 2 or last 2 positions in the array.
// function lucky1(arr) {

// }
// // console.log(lucky1([1, 3, 4, 5]))    // true
// // console.log(lucky1([2, 1, 3, 4, 5])) // true
// // console.log(lucky1([1, 1, 1]))       // false


// // Given 2 integer arrays, a and b, of any length,
// // return a new array with the first element of each array. If either array is length 0, ignore that array.
// function front11(arrOne, arrTwo) {

// }
// // console.log(front11([1, 2, 3], [7, 9, 8])) // [1, 7]
// // console.log(front11([1], [2])) // [1, 2]
// // console.log(front11([1, 7], [])) // [1]


// // Return the sum of the numbers in the array, returning 0 for an empty array.
// // Except the number 13 is very unlucky, so it does not count and numbers that come immediately after and 13 also does not count.
function sum13(arr) {
    let sum = 0
    for (number of arr) {
        if (number === 13){
            break
        } 
        sum += number
    }
    return sum
}

console.log(sum13([1,2,3])) // 6
console.log(sum13([1,13,123,500])) // 1
console.log(sum13([13,5,1000000])) // 0
console.log(sum13([])) // 0


// // Prints to the console
// // #
// // ##
// // ###
// // ####
// function marioEasy(height) {

// }
// // marioEasy(4)


// // Prints to the console
// //      #
// //     ##
// //    ###
// //   ####
// // ######
// function marioHard(height) {

// }
// // marioHard(5)
// practice_1.js
// 9 KB
//




// 20.04.2021 NODARBIIIBA!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

