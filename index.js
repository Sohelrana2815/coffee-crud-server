const express = require("express");
const cors = require("cors");
require("dotenv");

const app = express();
const port = process.env.PORT || 5000;

// middleware

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("COFFEE CRUD SERVER IS RUNNING.");
});

app.listen(port, () => {
  console.log(`COFFEE SERVER IS RUNNING ON PORT ${port}`);
});
