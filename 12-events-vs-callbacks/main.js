import { EventEmitter } from "node:events";

const helloEvents = () => {
  const emitter = new EventEmitter();
  setTimeout(() => emitter.emit("complete", "hello emitter"), 100);
  return emitter;
};

const helloCallbacks = (cb) => {
  setTimeout(() => cb(null, "Hello Callback"), 100);
};

helloEvents().on("complete", (message) => console.log(message));
helloCallbacks((err, message) => console.log(message));
