import { request } from "http";

const sendRequest = (requestNumber) => {
  const options = {
    hostname: "localhost",
    port: 3000,
    path: "/",
    method: "GET",
    headers: {
      Connection: "keep-alive",
    },
  };

  const client = request(options, (res) => {
    res.on("data", (data) => {
      console.log(`Request ${requestNumber} Response:`, data.toString());
    });
    res.on("end", () => {
      console.log(`Request ${requestNumber} finished.`);
    });
  });

  client.on("error", (error) => {
    console.error(`Request ${requestNumber} error:`, error);
  });

  client.end();
};

// Send multiple non-keep-alive requests
for (let i = 1; i <= 3; i++) {
  sendRequest(i);
}
