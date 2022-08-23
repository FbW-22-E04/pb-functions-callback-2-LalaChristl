// const array = [1, 2, 3, 4, 5, 6]


// function squareNumber (n) {
//     return n * n;
// }

// function square(arr, cb) {
//     let newArr = []
//     arr.forEach((item) => {
//         newArr.push(cb(item))
//     })
//     return newArr
// }



// console.log(square(array,squareNumber))  // return [1,4,9,16,25]

// const array = [1, 2, 3, 4, 5, 6]

// const newArr = array.map(function(item)) {
//     return n * n
// }

const array = [1, 2, 3, 4, 5, 6]

function square(number) {
    return number * number
}
const squared = array.map(square)
console.log(squared)

