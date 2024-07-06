class Logger {
  constructor(name) {
    this.name = name;
  }

  info = (message) => {
    console.log("info :: ", message);
  };

  warning = (message) => {
    console.log("warning :: ", message);
  };

  verbose = (message) => {
    console.log("warning :: ", message);
  };
}

module.exports = Logger;
