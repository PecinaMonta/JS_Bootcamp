function findSum(numbers) {
    let sum = 0
    //for (let i = 0; i < numbers.length; i++) {
    //    sum += numbers[i]
    //}
    for (let nr of numbers) {
        sum += nr
    }
    return sum
}
console.log(findSum([1, 5, 10]))


////////////////////////////////

let hundredNumbers = ''
for (let i = 0; i <= 100; i++) {
    hundredNumbers += i + ','
}
console.log(hundredNumbers)


///////////////////////////////


//bitshifting with << or >>

let nr = 8
let shifted = nr >> 2
console.log(shifted)

////////////////////////////



let arr = [1, 9 , 5] // sort
arr.sort(function(a, b) {
    return b - a
})
console.log(arr)

////////////////////////////

function greetEveryone(names) {
    //for (let i = 0; i < names.length; i++){
    //    console.log('Hello ' + names[i])
    //}

    for (let name of names) {
        console.log('Hello ' + name)
    }
}

greetEveryone(['Linda', 'Anna', 'Zane'])

////////////////////////////

//let arr = [1, 2, 3]

class Array {
    constructor(){
        this.collection = []
    }
    at(index) {// method with argument
        return this.collection[index]
    }

    push(el) {
        this.collection.push(el)
    }

    // Selection sort
    // [9, 4, 1, 5]
    selectionsort() {
       
        for (let i = 0; i < this.collection.length; i++) {
            let min = this.collection[i] 
            let ri = -1
            for (let j = i + 1; j < this.collection.length; j++) {
                if (this.collection[j] < min) {
                    min = this.collection[j]
                    ri = j
                }
            }
            if (ri !== -1) {
                let replacable = this.collection[i]
                this.collection[i] = min
                this.collection[ri] = replacable
            }
        }
    }

    //Bubble sort
    //bubbleSort() {
    //    let sorted = true
    //    for (let _ = 0; this.collection.length - 1; _++) {
    //         for (let i = 0; i < this.collection.length - 1; i++) {
    //             if (this.collection[i] > this.collection[i + 1]) {
    //                let original = this.collection[i]
    //                this.collection[i] = this.collection[i + 1]
    //                this.collection[i + 1] = original
    //                sorted = false
    //           }
    //        }
    //    }
    //}   
}

let myArray = new Array()
myArray.push(9)
myArray.push(4)
myArray.push(1)
myArray.push(5)
console.log(myArray)
myArray.sort()
console.log(myArray)





// [1, 5, 9, 4, 2]

// 1 cycle
    // min = 1
// 2 cycle
    // min = 2 [1, 2, 5, 9, 4]
// 3 cycle
    // min = 4 [1, 2, 4, 5, 9]


let firstArray = new Array()
let secondArray = new Array()

//firstArray.collection.push(1)
//secondArray.collection.push(5)

//firstArray.push(2)


//////////////////////////

function printArguments(...args) { // if we dont know how many arguments, then we do triple dot and args
    for (let arg of args) {
        console.log(arg)
    }
}

printArguments(1,2, 5, 1, 2, 43, 525)

///////////////////// 
function findMin(numbers) {
    let min = null
    for (let nr of numbers) {
        if (!min) { // if not min then
            min = nr
            continue
        }
        if (nr < min) { // if nr is smaller than min, then
            min = nr
        }
    }
    return min
}

console.log(findMin([5, 7, 1]))


//Static methode

class Dog { 

    eat() {
        console.log('nom nom nom')
    }
    static talk() {
        console.log('Woof')
    }
}

//let dog = new Dog()
//dog.talk()

Dog.talk()