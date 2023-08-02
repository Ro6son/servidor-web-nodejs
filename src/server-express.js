const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  console.log(
    "🚀 ~ file: server-express.js:7 ~ app.get ~ request:",
    request.method
  );
  response.status(200).json({
    message: "Hello World",
  });
});

app.listen(3003, () => console.log("Server is running"));
