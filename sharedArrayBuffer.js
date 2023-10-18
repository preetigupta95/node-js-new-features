// grow_buffer.js
const buffer = new SharedArrayBuffer(4, { maxByteLength: 10 });

if (buffer.growable) {
  console.log("The SharedArrayBuffer can grow!");
  buffer.grow(8);
}
console.log(`New Buffer Size: ${buffer.byteLength}`);
