function mutation(strArr) {
    var counter = 0;
    var firstString = "";
    var secondString = "";
    var newStrArr = [];

    for (l = 0; l < strArr.length; l++) {
        newStrArr.push(strArr[l].toLowerCase())
    }

    for (a = 0; a < newStrArr[0].length; a++) {
        if (firstString.indexOf(newStrArr[0].charAt(a)) < 0) {
            firstString += newStrArr[0].charAt(a)
        }
    }

    for (b = 0; b < newStrArr[1].length; b++) {
        if (secondString.indexOf(newStrArr[1].charAt(b)) < 0) {
            secondString += newStrArr[1].charAt(b)
        }
    }

    for (i = 0; i < firstString.length; i++) {
        for (j = 0; j < secondString.length; j++) {
            if (firstString.charAt(i) === secondString.charAt(j))
                counter++;
        }
    }

    console.log(firstString, secondString, counter)

    if (counter === secondString.length) {
        arr = true;
    }
    else {
        arr = false;
    }
    return arr;
}

console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["Alien", "line"])); // true