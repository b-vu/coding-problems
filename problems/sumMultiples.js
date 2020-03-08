function sumMult(num) {
    let multArray = [];

    for (i = 3; i < num; i++) {
        if (Number.isInteger(i / 3)) {
            multArray.push(i);
        }
        else if (Number.isInteger(i / 5) && multArray.indexOf(i) === -1) {
            multArray.push(i);
        }
    }
    return multArray.reduce((a, b) => a + b, 0);
}

console.log(sumMult(10))
console.log(sumMult(15))
console.log(sumMult(16))
console.log(sumMult(100))
console.log(sumMult(1000))