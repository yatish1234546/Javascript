const strArray = ["JS", "Python", "Ruby", "PHP", "Java", "C"];

function customFunc(arr, fn) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }

  return newArray;
}

const lenArray = customFunc(strArray, item => item.split("").join("*"));

console.log(lenArray);
