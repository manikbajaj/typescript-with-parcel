type User = {
  name: string
}

type AdminUser = {
  isAdmin: boolean
}

const userAndAdmin: User & AdminUser = {
  name: "John",
  isAdmin: true
};

// Union Type
const userOrAdmin: User | AdminUser = {
  name: "Mark"
};

// Tuples
type ResponseTuple = [string | number]

interface Name {
  name: string;
}

interface LastName {
  lastName: string;
}

class Person implements Name, LastName {
  constructor(
    public name: string,
    public lastName: string
  ) {
  }
}

const person: Person = new Person("John", "Doe");