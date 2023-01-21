class Person {
  name = "John";
  email = "john@email.com";

  greet() {
    return `Hello John`;
  }
}

const person = new Person();
const person2 = new Person();

console.log(person);
console.log(person2);
console.log(person.greet());
