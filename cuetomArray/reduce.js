Array.prototype.myReduce = function (operation, accum) {
  for (let i = 0; i < this.length; i++) {
    operation((accum = accum + this[i]));
  }

  return accum;
};
