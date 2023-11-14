//Unable to solve this problem at the moment.
// Need to understand reduce() method first.

const findTheOldest = function(arr) {
  const year = new Date().getFullYear();

  const oldest = arr.map((item) => {if (!(item.hasOwnProperty('yearOfDeath'))) {item.yearOfDeath = year;}
  item.yearOfDeath - item.yearOfBirth});

  //oldest.sort((a, b) => b - a);
  //return oldest[0];
};

// Do not edit below this line
//module.exports = findTheOldest;

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.log(findTheOldest(people));