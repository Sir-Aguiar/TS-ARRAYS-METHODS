"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_json_1 = __importDefault(require("../arrays.json"));
const marketFruits = arrays_json_1.default["market-fruits"];
// Increasing +1 the fruit price
const expensiveFruits = marketFruits.map((fruit) => {
    fruit.price += 1;
    return fruit;
});
console.log(expensiveFruits);
