"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fruits = void 0;
const arrays_json_1 = __importDefault(require("../arrays.json"));
exports.fruits = arrays_json_1.default.fruits;
console.log(`Our fruits array has ${exports.fruits.length} elements, and ${exports.fruits.length - 1} positions`);
