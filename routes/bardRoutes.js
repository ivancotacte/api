const express = require('express');
const router = express.Router();
const { BardAI, startBard } = require('../controllers/bardController');

router.get('/bard', async (req, res) => {
  const { ask } = req.query;
  try {
    const bard = new BardAI();
    await bard.login();
    const response = await startBard(ask);
    const { message, imageUrls } = response;
    res.json({ message, imageUrls });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
