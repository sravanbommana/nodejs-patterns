import { EventEmitter } from "node:events";
import { readFile } from "node:fs";

const findRegEx = (files, regEx) => {
  const emitter = new EventEmitter();
  for (const file of files) {
    readFile(file, "utf8", (err, data) => {
      if (err) {
        emitter.emit("error", err);
      }
      emitter.emit("fileread", file);
      const match = data.match(regEx);
      if (match) {
        match.forEach((ele) => emitter.emit("found", file, ele));
      }
    });
  }
  return emitter;
};

findRegEx(["fileA.txt", "fileB.json"], /hello \w+/g)
  .on("fileread", (file) => console.log(file, "was read"))
  .on("error", (error) => console.log(error))
  .on("found", (file, match) => console.log(`Matched "${match}" in ${file}`));
