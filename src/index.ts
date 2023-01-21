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
