const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((total, num) => (total = total + num), 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => (total = total * num), 1);
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
  let arr = [];
  for(e = 1; e <= x; e++){
    arr.push(e);
  };
  return arr.reduce((total, num) => (total = total * num), 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
