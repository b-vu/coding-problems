function reverseString(strToReverse) {
    var newStr = "";
    if (strToReverse.length === 0) {
        return;
    }
    else {
        for (i = strToReverse.length - 1; i >= 0; i--) {
            newStr += strToReverse.charAt(i);
        };
        return newStr;
    }
};
console.log(reverseString("hat"));
console.log(reverseString("flurry"));
console.log(reverseString("elephant"));
console.log(reverseString("nairb"));
console.log(reverseString(""));
console.log(reverseString("A"));
console.log(reverseString("TEST"));
console.log(reverseString("TEsTiNg"));