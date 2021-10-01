function Vehicle() {}

Vehicle.prototype.travelTime = function () {
  return this._timeTaken;
};

function Bus() {
  this._timeTaken = '15min';
}

Bus.prototype = Vehicle.prototype;

function Car() {
  this._timeTaken = '5min';
}

Car.prototype = Vehicle.prototype;

function Commute() {}

Commute.prototype.travelTime = function (transport) {
  return transport.travelTime();
};
const B1 = new Commute();
console.log(B1.travelTime(new Bus()));
