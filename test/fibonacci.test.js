const fibonacci = require("../problems/fibonacci");

describe("fibonacci", () => {
    it("should return the sum of all even Fibonacci numbers under 4 million", () => {
        const sum = fibonacci();

        expect(sum).toEqual(4613732);
    })
});