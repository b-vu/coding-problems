const findPrefix = array => {
    array.sort((a,b) => a.length > b.length ? 1 : -1);
    let longestPrefix = array[0];
    array.splice(0, 1);

    for(i = 0; i < array.length; i++){
        array[i] = array[i].slice(0, longestPrefix.length);

        while(array[i] !== longestPrefix){
            longestPrefix = longestPrefix.slice(0, longestPrefix.length - 1);
            array[i] = array[i].slice(0, longestPrefix.length);
        }
    }

    console.log(longestPrefix);
    console.log(array);

    return longestPrefix;
}

module.exports = findPrefix;