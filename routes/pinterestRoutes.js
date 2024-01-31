// routes/pinterestRoutes.js
const express = require('express');
const router = express.Router();
const { searchPinterestPins } = require('../controllers/pinterestController');

router.get('/', (req, res) => {
  const search = req.query.search;
  if (!search) {
    return res.json({ error: 'Thiếu dữ liệu để thực thi lệnh' });
  }

  searchPinterestPins(search, (result) => {
    if (result) {
      res.json(result);
    } else {
      res.status(500).json({ error: 'An error occurred while searching Pinterest pins.' });
    }
  });
});

module.exports = router;
