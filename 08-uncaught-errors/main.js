import { readFile } from "node:fs";

const readJSON = (fileName, callback) => {
  readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.log(callback(err));
    }
    const parsed = JSON.parse(data);
    callback(null, parsed);
  });
};

// The error is not propagated to the final callback nor is caught
// by a try/catch statement
try {
  readJSON("valid_json.json", (error) => console.log(error));
} catch (error) {
  console.log("This will NOT catch the JSON parsing exception");
}

// Our last chance to intercept any uncaught error
process.on("uncaughtException", (err) => {
  console.error(
    `This will catch at last the JSON parsing exception: ${err.message}`
  );
  // Terminates the application with 1 (error) as exit code.
  // Without the following line, the application would continue
  process.exit(1);
});
