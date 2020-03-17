const functions = require("../problems/numPalindrome")

describe("numPalindrome", () => {
    it("should return true if the product of the 2 numbers passed is a palindrome", () => {
        const num1 = 348;
        const num2 = 2;

        const product = functions.palindrome(num1, num2);

        expect(product).toEqual(true);
    })

    it("should return the highest number palindrome from the product of two 3-digit numbers", () => {
        const answer = 906609;

        const result = functions.numbers();

        expect(result).toEqual(answer);
    })
});