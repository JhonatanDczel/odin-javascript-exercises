const reverseString = function(str) {
  let rpta = '';
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    rpta = letter + rpta;
  }
  return rpta;
};

// Do not edit below this line
module.exports = reverseString;
