const addCps = (a, b, callback) => {
  callback(a + b);
};

console.log("Before");
addCps(10, 5, (sum) => console.log("sum", sum));
console.log("after");
