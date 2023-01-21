class Person {
  private name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getName() {
    return this.name;
  }
}

let person: Person = new Person("John", 32);
console.log(person.getName());
