const negate = a => {
  if (a === false) {
    return true
  }
  else {
    return false
  }
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return a === false && b === false;
};

const one = (a, b) => {
  
  if (a === true && b === false){
    return true
  }
  else if (b === true && a === false){
    return true;
  }
  else return false;
};

const truthiness = a => {
  if (a){
    return true;
  }
  else return false;
};

const isEqual = (a, b) => {
  return a === b;
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  }
  else return false;
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  }
  else return false;
};

const isOdd = a => {
  if (a % 2 != 0) {
    return true;
  }
  else return false;
};

const isEven = a => {
  if (a % 2 == 0) {
    return true;
  }
  else return false;
};

const isSquare = a => {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  }
  else return false;
};

const startsWith = (char, string) => {
  if (string.startsWith(char)){
    return true;
  }
  else return false;
};

const containsVowels = string => {
  if (/[aeiou]/i.test(string) === true){
    return true
  }
  else return false;
};

const isLowerCase = string => {
  let bob = string.toLowerCase();
  if (bob === string){
    return true
  }
  else return false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
