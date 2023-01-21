function intro(name: string, age: number): string {
  return `My name is ${name} and I am ${age} years old`;
}

const intro2 = function (name: string, age: number): string {
  return `My name is ${name} and I am ${age} years old`;
};

const intro3 = (name: string, age: number): string => {
  return `My name is ${name} and I am ${age} years old`;
};
