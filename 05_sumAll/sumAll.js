const sumAll = function(firstNum, lastNum) {
  let sum = 0;
  if (((typeof firstNum === 'number') && (typeof lastNum === 'number')) && (firstNum >= 0 && lastNum >= 0)) {
    if (firstNum < lastNum) {
      for (let i = firstNum; i <= lastNum; i++) {
        sum += i;
      }
    } else {
      for (let i = firstNum; i >= lastNum; i--) {
        sum += i;
      }
    }
  } else {
    sum = "ERROR"
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
