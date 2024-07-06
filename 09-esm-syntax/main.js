// import all the members of module
import * as LoggerModule from "./logger";
// import specific functions
import { log, Logger } from "./logger";

// handle name clash like below if you already have a variable with same name
import { test as test1 } from "./logger";
const test = "!1234";
console.log(test);
