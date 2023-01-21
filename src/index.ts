class Person {
  constructor(private name: string, public age: number) {
    if (age > 200 || age < 0) {
      throw new Error("The age must be within range of 0-200");
    }
  }

  public getName() {
    return this.name;
  }
}

const person: Person = new Person("John", 45);
const mark: Person = new Person("Mark", 35);

person.age = 210;
mark.age = -10;

console.log(person);
console.log(mark);
