const sumPrimes = require("../problems/sumPrimes");

describe("sumPrimes", () => {
    it("should return the sum of all prime numbers that are less than or equal to the passed number", () => {
        const num1 = 10;
        const num2 = 977;

        const sum1 = sumPrimes(num1);
        const sum2 = sumPrimes(num2);

        expect(sum1).toEqual(17);
        expect(sum2).toEqual(73156);
    })
});