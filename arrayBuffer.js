//resize_buffer.js
const buffer = new ArrayBuffer(4, { maxByteLength: 10 });

if (buffer.resizable) {
  console.log("The Buffer can be resized!");
  buffer.resize(8); // resize the buffer
}
console.log(`New Buffer Size: ${buffer.byteLength}`);
