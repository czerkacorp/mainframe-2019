// Set node environment
const env = process.env.NODE_ENV || "development";

//Load external node ackages
const config = require("config");
const express = require("express");

//Load routes from router
const root = require("./routes/root");
const api_v1 = require("./routes/api_v1");

//Load middleware
const app = express();

// Make loaded routes available
app.use("/", root);
app.use("/api/v1", api_v1);

//Start server and listen
app.listen(config.app.port, () => {
  console.log(
    `[Czerka Mainframe API Loaded]\n-- Mode: ${env}\n-- Port: ${
      config.app.port
    }`
  );
});
