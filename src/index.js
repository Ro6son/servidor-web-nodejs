const http = require("http");

const app = http.createServer((request, response) => {
  console.log(request.method, request.url);
  const users = [
    {
      id: 1,
      name: "Rob",
    },
    {
      id: 2,
      name: "Ale",
    },
    {
      id: 3,
      name: "Jesus",
    },
  ];

  if (request.method === "GET" && request.url === "/") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(users));
  } else {
    response.writeHead(404, { "Content-type": "text/plain" });
    response.end(`Cannot => ${request.method} ${request.url}`);
  }
});

app.listen(3333, () => console.log("Server is running"));
