const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.get("/", (req, res) => {
  res.json({ message: "test HTTP server for Ben" });
});

app.get("/env-variables", (req, res) => {
  res.json({ env_var: process.env.SECRET_VALUE });
});

app.post("/post", (req, res) => {
  res.json({
    success: true,
    message: "POST request endpoint reached",
    requestBody: req.body,
  });
});

// app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
