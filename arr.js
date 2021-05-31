let arr = [[1, 2, 3], 
            [4, 5, 6]]

for (let row = 0; row < arr.length; row++) {
    let currentRow = arr[row]
    for (let col = 0; col < currentRow.length; col++) {
        let currentCol = currentRow[col]
        console.let...
    }
}



'[3742425] - Monta Pecina - LAtvia'

let id = 3742425
let firstName = 'Monta'
let lastName = 'Pecina' 
let country = 'Latvia'

let msg = '[' + id.toString() + '] - ' + firstName + ' ' + lastName + ' - ' + country // string concenation

let mssg = `[${id}] - ${firstName} ${lastName} - ${country}` // string formating
