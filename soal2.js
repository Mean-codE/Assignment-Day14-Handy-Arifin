"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapInArray(item) {
    return [item];
}
var numberArray = wrapInArray(42);
console.log(numberArray);
var stringArray = wrapInArray("Hello");
console.log(stringArray);
var objectArray = wrapInArray({ name: "John", age: 30 });
console.log(objectArray);
