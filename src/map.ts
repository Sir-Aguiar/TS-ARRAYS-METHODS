import fruits from "../arrays.json";
const marketFruits = fruits["market-fruits"];

// Increasing +1 the fruit price
const expensiveFruits = marketFruits.map((fruit) => {
  fruit.price += 1;
  return fruit;
});

console.log(expensiveFruits);
