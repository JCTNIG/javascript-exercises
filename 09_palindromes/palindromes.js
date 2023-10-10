const palindromes = function (word) {

  let removedSpaceWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "");

  let reversedWord = removedSpaceWord.split("").reduce((acc, char) => char + acc, "")

  return reversedWord.toLowerCase() === removedSpaceWord.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
