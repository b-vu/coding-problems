// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You may assume no duplicates in the array.

const targetIndex = (arr, target) => {
    if(target > arr[arr.length -1]){
        return arr.length;
    }

    for(const num of arr){
        if(num === target || num > target){
            return arr.indexOf(num);
        }
    }
};

module.exports = targetIndex;