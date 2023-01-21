function intro(name: string, age: number, country: string = "UK"): string {
  return `My name is ${name} and I am ${age} years old and I live in ${country}`;
}
console.log(intro("john", 32));
console.log(intro("john", 32, "USA"));
