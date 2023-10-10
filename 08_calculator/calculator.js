const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(...num) {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    if (Array.isArray(num[i])) {
      for (const j of num[i]){
        result += j;
      }
    }

    
    result += i;
    
  }
  return result;
};

const multiply = function(...nums) {
  let result = 1;
  for (const i of nums){
    if (Array.isArray(i)){
      for (const j of i) {
        result *= j;
      }
    } else {
      result *= i; 
    }
  }
  return result;
};

const power = function(a, b) {
  let result = a;
  for (let i = 1; i < b; i++) {
    result *= a;
  }
return result;
};

const factorial = function(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
     result *= i;
  }
  if (result < 1) {
    result = 1;
  }
  return result;
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
