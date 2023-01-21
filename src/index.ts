let user: "string";

let saveButton: HTMLElement | null = document.getElementById("save");

console.log(saveButton);

if (!saveButton === null) {
  // do Somethingn
}

let loggedInUsername: string;

const users = [
  { name: "Oby", age: 12 },
  { name: "Toby", age: 32 },
];
const loggedInUser = users.find((user) => user.name === loggedInUsername);
