function getMyToken(callback1, callback2) {
  const token = generateToken();
  if (token > 50) {
    setTimeout(() => {
      callback1({ status: 200, token });
    }, 3000);
  } else {
    callback2({ status: 400, message: 'Not Found' });
  }
}

getMyToken(
  (response) => {
    console.log(response);
  },
  (reject) => {
    console.log(reject);
  }
);

function generateToken() {
  return (Math.random() * 100).toFixed();
}
