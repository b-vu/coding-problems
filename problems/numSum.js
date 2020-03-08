function sumRange(numArr) {
    if (numArr[0] > numArr[1]) {
        let high = numArr[0];
        numArr[0] = numArr[1];
        numArr[1] = high;
    }
    var high = numArr[1];
    var index = numArr[0];
    var sum = 0;
    if (index === high) {
        sum = index + high;
        return sum;
    }
    else {
        while (index <= high) {
            sum += index;
            index++;
        }
        return sum;
    }
}

console.log(sumRange([5, 3]))
console.log(sumRange([3, 5]))
console.log(sumRange([2, 8]))
console.log(sumRange([8, 2]))
console.log(sumRange([1, 4]))
console.log(sumRange([4, 1]))
console.log(sumRange([4, 4]))
console.log(sumRange([-3, 0]))
console.log(sumRange([3, -2]))
console.log(sumRange([-2, -3]))
console.log(sumRange([-3, -3]))