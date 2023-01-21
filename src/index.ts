class Person {
  private _age: number | undefined;
  constructor(private name: string) {}

  public getName() {
    return this.name;
  }

  public set age(age: number) {
    if (age > 200 || age < 0) {
      throw new Error("The age must be within range of 0-200");
    }
    this._age = age;
  }
}

const person: Person = new Person("John");
const mark: Person = new Person("Mark");

console.log(person);
console.log(mark);
