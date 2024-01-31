// routes/facebookRoutes.js
const express = require("express");
const router = express.Router();
const { getFbImage } = require("../controllers/facebookController");

router.get("/:uid", (req, res) => {
  const uid = req.params.uid;

  getFbImage(uid, (err, resp, buffer) => {
    if (err) {
      res.status(500).json({ error: "An error occurred while fetching the image." });
    } else {
      res.set("Content-Type", resp.headers["content-type"]);
      res.send(buffer);
    }
  });
});

module.exports = router;
