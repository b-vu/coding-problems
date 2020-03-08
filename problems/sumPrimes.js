// * Returns the sum of all prime numbers that are less than or equal to num.
// * @param {number} num 
// * @returns {number}

function sumPrimes(num) {
    var primes = [];

    for (counter = 2; counter <= num; counter++) {
        var isPrime = true;
        for (divisor = 2; divisor < counter; divisor++) {
            if (Number.isInteger(counter / divisor)) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && primes.indexOf(counter) === -1) {
            primes.push(counter);
        }
    }

    console.log(primes);
    let sum = primes.reduce((a, b) => a + b, 0);
    return sum;
}

console.log(sumPrimes(-10))
console.log(sumPrimes(2))
console.log(sumPrimes(3)) //2 + 3 = 5
console.log(sumPrimes(7))
console.log(sumPrimes(10)) //2 + 3 + 5 + 7 = 17
console.log(sumPrimes(977)) //73156