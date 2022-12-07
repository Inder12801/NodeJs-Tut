const http = require("http");
// console.log(http);

// creating a local server

const server = http.createServer((req, res) => {
  console.log(req);
});

const host = "localhost";
const port = 8000;

server.listen(port, host, () => {
  console.log("Active server");
});
