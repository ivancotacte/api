// routes/quoteRoutes.js
const express = require("express");
const router = express.Router();
const { getTodayQuote, getRandomQuote } = require("../controllers/quoteController");

router.get("/today", async (req, res) => {
  try {
    const todayQuote = await getTodayQuote();
    res.json(todayQuote);
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
});

router.get("/random", async (req, res) => {
  try {
    const randomQuote = await getRandomQuote();
    res.json(randomQuote);
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
});

module.exports = router;
