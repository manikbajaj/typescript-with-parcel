enum AutomobileTypes {
  car = "car",
  bus = "bus",
  van = "van",
  truck = "truck",
  bike = "bike",
}

enum AutomobileBrands {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}

enum AutomobileColors {
  red = "red",
  blue = "blue",
  white = "white",
  black = "black",
  silver = "silver",
}

interface Automobile<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

class Car
  implements Automobile<string, AutomobileBrands, AutomobileColors> {
  public type: string = "car";

  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string
  ) {
  }
}

class Truck
  implements Automobile<string, AutomobileBrands, AutomobileColors> {
  public type: string = "truck";

  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string
  ) {
  }
}

const ferrari: Car = new Car(
  AutomobileBrands.ferrari,
  [AutomobileColors.red, AutomobileColors.black],
  "This is a Ferrari"
);

const toyotaTruck: Truck = new Truck(
  AutomobileBrands.toyota,
  [AutomobileColors.black, AutomobileColors.silver],
  "This is a Toyota Truck"
);

console.log(ferrari);
console.log(toyotaTruck);
