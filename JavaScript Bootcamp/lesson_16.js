function findSum(arr) {
    let sum = 0
    //for (let i = 0; i < arr.length; i++) { // sum = 0; sum += 1; ...
    //    sum += arr[i]
    //}
    for (let nr of arr) { // shorter and faster to write
        sum += nr
    }
    return sum
}

console.log(findSum([1,2,3])) // should return 6

///////////////////////////////////////////

/*

*/

function reverseString(text) {
    let reversedText = ''
    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text[i]
    }
    return reversedText
}

console.log(reverseString('ABC'))


////////////////////////////////////

function sumOfPowers (arr, power) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], power)
    }
    return sum

}

console.log(sumOfPowers([1,2,3],2)) // 14

//////////////////////////


let numbers = [5, 3, 2, 4, 1]
//numbers.sort()
//console.log(numbers)
function sortFunction(a, b) {
    return b - a
}
numbers.sort(sortFunction)
console.log(numbers)


let words = ['A', 'DAAV', 'BTHgWR', 'DSE']
words.sort(function(a, b) {
    return a.length - b.length
})
console.log(words)

////////////////////////////////

let nrs = [1, 4, 7, 8, 9, 12, 13, 15, 16]

    for (let i = 0; i < nrs.length; i++) {
        nrs[i] = nrs[i] * 2
    }
console.log(nrs)


nrs = nrs.map(function(nr) {  // same as: nrs = nrs.map((nr) => {return nr * 3})
    return nr * 2
})
console.log(nrs)


nrs = nrs.filter(function(nr) {
    return nr % 2 === 0
})
console.log(nrs)


nrs = nrs.map((nr) => {return nr * 3})
    .filter((nr) => {return nr % 2 === 0})
    .sort((a, b) => {return b - a})
console.log(nrs)



////////////////////////////////

function func(limit) { //recursion: funcions calls itself
    if (limit < 0) {
        return
    }
    console.log(limit)
    func(limit - 1)
}
func(10)
    // func(10)
        // func(9)
            // func(8)
                // .... and so on

/////////////////////

function fibonacci(n) {

    let firstNumber = 0
    let secondNumber = 1
    let currentNumber = firstNumber + secondNumber
    for (let i = 2; i < n; i++) {
        currentNumber = firstNumber + secondNumber
        firstNumber = secondNumber
        secondNumber = currentNumber
    }
    return currentNumber
}

console.log(fibonacci(8))

////////////////////////

function fibonacciRecursive(n) {
    if (n <= 1) {
        return n
    }

    return fibonacciRecursive(n-2) + fibonacciRecursive(n-1)
}

fibonacciRecursive(10)