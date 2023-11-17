const findTheOldest = function(array) {
  let oldest = array[0];
  array.map((person) => {
    if (person.yearOfDeath - person.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {
      oldest = person;
    }
  })
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
