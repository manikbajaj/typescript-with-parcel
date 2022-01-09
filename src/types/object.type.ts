/*let article: {
  author: string;
  content: string;
  title: string;
  image?: string;
};
article = {
  author: "Stella",
  content: "Hello World",
  title: "My First Article",
};*/

type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
  name: "Buddy",
  barks: true,
  wags: true,
};

let cat: DogAndCatUnion = {
  name: "Bella",
  purrs: true,
};

let DogAndCat: DogAndCatUnion = {
  name: "Hybrid",
  barks: true,
  wags: true,
  purrs: true,
};
