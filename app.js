const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.get("/env-variables", (req, res) => {
  res.json({ env_var: process.env.SECRET_VALUE });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
