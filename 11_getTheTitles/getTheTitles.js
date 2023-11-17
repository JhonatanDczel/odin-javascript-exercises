const getTheTitles = function(...args) {
  let rpta = [];
  args.forEach(book => {
    rpta.push(book.title);

  });
  return rpta;
};

// Do not edit below this line
module.exports = getTheTitles;
