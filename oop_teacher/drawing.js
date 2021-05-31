
let canvas = document.getElementById('myCanvas')
let ctx = canvas.getContext('2d')


window.onload = function() {

    //spawnSpirals(10)

   // drawSpiral('red', {x: 400, y: 300}, 10, 5, 40)
   // drawSpiral('green', {x: 100, y: 200}, 10, 5, 5)
   // drawSpiral('blue', {x: 600, y: 400}, 10, 3, 20)
}

function spawnSpirals(nrOfSpirals) {

    let colors = ['red', 'yellow', 'pink']

    for (let i = 0; i < nrOfSpirals; i++) {
        let rp = {x: Math.floor(Math.random() * 800),
                  y: Math.floor(Math.random() * 600)} //random position rp
        let ss = Math.floor(Math.random() * 12) + 3 //step size ss
        let gr = Math.floor(Math.random() * 17) + 3 //growth rate gr
        let nc = Math.floor(Math.random() * 45) + 5 //number of cycles nr

        let rc = Math.floor(Math.random() * 2) // random index
        let color = colors[rc]

        drawSpiral(color, rp, ss, gr, nc)
    }

}

class Spiral {
    constructor(color, pos) {}

}

function drawSpiral(color, initialPos, initialStepSize, growthRate, nrOfCycles)  {
    let canvas = document.getElementById('myCanvas')
    let ctx = canvas.getContext('2d')

    let currentPos = initialPos
    let step = initialStepSize
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.moveTo(currentPos.x, currentPos.y)

    for (let i = 0; i < nrOfCycles; i++) {
        currentPos = drawLineAndReturnPosition(ctx, currentPos.x, currentPos.y - step)
        currentPos = drawLineAndReturnPosition(ctx, currentPos.x + step, currentPos.y)
        step += growthRate
        currentPos = drawLineAndReturnPosition(ctx, currentPos.x, currentPos.y + step)
        currentPos = drawLineAndReturnPosition(ctx, currentPos.x - step, currentPos.y)
        step += growthRate

    }
    ctx.stroke()
}

function drawLineAndReturnPosition(ctx, x, y) {
    ctx.lineTo(x, y)
    return {
        x: x,
        y: y
    }
}



//dd



class BaseShape {
    constructor() {

    }


    setVelocity(velocity) {
        this.velocity = velocity
    }

    update() {
        if (this instanceof Rectangle) {
            if ((this.pos.x + this.width > canvas.width) || (this.pos.x < 0)) {
                this.velocity.x *= -1
            } else if ((this.pos.y + this.height > canvas.height) || (this.pos.y < 0)) {
                this.velocity.y *= -1
            }


            this.pos.x += this.velocity.x
            this.pos.y += this.velocity.y
        } else if (this instanceof Circle) {
            if ((this.circleCenter.x + this.radius > canvas.width) || (this.circleCenter.x < 0)) {
                this.velocity.x *= -1
            } else if ((this.circleCenter.y + this.radius > canvas.height) || (this.circleCenter.y < 0)) {
                this.velocity.y *= -1
            }

            this.circleCenter.x += this.velocity.x
            this.circleCenter.y += this.velocity.y
        } else if (this instanceof DoubleCircle) {


            this.circleOne.circleCenter.x += this.velocity.x
            this.circleOne.circleCenter.y += this.velocity.y

            this.circleTwo.circleCenter.x += this.velocity.x
            this.circleTwo.circleCenter.y += this.velocity.y
        } else if (this instanceof Triangle) {
            this.points.a.x += this.velocity.x
            this.points.b.x += this.velocity.x
            this.points.c.x += this.velocity.x

            this.points.a.y += this.velocity.y
            this.points.b.y += this.velocity.y
            this.points.c.y += this.velocity.y
        }
    }
}

//new DoubleCircle().update()

class DoubleCircle extends BaseShape {
    constructor(circleOne, circleTwo) {
        super()
        this.circleOne = circleOne
        this.circleTwo = circleTwo
        
        
        this.circleTwo.circleCenter.y = this.circleOne.circleCenter.y
        this.circleTwo.circleCenter.x = this.circleOne.circleCenter.x + this.circleOne.radius + this.circleTwo.radius

        //console.log(this.circleOne)
        //console.log(this.circleTwo)
    }

    draw() {
        this.circleOne.draw()
        this.circleTwo.draw()
    }
    update() {
        this
    }
}



//new Triangle({a: {x: 10, y: 20}, b: {x: 20, y: 30}, c: {x:50, y:60}})
//new Triangle().draw()

class Triangle extends BaseShape {

    constructor(points, color) {
        super()
        this.points = points
        this.color = color
         
        let rn = Math.floor(Math.random() * 2)
        if (rn === 0) {
            this.fill = false
        } else {
            this.fill = true
        }
    }

    draw() {
        ctx.beginPath()
        this.fill ? ctx.fillStyle = this.color : ctx.strokeStyle = this.color //Ternary operator (how to write if else simplier)
        //if (this.fill) {
        //    ctx.fillStyle = this.color
        //} else {
        //    ctx.strokeStyle = this.color
        //}

        ctx.moveTo(this.points.a.x, this.points.a.y)
        ctx.lineTo(this.points.b.x, this.points.b.y)
        ctx.lineTo(this.points.c.x, this.points.c.y)
        ctx.closePath()

        this.fill ? ctx.fill() : ctx.stroke()

    }
}

class Rectangle extends BaseShape {
    constructor(width, height, pos, color) {
        super()
        this.width = width
        this.height = height
        this.pos = pos
        this.color = color

        let rn = Math.floor(Math.random() * 2) // rn random number
        if (rn === 0) {
            this.fill = false
        } else {
            this.fill = true
        }
    }

    draw() {
        ctx.beginPath()
        this.fill ? ctx.fillStyle = this.color : ctx.strokeStyle = this.color //Ternary operator (how to write if else simplier)
        //if (this.fill) {
        //    ctx.fillStyle = this.color
       // } else {
        //    ctx.strokeStyle = this.color
        //}
        ctx.rect(this.pos.x, this.pos.y, this.width, this.height)
        this.fill ? ctx.fill() : ctx.stroke() //Ternary operator (how to write if else simplier)
        //if (this.fill) {
        //    ctx.fill()
        //} else {
        //    ctx.stroke()
       // }

    }
}

class Circle extends BaseShape {
    constructor(radius, color, circleCenter) {
        super()
        this.radius = radius
        this.color = color
        this.circleCenter = circleCenter

        let rn = Math.floor(Math.random() * 2) // rn random number
        if (rn === 0) {
            this.fill = false
        } else {
            this.fill = true
        }
    }

    draw() {
        ctx.beginPath()
        if (this.fill) {
            ctx.fillStyle = this.color
        } else {
            ctx.strokeStyle = this.color
        }
        //ctx.moveTo(this.circleCenter.x, this.circleCenter.y)
        ctx.arc(this.circleCenter.x, this.circleCenter.y, this.radius, 0, 2 * Math.PI, false)
        if (this.fill) {
            ctx.fill()
        } else {
            ctx.stroke()
        }
    }
}

let hex = '0123456789ABCDEF'
function generateRandomColor() {
    let randomColor = '#'
    for (let i = 0; i <6; i ++) {
        let ri = Math.floor(Math.random() * hex.length)
        randomColor += hex[ri]
    }
    return randomColor
}

//new shapes(100)
class Shapes {

    constructor(amount) {
        this.shapes = []
        //let colors = ['red', 'green', 'blue', 'tomato', 'yellow', 'pink', 'black'] // lenght of array is 7
        for (let i = 0; i < amount; i++ ) {
            //let newCircle = new Circle(20, 'red', {x:10, y:20})
            let randomRadius = Math.floor(Math.random() * 69) + 1 // 1 to 70
            let rc = generateRandomColor() // random color
            let rv = { x: Math.floor(Math.random() * 5) + 1, // random velocity 0.00 to 11
                       y: Math.floor(Math.random() * 5) + 1}
            let pos = {
                    x: Math.random() * canvas.width, // 431.123239
                    y: Math.random() * canvas.height
            }


            let rn = Math.floor(Math.random() * 2) // 000. - 0.999999 * 4 === 3
            let shape = null
            if (rn === 0) {
                shape = new Circle(randomRadius, rc, pos)
            } else if (rn === 1){
                shape = new Rectangle(randomRadius, randomRadius, pos, rc) 
            } else if (rn === 2) {
                shape = new DoubleCircle(new Circle(randomRadius, rc, pos), new Circle(randomRadius, rc, pos))
                //console.log(shape)

            } else {
                let allowedRegionCenter = {
                    x: Math.floor(Math.random() * canvas.width),
                    y: Math.floor(Math.random() * canvas.height)
                }
                let minOffset = 25
                let maxOffset = 100
                let rOffset = Math.floor(Math.random() * (maxOffset - minOffset)) + minOffset

                let minX = allowedRegionCenter.x - rOffset
                let maxX = allowedRegionCenter.x + rOffset
                let minY = allowedRegionCenter.y - rOffset
                let maxY = allowedRegionCenter.y + rOffset



                let points = {
                    a: {
                        x: Math.floor(Math.random() * (maxX - minX)) + minX,
                        y: Math.floor(Math.random() * (maxY - minY)) + minY
                    },
                    b: {
                        x: Math.floor(Math.random() * (maxX - minX)) + minX,
                        y: Math.floor(Math.random() * (maxY - minY)) + minY

                    },
                    c: {
                        x: Math.floor(Math.random() * (maxX - minX)) + minX,
                        y: Math.floor(Math.random() * (maxY - minY)) + minY

                    }
                }
                shape = new Triangle(points, rc)
            }
            //let circle = new Circle(randomRadius, rc, pos)
            shape.setVelocity(rv)
            this.shapes.push(shape)

        }
    }

    draw() {
        for (let shape of this.shapes) {
            shape.draw()
        }
    }
    update() {
        for (let shape of this.shapes) {
            shape.update()
        }
    }
}




let shapes = new Shapes(50)
//console.log(shapes)

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    shapes.update()
    shapes.draw()
}
//shapes.draw()

const FPS = 30 // frames per secons FRS
setInterval(gameLoop, 1000 / 30)


