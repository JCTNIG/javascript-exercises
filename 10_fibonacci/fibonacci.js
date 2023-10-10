const fibonacci = function(num) {
  let num1 = 0;
  let num2 = 1;
  let sum;

  if (num < 1) return "OOPS";

  if (num === 0) return 0;

  for (let i = 0; i < num - 1; i++){
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  
  return num2;
};

// Do not edit below this line
module.exports = fibonacci;
