var arr = [];
arr.push(1);

var reference = [1];
var refCopy = reference;

var obj = { first: "reference" };
obj = { second: "ref2" };

reference.push(2);
console.log(reference, refCopy); // -> [1, 2], [1, 2]

var arrRef = ["Hi!"];
var arrRef2 = arrRef;

console.log(arrRef === arrRef2); // -> true

var arr1str = JSON.stringify(arr1);
var arr2str = JSON.stringify(arr2);

console.log(arr1str === arr2str); // true

var hundred = 100;
var two = 2;

function multiply(x, y) {
  // PAUSE
  return x * y;
}

var twoHundred = multiply(hundred, two);

function changeAgeImpure(person) {
  person.age = 25;
  return person;
}

var alex = {
  name: "Alex",
  age: 30,
};

var changedAlex = changedAgeImprue(alex);

console.log(alex); // -> {name: 'Alex', age: 25}
console.log(chnagedAlex); // -> {name: 'Alex', age: 25}

function changeAgePure(person) {
  var newPerson = JSON.parse(JSON.stringify(person));
  newPersonObj.age = 25;
  return newPersonObj;
}

var alex = {
  name: "Alex",
  age: 30,
};

var alexChanged = changeAgePure(alex);

console.log(alex); // -> {name: 'Alex', age: 30}
console.log(alexChanged); // -> {name: 'Alex', age: 25}

function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };
  return person;
}

var personObj1 = {
  name: "Alex",
  age: 30,
};

var personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?

function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };
  return person;
}

var personObj1 = {
  name: "Alex",
  age: 30,
};

var personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> {name: 'Alex', age: 25}
console.log(personObj2); // -> {name: 'John', age: 50}
