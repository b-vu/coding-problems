const reduce = require("../problems/reduceNumToZero");

describe("reduce", () =>{
    it("should return the number of steps to reduce the given number to zero by subtracting 1 if the number is odd and dividing by 2 if even", () => {
        const num1 = 14;
        const num2 = 77;

        const result1 = reduce(num1);
        const result2 = reduce(num2);

        expect(result1).toEqual(6);
        expect(result2).toEqual(10);
    })
});