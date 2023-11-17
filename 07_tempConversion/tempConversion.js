const convertToCelsius = function(f) {
  let c = (f - 32) / 1.8;
  c = Math.round(c * 10.0) / 10.0;
  return c;
};

const convertToFahrenheit = function(c) {
  let f = (9 / 5.0) * c + 32;
  f = Math.round(f * 10.0) / 10.0;
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
