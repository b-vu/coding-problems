// * Write a function that takes in a string and 
// * returns true if it's a pangram or false otherwise.
// * Pangram: a sentence that contains every letter in the alphabet.
// * @param {string} sentence 
// * @returns {boolean}

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function isPangram(sentence) {
    var alphabetTracker = [];
    var sentenceLower = sentence.toLowerCase();
    var sentenceSplit = sentenceLower.split("");

    for (i = 0; i < sentenceSplit.length; i++) {
        if (alphabetTracker.indexOf(sentenceSplit[i]) === -1 && alphabet.indexOf(sentenceSplit[i]) !== -1) {
            alphabetTracker.push(sentenceSplit[i])
        }
    }

    console.log(alphabetTracker)

    if (alphabetTracker.length === 26) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPangram("Watch Jeopardy, Alex Trebek's fun TV quiz game")) // true
console.log(isPangram("Five hexing wizard bots jump quickly")) // true
console.log(isPangram("JavaScript is the best")) //false