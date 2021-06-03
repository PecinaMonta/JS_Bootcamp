let canvas = document.getElementById('myCanvas')
let ctx = canvas.getContext('2d')


function draw(startX, startY, len, angle, branchWidth) {
    ctx.linewidth = branchWidth
    ctx.strokeStyle = 'darkbrown'
    ctx.fillStyle = 'darkgreen'
    ctx.shadowColor = 'rgb(0, 0, 0.8)'
    ctx.shadowBlur = 5

    ctx.beginPath()
    ctx.save()

    ctx.translate(startX, startY)
    ctx.rotate(angle * Math.PI / 180)
    ctx.moveTo(0, 0)
    if (angle > 0) {
        ctx.bezierCurveTo(10, -len/2, 10, -len/2, 0, -len)
    } else {
        ctx.bezierCurveTo(-10, -len/2, -10, -len/2, 0, -len)
    }
    //ctx.lineTo(0, -len)
    ctx.stroke()


   

    if (len < 10) {
        ctx.beginPath()
        ctx.arc(0, -len, 10, 0, Math.PI / 2)
        ctx.fill()
        ctx.restore()
        return;
        
    }

    draw(0, -len, len * 0.8, -15, branchWidth * 0.8)
    draw(0, -len, len * 0.8, 15, branchWidth * 0.8)

    ctx.restore()
}

draw(400, 800, 150, 0, 5)

// Iterative function
function findSum(arr) {
    let sum = 0
    for (const element of arr) {
        sum += element
    }
    return sum
}
// console.log(findSum([1, 5, 10]))

function findSumRecurssively(arr) {
    if (arr.length == 1) {
        return arr[0]
    }
    return arr[0] + findSumRecurssively(arr.slice(1))
}
//console.log(findSumRecurssively([10, 50, 40]))


for (let i = 0; i <= 100; i++) {
    console.log('Hello world!')
}

function printHello(n) {
    if (n < 1) { return }

    console.log('Hello world!')
    printHello(n - 1)
}
//printHello(100)


function greetPeoples(name) {
    if (names.length === 0) { return }

    console.log('Hello ' + names[0])
    greetPeoples(names.slice(1))
}
greetPeoples(['Josh','Anna','Suzanan'])