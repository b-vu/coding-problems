const myNums = [1, 4, -2, 3, -5, -6, 7, -10, 13, 2]

for (let i = 0; i < myNums.length; i++) {
    console.log(myNums[i])
}

let i = 0;
while (i < myNums.length) {
    console.log(myNums[i])
    i++
}

for (let num of myNums) {
    console.log(num)
}

for (let index in myNums) {
    console.log(index)
}

myNums.forEach(function (num) {
    console.log(num)
})

//Other Array Methods
const greaterThanZero = myNums.filter(function (num) {
    return num > 0
})
console.log(greaterThanZero)

const multipliedByTwo = myNums.map(function (num) {
    return num * 2
})
console.log(multipliedByTwo)

function summingFunction(oldSum, currentValue) {
    const newSum = oldSum + currentValue
    return newSum;
}

const sumOfNums = myNums.reduce(summingFunction)
console.log(sumOfNums)