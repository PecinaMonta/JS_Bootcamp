function add(a, b) {
    return a + b
}

//from class you create objects/instances
class Rectangle {
    constructor(size) {
        this.size = size
    }
    constructor(size, color) {
        this.size = size
        this.color = color
    }

    draw() {

    } 
}




let rectangle = new Rectangle(10)
let rectangleTwo = new Rectangle(20)

let redRectangle = new Rectangle(30, 'red')



//let rectangle = {
   // color: 'red',
   // size: 12,
    //getArea: function() {
  //      return 0
   // }
//}

//let otherRectangle = {
  //  color: 'green',
  //  size: 12,
  //  getArea: function() {
  //      return 0
  //  }
//}

//Encapsulation
//Inheritane
//Polymorphism

class Animal { //parent class

    constructor(age, color, weight) {
        this.age    = age
        this.color  = color
        this.weight = weight
    }
    talk() {
        return 'The animal makes some sounds...'
    }
}


class AnimalWithBreed extends Animal {

    constructor(age, color, weight, breed) {
        super(age, color, weight)
        this.breed = breed
    }
}


class Dog extends AnimalWithBreed { // child to class Animal

    constructor(age, color, weight, breed) {
        super(age, color, weight, breed) // call constructor from Animal class with super
    }
    talk() {
        return 'Woof!'
    }

    rideOnHippo(hippo) {
        let hippoSound = hippo.talk()
        if (!hippo.isPeaceful) {
            hippo.isPeaceful = true
        }
        console.log('Hippo makes sound ' + hippoSound)
        console.log('The dog makes sound ' + this.talk())
        console.log('Everyone is happy everafter!')
    }
}

let dog = new Dog(15, 'Rottweiler')
console.log(dog.talk())
console.log(dog.breed)


class Hippo extends Animal {

    constructor(age, color, weight, isPeaceful) {
        super(age, color, weight) // call constructor from Animal class with super
        this.isPeaceful = isPeaceful
    }

    talk() {
        return 'GROWOWOWOLL!!!'
    }
}

class Cat extends AnimalWithBreed{

   constructor(age, color, weight, breed, hasClaws) {
        super(age, color, weight. breed) // call constructor from Animal class with super
        this.hasClaws = hasClaws
    }

    talk() {
        return 'Meow'
    }
}


class Direction {
    constructor(dir) {
        this.dir = dir
    }
}

//let dir = new Direction('Direction')

class CareGiver {

    constructor(name, age, yearsOfExperience) {
        this.name = name 
        this.age = age
        this.yearsOfExperience = yearsOfExperience
    }

    introduce() {
        return `Hello My name is ${this.name}, and I am ${this.age} years old.\nI have ${this.yearsOfExperience} years of experience.`
    }
}

class careGiverInfo {// class are one in each file not in one file
    constructor(personName, personAge, personYearsOfExperience) {
        this.personName = personName
        this.personAge = personAge
        this.personYearsOfExperience = personYearsOfExperience
    }
}


class NationalPark {

    constructor(name) {

        this.name

        this.southHabitat = []
        this.westHabitat  = []
        this.northHabitat = []
        this.eastHabitat  = []
        this.unassignedAnimals = []

        this.availableCaregivers = []
        this.busyCaregivers = []
    }

    assignCaregiverToPark(careGiverInfo) { // pass object to a function

        let careGiver = new CareGiver(careGiverInfo.personName, careGiverInfo.personAge, careGiverInfo.personYearsOfExperience)
        this.availableCaregivers.push(careGiver)
    }

    putAnimalToHabitat(dirObject, animal) {
        let dir = dirObject.dir.toUpperCase()
        let caregiver = this.availableCaregivers.pop()
        if (!caregiver) {
            console.log('No available caregivers')
            return
        }
        this.busyCaregivers.push(caregiver)


        switch(dir) {
            case 'North':
                this.northHabitat.push(animal)
                break
            case 'South':
                this.southHabitat.push(animal)
                break
            case 'West':
                this.westHabitat.push(animal)
                break
            case 'East':
                this.eastHabitat.push(animal)
                break
            default: 
            this.unassignedAnimals.push(animal)
        }
        console.log(`Animal of color ${animal} is put into the ${dir} habitat`)
    }

}

let np = new NationalPark('Yellow Stone')

let careGiverInfoOne = new careGiverInfo('Albert', 70, 33)
let careGiverInfoTwo = new careGiverInfo('Hoffman', 60, 55)
np.assignCaregiverToPark(careGiverInfoOne)
np.assignCaregiverToPark(careGiverInfoTwo)

let dog = new Dog(10, 'brown', 20, 'Bloodhound')
let cat = new Cat(5, 'white', 10, 'Šiam', true)
let hippo = new Hippo(40, 'gray', 15, true)
np.putAnimalToHabitat(new Direction('north'), dog)
np.putAnimalToHabitat(new Direction('north'), cat)
np.putAnimalToHabitat(new Direction('south'), hippo)



let catGarden = []
const MIN_AGE = 1
const MAX_AGE = 20
for (let i = 0; i < 10; i++) {
    let randomAge = Math.floor(Math.random() * MAX_AGE) + 1
    let cat = new Cat(randomAge)
    catGarden.push(cat)
}

console.log(catGarden)


let hippoOne = new Hippo(false)
let dogOne = new Dog(15, 'Chhuahahha')
//dogOne



let canvas = document.getElementById('myCanvas')
let ctx = canvas.getContext('2d')


const CENTER_POINT = {
    X: canvas.width / 2,
    Y: canvas.height / 2 
}

let currentPos = CENTER_POINT
ctx.beginPath()
//let step = 20
//for (let i = 0; i < 500; i++) {
//    let firstStep = step
//    ctx.moveTo(currentPos.X, currentPos.Y)
//    ctx.lineTo(currentPos.X, currentPos.Y - step)
//    ctx.lineTo(currentPos.X + step, currentPos.Y - step)
//    step += 10
//    ctx.lineTo(currentPos.X + firstStep, currentPos.Y - step + step)
//   ctx.lineTo(currentPos.X + firstStep - step, currentPos.Y)
//    step += 10
//   currentPos = {X: currentPos.X + firstStep - step, Y: currentPos.Y + step}
//    ctx.stroke()
//}

//ctx.beginPath()
//ctx.moveTo(0, 0)
//ctx.lineTo(800, 600)
//ctx.moveTo(0, 600)
//ctx.lineTo(800, 0)
//ctx.stroke()


//ctx.arc(CENTER_POINT.X, CENTER_POINT.Y, 100, 0, 2 * Math.PI, false)
//ctx.stroke()

class Circle {

    constructor(middleX, middleY, radius, startAngle, endAngle, counterClockwise) {
        this.middleX = middleX
        this.middleY = middleY
        this.radius = radius
    }

    setColor(color) {
        this.color = color
    }

    draw() {
        ctx.beginPath()
        if (this.color) {
            ctx.fillStyle = 'red' // color dont work
        }
        ctx.arc(this.middleX, this.middleY, this.radius, 0, 2 * Math.PI, false)
        ctx.fill()
        ctx.stroke()
    }
}

//let circleOne = new Circle(100, 300, 50)
//circleOne.draw()

for (let i = 0; i < 100; i++) {
    let randomX = Math.floor(Math.random() * canvas.width)
    let randomY = Math.floor(Math.random() * canvas.height)
    let randomRadius = Math.floor(Math.random() * 100)
    let circle = new Circle(randomX, randomY, randomRadius)
    circle.draw()
}