const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to FitnessTracker App" });
});

module.exports = router;