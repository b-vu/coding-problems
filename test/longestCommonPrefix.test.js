const findPrefix = require("../problems/longestCommonPrefix");

describe("findPrefix", () => {
    it("should find and return the longest common prefix given an array of strings", () => {
        const prefix = findPrefix(["flower","flow","flight"]);

        expect(prefix).toEqual("fl");
    })

    it("should return an empty string if no common prefix is found", () => {
        const prefix = findPrefix(["dog","racecar","car"]);

        expect(prefix).toEqual("");
    })
});