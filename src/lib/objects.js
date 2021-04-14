const createPerson = (name, age) => {
  var newPerson = {
    name: name,
    age: age
  }
  return newPerson;
};

const getName = object => {
  return object.name
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  var solid = person;
  if (person.age > 65) {
    return true;
  }
  else return false;
};

const getAges = people => {
 let newArray = people.map(e => e.age);
 return newArray;
};

const findByName = (name, people) => {
 let answer = people.find(person => person.name === name);
  return answer;
};

const findHondas = cars => {
  // is an array
  /*function car() {
    return car.manufacturer === 'Honda';
  }
  return cars.fiter(car).join("");*/
    return cars.filter(newCar => newCar.manufacturer === 'Honda'); 
};

const averageAge = people => {
  let ages = people.map(e => e.age);
  function calculate(total, num) {
    return (total + num);
  }
  let final = ages.reduce(calculate) / people.length;
  return final;
};

const createTalkingPerson = (name, age) => {
  
  function person(name, introduce, age) {
    this.name = name;
    this.introduce = introduce;
    this.age = age;
  };
  function introduce (){
    return "Hi Fred, my name is " +name+ " and I am "+age +"!";
  };
  let guy = new person(name, introduce, age);
  return guy;
};


module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
