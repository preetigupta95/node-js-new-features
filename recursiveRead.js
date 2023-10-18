// list_directories.js
import { readdir } from "node:fs/promises";

async function readFiles(dirname) {
  const entries = await readdir(dirname, { recursive: true });
  console.log(entries);
}
readFiles("data"); // <- "data" is the root directory name
