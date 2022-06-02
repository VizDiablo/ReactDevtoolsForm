var numbers = [5, 25, 8, 32, 6, 12];

///Array.map
var doubleNumbers = numbers.map(function (num) {
  return num * 2;
});

var doubleNumbers2 = numbers.map((num) => num * 2);
console.log(doubleNumbers);
console.log(doubleNumbers2);

function double(x) {
  return x * 2;
}
var doubleNumbersFunction = numbers.map(double);
console.log(doubleNumbersFunction);

///Array.filter
var lessThanTen = numbers.filter(function (num) {
  return num < 10;
});
console.log(lessThanTen);

var greaterThanTen = numbers.filter(function (num) {
  return num > 10;
});
console.log(greaterThanTen);

///Array.reduce
var sum = numbers.reduce(function (sum, num) {
  return (sum += num);
});
console.log(sum);

var product = numbers.reduce(function (product, num) {
  return (product *= num);
});
console.log(product);

///Array.find
var firstLessThanTen = numbers.find(function (num) {
  return num < 10;
});
console.log(firstLessThanTen);

var firstGreaterThanTen = numbers.find(function (num) {
  return num > 10;
});
console.log(firstGreaterThanTen);

//Find index works the same way except it returns the index instead of the actual value

///Array destructuring
////Resides in seperate JS file only containing the data
var animals = [
  { name: "cat", sound: "Meow", feeding: { food: 2, water: 3 } },
  { name: "dog", sound: "bark", feeding: { food: 1, water: 4 } }
];

function useAnimal(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound); //Pseudo for make the sound
    }
  ];
}

////Back in main js file
//import animals, { useAnimal } from "data"
console.log(animals[0]);
[cat, dog] = animals;
console.log(cat);
console.log(dog);

// const {name, sound} = cat;
// console.log(name);
// console.log(sound);

const { name: catName, sound: catSound, feeding: catFeeding } = cat;
console.log(catName);
console.log(catSound);
console.log(catFeeding);
console.log(catFeeding.food);

const {
  name: catName2,
  sound: catSound2,
  feeding: { food: catFood, water: catWater }
} = cat;
console.log(catFeeding);
console.log(catFood);
console.log(catWater);

console.log(useAnimal(cat));
const [animal, makeSound] = useAnimal(cat);
console.log(animal);
makeSound();
