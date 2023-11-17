const fibonacci = function(n) {
  if (n < 0) return "OOPS";
  if (n == 2 || n == 1) return 1;
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let actual = a + b;
    [a, b] = [b, a];
    b = actual;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
