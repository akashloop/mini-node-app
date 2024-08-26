const express = require("express");
const app = express();

app.get("/status", (req, res) => {
  res.send("server is working!");
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
