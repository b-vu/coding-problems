const myReplace = (str, before, after) => {
    if (str.indexOf(before) === -1) {
        return;
    }
    else {
        if (before[0] === before[0].toUpperCase()) {
            let newAfter = after.split("");
            newAfter[0] = newAfter[0].toUpperCase();
            let newAfterString = newAfter.join("");
            let newStr = str.replace(before, newAfterString);
            return newStr;
        }
        else {
            let newStr = str.replace(before, after);
            return newStr;
        }
    }
}

module.exports = myReplace;