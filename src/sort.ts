import fruits from "../arrays.json";

const marketFruits = fruits["market-fruits"];
const nameOrderedFruits = fruits["market-fruits"];
function alphaFruits(a: any, b: any) {
  return a.name.localeCompare(b.name);
}
function cheaperFruit(a: any, b: any): number {
  return a.price - b.price;
}

marketFruits.sort(cheaperFruit);
nameOrderedFruits.sort(alphaFruits);
console.log("The fruits sorted by price are:");
console.log(marketFruits);
console.log("And by name:");
console.log(nameOrderedFruits);
