const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    email: process.env.EMAIL,
    current_datetime: new Date().toISOString(),
    github_url: process.env.GITHUB_URL,
  });
});

module.exports = router;