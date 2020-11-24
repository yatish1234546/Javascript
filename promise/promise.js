const prom1 = Promise.reject("I am Prom 1");
const prom2 = Promise.resolve("I am Prom 2");
const prom3 = Promise.reject("I am Prom 3");
const prom4 = Promise.resolve("I am prom 4");

Promise.all([prom1, prom2, prom3, prom4])
  .then(res => console.log("all", res))
  .catch(err => console.log("all failed", err));

Promise.allSettled([prom1, prom2, prom3, prom4])
  .then(res => console.log("allSettled", res))
  .catch(err => console.log("allSettled failed", err));

Promise.any([prom1, prom2, prom3, prom4])
  .then(res => console.log("any", res))
  .catch(err => console.log("any failed", err));

Promise.race([prom1, prom2, prom3, prom4])
  .then(res => console.log("race", res))
  .catch(err => console.log("race failed", err));
