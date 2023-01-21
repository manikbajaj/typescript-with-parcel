class Person {
  private testUsersAge(age: number) {
    if (age > 200 || age < 0) {
      throw new Error("The age must be within range of 0-200");
    }
    return age;
  }

  constructor(private _name: string, private _age: number) {
    this.testUsersAge(_age);
    this._age = _age;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }

  public set age(age: number) {
    this.testUsersAge(age);
    this._age = age;
  }

  public get age() {
    return this._age;
  }
}

const person: Person = new Person("John", 42);
console.log(person);
console.log(person.age);
console.log(person.name);
