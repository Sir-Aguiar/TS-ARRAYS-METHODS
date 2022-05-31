import fruits from "../arrays.json";
const marketFruits = fruits["market-fruits"];

// Increasing +1 the fruit price
/*
  The third parameter is the current array element
*/
const expensiveFruits = marketFruits.map((fruit) => {
  fruit.price += 1;
  return fruit;
});

console.log(expensiveFruits);
