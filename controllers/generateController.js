// controllers/generateController.js
const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const baseCache = path.join(__dirname, '..', 'cache');
fs.ensureDirSync(baseCache);

const imgTimestamp = {};

const generateImage = async (prompt) => {
  try {
    const baseUrl = `https://image.pollinations.ai/prompt/${prompt}`;
    const response = await axios.get(baseUrl, {
      responseType: "arraybuffer",
    });

    const imgFilename = `${uuidv4()}.jpg`;
    const imgPath = path.join(baseCache, imgFilename);
    fs.writeFileSync(imgPath, response.data);
    imgTimestamp[imgFilename] = Date.now();

    setTimeout(() => {
      if (imgTimestamp[imgFilename]) {
        fs.unlink(imgPath, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log(`Deleted: ${imgFilename}`);
          }
        });
        delete imgTimestamp[imgFilename];
      }
    }, 60 * 60 * 1000);

    return imgPath;
  } catch (error) {
    console.error(error.message);
    throw new Error("An error occurred while generating the image.");
  }
};

module.exports = { generateImage };
