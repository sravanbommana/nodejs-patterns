import { readFile } from "node:fs";
const readJSON = (fileName, callback) => {
  readFile(fileName, "utf8", (err, data) => {
    let parsed;
    if (err) {
      callback(err);
    }

    try {
      parsed = JSON.parse(data);
    } catch (error) {
      return callback(error);
    }
    callback(null, parsed);
  });
};

const cb = (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
};

readJSON("valid_json.json", cb);
readJSON("invalid_json.json", cb);
