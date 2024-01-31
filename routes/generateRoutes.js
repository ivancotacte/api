// routes/generateRoutes.js
const express = require("express");
const router = express.Router();
const { generateImage } = require("../controllers/generateController");
const path = require("path");

router.get("/", async (req, res) => {
  const prompt = req.query.prompt;
  if (!prompt) {
    return res
      .status(400)
      .json({ error: "" });
  }

  try {
    const imgPath = await generateImage(prompt);
    const imageURL = `${req.protocol}://${req.get('host')}/cache/${path.basename(imgPath)}`;
    res.json({
      url: imageURL,
      message: 'Image will be deleted after 1 hour!',
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "An error occurred while generating the image." });
  }
});

module.exports = router;