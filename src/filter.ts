import fruits from "../arrays.json";
const makertFruits = fruits["market-fruits"];

function onlyCheapFruits(fruit: { name: string; price: number }) {
  if (fruit.price < 4) return true;
  return false;
}

const cheapFruits = makertFruits.filter(onlyCheapFruits);
console.log(cheapFruits);
