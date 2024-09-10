const sumAll = function (firstInt, secondInt) {
  let result = 0;
  if (firstInt < 1 || secondInt < 1) {
    return "ERROR";
  } else if (Number.isInteger(firstInt) && Number.isInteger(secondInt)) {
    if (firstInt < secondInt) {
      //Runs if secondInt is larger
      for (i = firstInt; i <= secondInt; i++) {
        result += i;
      }
    } else {
      //Runs if firstInt is larger
      for (i = secondInt; i <= firstInt; i++) {
        result += i;
      }
    }
    return result;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
