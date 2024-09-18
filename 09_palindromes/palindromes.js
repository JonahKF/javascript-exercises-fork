const palindromes = function (str) {
    const arr = str.toLowerCase().split(""); // 'racecar' -> ['r', 'a', 'c', 'e', 'c', 'a', 'r']
    let newArr = arr.filter(str => !str.match(/[^\w\s]/g));
    newArr = newArr.filter(str => str != " ")
            .filter(num => typeof num !== 'number');
    
    let reverse = newArr.length;
    for(let e = 0; e < newArr.length; e++){
        if (newArr[e] != newArr[reverse - 1]){
            return false;
        }
        reverse--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
