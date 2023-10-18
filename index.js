import { readFile } from "fs/promises";

async function readFileContents(filename) {
  const content = await readFile(filename, "utf8");
  console.log(content);
}

readFileContents("./data.txt");
