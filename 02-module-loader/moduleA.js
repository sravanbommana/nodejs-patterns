const moduleB = require("/moduleB");
module.export = {
  run: () => {
    moduleB.log();
  },
};
