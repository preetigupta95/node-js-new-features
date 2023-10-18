import { createServer } from "http";

const server = createServer((req, res) => {
  // Check if the "Connection" header is set to "keep-alive"
  const isKeepAlive = req.headers["connection"] === "keep-alive";

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write(`Keep-Alive: ${isKeepAlive ? "true" : "false"}`);
  res.end();
});
//server.maxConnections = 2;

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
