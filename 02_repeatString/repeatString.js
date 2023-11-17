const repeatString = function(str, num) {
  if (!isValidInput(num))
    return "ERROR";
  let ask = '';
  for (let i = 0; i < num; i++) {
    ask += str;
  }
  return ask;
};

function isValidInput(num) {
  return num >= 0;
}

// Do not edit below this line
module.exports = repeatString;
