Array.prototype.myMap = function (callback) {
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }

  return newArray;
};
