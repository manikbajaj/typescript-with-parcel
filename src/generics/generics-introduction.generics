type Filter = {
  <T>(array: T[], predicate: (item: T) => boolean): T[];
};

const filter: Filter = (array, predicate) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
};

let numbers = [1, 3, 4, 6, 9, 7, 10, 12];
function predicate(item: number) {
  return item < 7;
}

let strings = ["cat", "bat", "rat", "mat"];
function filterCats(item: string) {
  return item === "cat";
}

console.log(filter(numbers, predicate));
console.log(filter(strings, filterCats));
