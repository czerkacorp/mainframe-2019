const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send({
    title: "API Endpoint, woohoo",
    body: {
      message: "I have a bad feeling about this......"
    }
  });
});

module.exports = router;
