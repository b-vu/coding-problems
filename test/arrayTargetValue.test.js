const targetIndex = require("../problems/arrayTargetValue");

describe("targetIndex", () => {
    it("should return the index of the target number if it is found in the array", () => {
        const array = [1,3,5,6];
        const target = 5;

        const index = targetIndex(array, target);

        expect(index).toEqual(2);
    })

    it("if not found in the array, it should return the index where it would be if it were inserted in order", () => {
        const array1 = [1,3,5,6];
        const target1 = 2;

        const index1 = targetIndex(array1, target1);

        expect(index1).toEqual(1);


        const array2 = [1,3,5,6];
        const target2 = 7;

        const index2 = targetIndex(array2, target2);

        expect(index2).toEqual(4);


        const array3 = [1,3,5,6];
        const target3 = 0;

        const index3 = targetIndex(array3, target3);

        expect(index3).toEqual(0);
    })
});