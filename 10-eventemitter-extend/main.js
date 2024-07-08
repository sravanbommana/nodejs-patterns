import { readFile } from "node:fs";
import { EventEmitter } from "node:events";

class FindRegEx extends EventEmitter {
  constructor(regEx) {
    super();
    this.files = [];
    this.regEx = regEx;
  }

  addFile(file) {
    this.files.push(file);
    return this;
  }

  find() {
    for (const file of this.files) {
      readFile(file, "utf8", (err, content) => {
        if (err) {
          this.emit("error", (error) => console.log(error));
        }
        this.emit("readfile", file);
        const match = content.match(this.regEx);
        if (match) {
          match.forEach((ele) => this.emit("found", file, ele));
        }
      });
    }
    return this;
  }
}

const findRegexInstance = new FindRegEx(/hello \w+/);
findRegexInstance.addFile("fileA.txt");
findRegexInstance.addFile("fileB.json");
findRegexInstance
  .find()
  .on("error", (error) => console.log(error))
  .on("found", (file, ele) =>
    console.log(`found file : ${file} and found match ${ele}`)
  );
