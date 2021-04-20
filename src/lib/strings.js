const sayHello = string => {
  return "Hello, " + string +"!"
};

const uppercase = string => {
  bob = string.toUpperCase(string)
  return bob
};

const lowercase = string => {
  bob = string.toLowerCase(string)
  return bob
};

const countCharacters = string => {
 return string.length
};

const firstCharacter = string => {
  return string[0]
};

const firstCharacters = (string, n) => {
 bob =""
 if (n === true){
  for (let i = 0; i < n; i++) {
    bob += string.charAt(i);
 }
 return bob
 } 
  //return string[0]
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
