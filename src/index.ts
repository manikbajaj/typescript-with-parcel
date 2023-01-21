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

  public get age() {
    if (this._age === undefined) {
      throw new Error("The age property has not been set as yet");
    }
    return this._age;
  }
}

const person: Person = new Person("John");
person.age = 70;

console.log(person);
console.log(person.age);
console.log(person.getName());
