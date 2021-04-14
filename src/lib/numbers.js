const add = (a, b) => {
  bob = a + b;
  return bob
};

const subtract = (a, b) => {
  bob = a - b;
  return bob
};

const multiply = (a, b) => {
  bob = a * b;
  return bob
};

const divide = (a, b) => {
  bob = a / b;
  return bob
};

const power = (a, b) => {
  bob = a ** b;
  return bob
};

const round = a => {
  bob = Math.round(a);
  return bob
};

const roundUp = a => {
  bob = Math.ceil(a);
  return bob
};

const roundDown = a => {
  bob = Math.floor(a);
  return bob
};

const absolute = a => {
  bob = Math.abs(a);
  return bob
};

const quotient = (a, b) => {
  bob = Math.floor(a / b);
  if (bob < 0) {
    bob = bob + 1
  }
  return bob
};

const remainder = (a, b) => {
  bob = a % b;
  return bob
};

const digPow = (n, p) => {  
  
  let aort = [2, 3, 4, 5, 6, 7, 8, 9];
  let base = Math.sqrt(n);
  let newNumb =  Math.floor(base);
  let crud =  n - (Math.pow(newNumb, 2));
 
  function checkNum(e){
    //return e === crud;
    if (crud % e === 0){
      return e;
    } 
  }
  let newCalc = aort.find(checkNum);

  function negativeNum(f) {
    if (f - p === 1){
      return p
    }
    else if (newCalc === p)
    {
      return crud - ((p+1)* newCalc)
  }
  else if (f !== aort.pop())
  {
    return -1
  }
  }
  return negativeNum(newCalc);
}
  
 /* function calculate2(f) {
      if (f % crud === 0) {
        return f / crud
      }
      else {
        return -1;
      }
    }*/
  /*function calculate1(o) {
    let array = [2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < array.length; i++) {
      if (o % i !== 0) {
        return }
      };
    }*/

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
  digPow
};
