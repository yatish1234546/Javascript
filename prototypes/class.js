class Vehicle {
  travelTime() {
    return this._timeTaken;
  }
}

class Bus extends Vehicle {
  constructor() {
    super();
    this._timeTaken = '15min';
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    this._timeTaken = '5min';
  }
}

class Commute {
  travelTime(transport) {
    return transport.travelTime();
  }
}
const commute = new Commute();

console.log(commute.travelTime(new Bus()));
console.log(commute.travelTime(new Car()));
