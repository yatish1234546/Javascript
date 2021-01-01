function fibonacci(num) {
  if (num <= 1) {
    return num;
  }
  return fibonacci(num - 2) + fibonacci(num - 1);
}

function memoize(fun) {
  let cache = {};

  return function(n) {
    if (cache[n] !== undefined) {
      console.log("Sent From Cache");
      return cache[n];
    } else {
       console.log("Freshly Created");
      return (cache[n] = fun(n));
    }
  };
}

let memoizedFib = memoize(fibonacci);

memoizedFib(5);
memoizedFib(6);
memoizedFib(9);
memoizedFib(6)