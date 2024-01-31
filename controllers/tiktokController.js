// controllers/tiktokController.js
const axios = require('axios');

const getTikTokDownload = async (link) => {
  try {
    const resp = await axios.post('https://www.tikwm.com/api/', {
      url: link,
      count: 12,
      cursor: 0,
      hd: 1
    });

    if (resp.status === 200) {
      return resp.data.data;
    } else {
      throw new Error('An error occurred while fetching TikTok download data.');
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An error occurred while fetching TikTok download data.');
  }
};

module.exports = { getTikTokDownload };