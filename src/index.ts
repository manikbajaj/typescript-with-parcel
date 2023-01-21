class Person {
  constructor(private _name: string, private _age: number) {}

  public set name(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
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

const person: Person = new Person("John", 42);

console.log(person);
console.log(person.age);
