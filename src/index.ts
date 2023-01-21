let a: number[] = [1, 2, 3];
let b: Array<string> = ["a", "b", "c"];
let c: (string | number)[] = ["a", "b", 1];

type Airplane = {
  flightNumber: string;
  airplaneModel: string;
  dateOfDeparture: string;
  timeOfDeparture: string;
  from: string;
  to: string;
  seats: {
    [key: string]: string;
  };
};
