// controllers/facebookController.js
const request = require("request");

const getFbImage = (uid, callback) => {
  let url = `https://graph.facebook.com/${uid}/picture?width=1024&height=1024&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
  request(
    {
      url: url,
      encoding: null,
    },
    (err, resp, buffer) => {
      callback(err, resp, buffer);
    }
  );
};

module.exports = { getFbImage };
