const removeFromArray = function(array, ...args) {
  let rpta = [];
  array.forEach(item => {
    if (!args.includes(item))
      rpta.push(item);
  });
  return rpta;
};

// Do not edit below this line
module.exports = removeFromArray;
