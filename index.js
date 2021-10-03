// Import stylesheets
import './style.css';
import './promise/callbacks.js';
// import "./prototypes/prototype-interview.js";
// import "./memoization/memoization.js";
// import "./higher-order-functions/higherorderfuncs.js";
// Write Javascript code!

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function cache() {
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }
}

cache();
