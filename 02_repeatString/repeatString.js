const repeatString = function(str, num) {
  let newStr;
  if (num < 0) {
    newStr = "ERROR"
  } else {
    newStr = str.repeat(num);
  }
  return newStr;
};

// Do not edit below this line
module.exports = repeatString;
