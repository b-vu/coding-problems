const reverseString = require("../problems/reverseOrder");

describe("reverseString", () => {
    it("should take in a string and return the string in reversed order", () => {
        const reverse = reverseString("elephant");
        const capitals = reverseString("TEsTiNg");

        expect(reverse).toEqual("tnahpele");
        expect(capitals).toEqual("gNiTsET");
    })

    it("should return undefined if an empty string is passed", () => {
        const empty = reverseString("");

        expect(empty).toEqual(undefined);
    })
});