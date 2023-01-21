enum ageUnit {
  years = "years",
  months = "months",
}

type Person = {
  name: string;
  age: number;
  ageUnit: ageUnit;
  country: string;
  greet: (greeting: string) => string;
};

let person: Person = {
  name: "Scott",
  age: 30,
  ageUnit: ageUnit.years,
  country: "USA",
  greet: (greeting) => {
    return `${greeting} ${person.name}`;
  },
};

function convertAgeToMonths(person: Person): Person {
  person.age = person.age * 12;
  person.ageUnit = ageUnit.months;
  return person;
}

console.log(convertAgeToMonths(person));
console.log(person.greet("Good Morning"));
