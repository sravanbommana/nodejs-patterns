const additionAsync = (a, b, callback) => {
  setTimeout(() => callback(a + b), 100);
  console.log("@@@@");
};

console.log("Before");
additionAsync(5, 25, (result) => console.log("Result", result));
console.log("After");
