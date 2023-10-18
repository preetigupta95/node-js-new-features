import { BroadcastChannel } from "worker_threads";

const channel = new BroadcastChannel("myChannel");

channel.onmessage = (event) => {
  console.log(`Received message: ${event.data}`);
};

channel.postMessage("Hello from BroadcastChannel!");
