function CustomPromise(func) {}
CustomPromise.prototype.then = function() {
  return func(response => response, null);
};

CustomPromise.prototype.catch = function() {
  return func(null, error => error);
};
const customPromise = new CustomPromise((resolve, reject) => {
  const token = Math.floor(Math.random() * 100);

  if (token < 50) {
    resolve({ token, message: 200 });
  } else {
    reject({ token: null, message: 404 });
  }
});

console.log(customPromise);

const promise = new Promise((resolve, reject) => {
  const token = Math.floor(Math.random() * 100);

  if (token < 50) {
    setTimeout(() => {
      resolve({ token, message: 200 });
    }, 100);
  } else {
    setTimeout(() => {
      reject({ token: null, message: 404 });
    }, 100);
  }
});

console.log(promise);

// promise.then(token => {
//   console.log(token);
// }).catch(error => {
//   console.log(error)
// });
