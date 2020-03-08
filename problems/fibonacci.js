const fibonacci = () => {
    let fibonacci = 1;
    const fibonacciArray = [];
    const fibonacciEvenArray = [];
    let evenSum = 0;

    while (fibonacci < 4000000) {
        fibonacciArray.push(fibonacci);
        if (fibonacciArray.length === 1) {
            fibonacci = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 1];
        }
        else {
            fibonacci = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2];
        }
    }
    console.log(fibonacciArray)
    console.log(fibonacci)

    for (const num of fibonacciArray) {
        if (Number.isInteger(num / 2)) {
            fibonacciEvenArray.push(num);
            evenSum += num;
        }
    }
    console.log(fibonacciEvenArray)
    console.log(evenSum)

    return evenSum;
}

fibonacci();

module.exports = fibonacci;

const myArray = [[[3, 2]]];
console.log(myArray[0][0][1]);