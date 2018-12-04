const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    title: "Citadel Mainframe",
    body: {
      message:
        "Citadel Mainframe is the gateway to your SWGEmu Core3 MySQL server. It allows easy access to your database, so you can spend time building more client side applications.",
      instructions:
        "In order to use Mainframe, you should be calling the API endpoint, which is at https://your-host-here.com:port/api/v1"
    }
  });
});

module.exports = router;
