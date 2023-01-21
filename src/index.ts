class Person {
  protected name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getName() {
    return this.name;
  }
}

class Admin extends Person {
  public returnName() {
    return this.name;
  }
}

const admin: Admin = new Admin("Mark", 42);

let person: Person = new Person("John", 32);

console.log(person);
console.log(admin.returnName());
