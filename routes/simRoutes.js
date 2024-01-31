// routes/simRoutes.js
const express = require('express');
const router = express.Router();
const { getResponse } = require('../controllers/simController');

router.get('/', (req, res) => {
  const { message } = req.query;
  const response = getResponse(message);
  res.json({ response });
});

module.exports = router;
