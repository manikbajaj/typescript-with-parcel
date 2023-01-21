class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

class AdminUser extends User {
  isAdmin: boolean = true;
}

const user: User = new User("John", "john@email.com", 32);
const admin: AdminUser = new AdminUser("Mark", "mark@email.com", 34);

console.log(user);
console.log(admin);
