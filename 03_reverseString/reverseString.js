const reverseString = function (string) {
  let newString = "";
  const stringArray = Array.from(string);
  for (i = string.length; i > 0; i--) {
    newString = newString + stringArray[i - 1];
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
