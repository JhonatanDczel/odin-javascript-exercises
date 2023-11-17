const palindromes = function(str) {
  str = str.toLowerCase().replace("!", '');
  str = str.toLowerCase().replace(" ", '');
  str = str.toLowerCase().replace(",", '');

  return str.split('').reverse().join() == str;
};

// Do not edit below this line
module.exports = palindromes;
