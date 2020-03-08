const myReplace = require("../problems/searchAndReplace");

describe("myReplace", () => {
    it("should replace the string found in the sentence with the second given string", () => {
        const replace = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

        expect(replace).toEqual("A quick brown fox leaped over the lazy dog");
    })

    it("should keep the case sensitive characters of the replaced string", () => {
        const replace = myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

        expect(replace).toEqual("A quick brown fox Leaped over the lazy dog");
    })

    it("should return undefined if the string to be replaced is not found in the sentence", () => {
        const replace = myReplace("A quick brown fox jumped over the lazy dog", "jumpes", "leaped");

        expect(replace).toEqual(undefined);
    })
});