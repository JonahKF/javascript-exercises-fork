const removeFromArray = function (array, ...vars) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    if (vars.includes(array[i])) {
      // pass;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// OLD CODE
// const removeFromArray = function (array, removeTarget) {
//     let newArray = [];
//     for (i = 0; i < array.length; i++) {
//       if (array[i] != removeTarget) {
//         newArray.push(array[i]);
//       }
//     }
//     return newArray;
//   };

// Do not edit below this line
module.exports = removeFromArray;
