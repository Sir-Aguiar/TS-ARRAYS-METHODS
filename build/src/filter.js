"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_json_1 = __importDefault(require("../arrays.json"));
const makertFruits = arrays_json_1.default["market-fruits"];
function onlyCheapFruits(fruit) {
    if (fruit.price < 4)
        return true;
    return false;
}
const cheapFruits = makertFruits.filter(onlyCheapFruits);
console.log(cheapFruits);
