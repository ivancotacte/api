// routes/teachRoutes.js
const express = require('express');
const router = express.Router();
const { teachMessage } = require('../controllers/teachController');

router.get('/', (req, res) => {
  const { message, respond } = req.query;
  teachMessage(message, respond);
  res.json({ message: 'Success' });
});

module.exports = router;
