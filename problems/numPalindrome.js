//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.

const num1 = 999;
const num2 = 999;
let largestPalindrome = 0;
const answer = 906609;

const palindrome = (num1, num2) => {
    const product = (num1 * num2).toString();
    const productPalindrome = product.split("").reverse().join("");

    if (product === productPalindrome) {
        return true;
    }
    else {
        return false;
    }
}

const numbers = () => {
    for (let i = num1; i >= 100; i--) {
        for (let x = num2; x >= 100; x--) {
            if (palindrome(i, x) && (i * x) === answer) {
                console.log(i * x);
                return (i * x);
            }
        }
    }
}

numbers();

module.exports = {
    palindrome,
    numbers
};