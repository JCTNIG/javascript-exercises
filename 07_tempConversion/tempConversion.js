const convertToCelsius = function(fahrenheit) {
  let result;
  let celsius = (fahrenheit - 32) * (5/9);
  if (Number.isInteger(celsius)) {
    result = celsius
  } else {
    result = celsius.toFixed(1)
  }
  return parseFloat(result)
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  let result;
  if (Number.isInteger(fahrenheit)) {
    result = fahrenheit
  } else {
    result = fahrenheit.toFixed(1);
  }
  return parseFloat(result)

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
