const sumRange = require("../problems/numSum");

describe("numSum", () => {
    it("should return the sum of all the numbers in between the two numbers inclusive", () => {
        const sum = sumRange([8, 2]);
        const same = sumRange([5,5]);

        expect(sum).toEqual(35);
        expect(same).toEqual(10);
    })
});