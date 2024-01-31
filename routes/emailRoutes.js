// routes/emailRoutes.js
const express = require('express');
const router = express.Router();
const { generateRandomEmail, getEmailMessages } = require('../controllers/emailController');

router.get('/get', async (req, res) => {
  try {
    const email = await generateRandomEmail();
    res.json({ email });
  } catch (error) {
    res.status(500).json({ error: 'Err: 500' });
  }
});

router.get('/get/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const emailMessages = await getEmailMessages(email);
    res.json(emailMessages);
  } catch (error) {
    res.status(500).json({ error: 'Err: 500' });
  }
});

module.exports = router;
