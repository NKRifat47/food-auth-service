const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const route = require("./routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", route);

app.get("/", (req, res) => {
  res.send("Auth Service Running...");
});

module.exports = app;
