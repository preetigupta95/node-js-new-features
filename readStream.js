import { ReadableStream } from "node:stream/web";

const stream = new ReadableStream({
  async start(controller) {
    // Enqueue some data into the stream
    controller.enqueue("Hello, ");
    controller.enqueue("world!");
    controller.close(); // Close the stream after enqueuing data
  },
});

(async () => {
  for await (const chunk of stream) {
    console.log(chunk); // Output: 'Hello, ' and 'world!'
  }
})();
