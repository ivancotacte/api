// controllers/quoteController.js
const axios = require("axios");

const getTodayQuote = async () => {
  try {
    const response = await axios.get('https://zenquotes.io/api/today');

    if (response.data[0].q == null && response.data[0].a == null) {
      return {
        status: "error",
        code: 400,
        result: null
      };
    } else {
      return {
        status: "success",
        code: 200,
        result: {
          quote: response.data[0].q,
          author: response.data[0].a
        }
      };
    }
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching today's quote.");
  }
};

const getRandomQuote = async () => {
  try {
    const response = await axios.get('https://zenquotes.io/api/random');

    if (response.data[0].q == null && response.data[0].a == null) {
      return {
        status: "error",
        code: 400,
        result: null
      };
    } else {
      return {
        status: "success",
        code: 200,
        result: {
          quote: response.data[0].q,
          author: response.data[0].a
        }
      };
    }
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching a random quote.");
  }
};

module.exports = { getTodayQuote, getRandomQuote };
