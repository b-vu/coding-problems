function findLongestWordLength(str) {
    var longestWord = "";
    var currentWord = "";
    var longestLength = 0;
    var counter = 0;

    for (i = 0; i < str.length; i++) {
        if (str[i] !== " " && longestLength === 0) {
            counter++;
            longestWord += str[i];
            currentWord += str[i];
        }
        else if (str[i] !== " " && longestLength > 0) {
            currentWord += str[i];
            counter++;
        }
        else if (str[i] === " " && counter > longestLength) {
            longestWord = currentWord;
            longestLength = counter;
            currentWord = "";
            counter = 0;
        }
        else {
            currentWord = "";
            counter = 0;
        }
    }
    return longestWord;
}
//just use .split(" ") instead
console.log(findLongestWordLength("I am so clever that sometimes I don't understand a single word of what I am saying."))

if ("0") {
    console.log("true")
}
else {
    console.log("false")
}

var array = [];
console.log(array.length)

if (array.length) {
    console.log("not empty");
}
else {
    console.log("empty");
}

if ({}) {
    console.log("true")
}

(function () {
    console.log("Function runs immediately");
})();