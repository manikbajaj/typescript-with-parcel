let bigInt1 = BigInt(945845);

let biInt2 = 123564564n;
console.log(bigInt1);

const safeInt = Number.MAX_SAFE_INTEGER;

console.log(safeInt);

const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;

console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);

console.log(safeIntPlusOne === safeIntPlusTwo);

let a: bigint = BigInt(1234548);

let b: bigint = 23456465n;

let c: bigint = a - b;

let e:bigint = 24551.2n;
let f = Math.log(a);