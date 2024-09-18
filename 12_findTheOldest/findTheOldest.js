const findTheOldest = function(arr) {
    const ordered = arr.sort((a, b) => (a.yearOfDeath === undefined ? new Date().getFullYear() - a.yearOfBirth : a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath === undefined ? new Date().getFullYear() - b.yearOfBirth : b.yearOfDeath - b.yearOfBirth) ? -1 : 1);
    console.table(ordered);
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
