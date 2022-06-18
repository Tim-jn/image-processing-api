import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
