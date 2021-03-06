const factorialize = num => {
    let product = 1;
    for (i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
};

//Recursive solution
const product = num => {
    if (num <= 0) {
        return 1;
    }
    else {
        return (num * product(num - 1));
    }
};

//Another recursive solution
const product2 = num => {
    if (num > 0) {
        return num * (product2(num - 1));
    }
    else {
        return 1;
    }
};

console.log(factorialize(5));
console.log(factorialize(3));
console.log(factorialize(8));

console.log(product(5));
console.log(product(3));
console.log(product(8));

console.log(product2(5));
console.log(product2(3));
console.log(product2(8));

module.exports = factorialize;