const factorialize = require("../problems/factorial");

describe("factorialize", () => {
    it("should factorialize the passed number", () => {
        const num1 = 5;
        const num2 = 8;

        const product1 = factorialize(num1);
        const product2 = factorialize(num2);

        expect(product1).toEqual(120);
        expect(product2).toEqual(40320);
    })
});