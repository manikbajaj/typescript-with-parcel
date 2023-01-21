class Person {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

const person = new Person("John", "john@email.com");
const person2 = new Person("Mark", "mark@email.com");

console.log(person);
console.log(person2);

console.log(person.greet());
console.log(person2.greet());
