export enum Roles {
  admin = "admin",
  author = "author",
  editor = "editor",
}

type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const person: Person = {
  name: "John",
  email: "john@email.com",
  password: "password",
  role: Roles.admin,
};
