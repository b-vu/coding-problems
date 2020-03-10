const mutation = require("../problems/2strings");

describe("mutation", () => {
    it("should accept an array of strings and return true if the first string contains all the letters of the second string", () => {
        const arr = ["Alien", "line"];

        const result = mutation(arr);

        expect(result).toEqual(true);
    })

    it("should accept an array of strings and return false if the first string does not contain all the letters of the second string", () => {
        const arr = ["hello", "hey"];

        const result = mutation(arr);

        expect(result).toEqual(false);
    })
});