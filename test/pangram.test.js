const isPangram = require("../problems/pangram");

describe("isPangram", () => {
    it("should return true if the given string contains every letter in the alphabet", () => {
        const pangram = isPangram("Watch Jeopardy, Alex Trebek's fun TV quiz game");

        expect(pangram).toEqual(true);
    })

    it("should return false if the given string does not contain every letter in the alphabet", () => {
        const pangram = isPangram("JavaScript is the best");

        expect(pangram).toEqual(false);
    })
});