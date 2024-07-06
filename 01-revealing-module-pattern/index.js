const myModule = (() => {
  const privateFoo = () => {};
  const privateBar = () => {};

  const publicFoo = () => {};
  const publicBar = () => {
    console.log("Test Passed");
  };

  return {
    publicFoo,
    publicBar,
  };
})();

console.log(myModule.publicBar());
