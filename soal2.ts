function wrapInArray<T>(item: T): T[] {
  return [item];
}

const numberArray = wrapInArray(42);
console.log(numberArray);

const stringArray = wrapInArray("Hello");
console.log(stringArray);

const objectArray = wrapInArray({ name: "John", age: 30 });
console.log(objectArray);

export {};
