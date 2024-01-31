const router = require("express").Router();
const path = require('path');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const generateRoutes = require("./generateRoutes");
const facebookRoutes = require("./facebookRoutes");
const quoteRoutes = require("./quoteRoutes");
const teachRoutes = require('./teachRoutes');
const simRoutes = require('./simRoutes');
const pinterestRoutes = require('./pinterestRoutes');
const emailRoutes = require('./emailRoutes');
const tiktokRoutes = require('./tiktokRoutes');
const bardRoutes = require('./bardRoutes');

router.use('/api', bardRoutes);
router.use('/api/tiktok', tiktokRoutes);
router.use('/api/email', emailRoutes);
router.use('/api/pinterest', pinterestRoutes);
router.use('/api/teach', teachRoutes);
router.use('/api/sim', simRoutes);
router.use("/api/quotes", quoteRoutes);
router.use("/api/fbimage", facebookRoutes);
router.use("/api/generate", generateRoutes);




module.exports = router;