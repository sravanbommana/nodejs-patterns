import { readFileSync } from "node:fs";
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
    let content;
    for (const file of this.files) {
      try {
        content = readFileSync(file, "utf8");
      } catch (error) {
        this.emit("error", error);
      }
      this.emit("filread", file);
      const match = content.match(this.regEx);
      if (match) {
        match.forEach((elem) => this.emit("found", file, elem));
      }
    }
    return this;
  }
}

const findRegexInstance = new FindRegEx(/hello \w+/);
findRegexInstance.addFile("fileA.txt");
findRegexInstance.addFile("fileB.json");
// In  synchronous approach, listner should invoked first
findRegexInstance
  .on("error", (error) => console.log(error))
  .on("found", (file, ele) =>
    console.log(`found file : ${file} and found match ${ele}`)
  )
  .find();
