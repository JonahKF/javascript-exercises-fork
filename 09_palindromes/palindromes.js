const palindromes = function (str) {
    const arr = str.split(""); // 'racecar' -> ['r', 'a', 'c', 'e', 'c', 'a', 'r']
    
    let reverse = arr.length;
    for(let e = 0; e < arr.length; e++){
        if (arr[e] != arr[reverse - 1]){
            return false;
        }
        reverse--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
