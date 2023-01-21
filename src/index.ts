const map = <T, U>(array: T[], func: (item: T) => U) => {
  // check if the array is empty
  if (array.length === 0) {
    return array;
  }
  // Create a new array to collect values
  let result = [];
  // Loop through each item and call the func
  for (let i = 0; i < array.length; i++) {
    result[i] = func(array[i]);
  }
  // return new array
  return result;
};

let numbers = [4, 5, 6, 7, 8];

const converted = map(numbers, (num) => num.toString());

console.log(converted);
