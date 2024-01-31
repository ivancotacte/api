// routes/tiktokRoutes.js
const express = require('express');
const router = express.Router();
const { getTikTokDownload } = require('../controllers/tiktokController');

router.get('/download', async (req, res) => {
  const link = req.query.link;

  if (!link) {
    return res.jsonp({ error: 'Thiếu dữ liệu để thực thi lệnh' });
  }

  try {
    const tiktokData = await getTikTokDownload(link);
    res.jsonp(tiktokData);
  } catch (error) {
    res.jsonp({ error: 'Đã xảy ra lỗi' });
  }
});

module.exports = router;
