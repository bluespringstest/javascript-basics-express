const getNthElement = (index, array) => {
  while (index >3) {index = index -4};
  return array[index];
};

const arrayToCSVString = array => {
  return array.toString(',');
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  bob = [element]; 
  return array.concat(bob)
};

const removeNthElement = (index, array) => {
   array.splice(index, 1)
};

const numbersToStrings = numbers => {

return numbers.toString().split(",")
  /*function newNum(item) {
    item.toString();
  };
  return numbers.forEach(newNum)*/
};

const uppercaseWordsInArray = strings => {
  return strings.map(strings => strings.toUpperCase())
};

const reverseWordsInArray = strings => {
  return strings.map(strings => strings.split("").reverse().join(""));
};

const onlyEven = numbers => {
 bob =[];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0)
       {
        bob.push(i + 1)
        //if you try to do i++ it will give you odd numbers. Foul creature this be.
      } 
    }
  return bob
};

const removeNthElement2 = (index, array) => {
      let newArray = array.map(e => e);
    newArray.splice(index, 1);
    return newArray;
  }
  
const elementsStartingWithAVowel = strings => {
  return strings.filter(strings => /^[aeiou]/i.test(strings));
};

const removeSpaces = string => {
  return string.replace(/\s/g, "");
};

const sumNumbers = numbers => {
  function myFunc(total, num) {
    return total + num;
  }
  return numbers.reduce(myFunc);
};

const sortByLastLetter = strings => {
  const reversedWords = reverseWordsInArray(strings).sort();
  return reverseWordsInArray(reversedWords);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
