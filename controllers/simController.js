// controllers/simController.js
const fs = require('fs');
const { loadMemory } = require('../utils/memoryUtils');

const getResponse = (message) => {
  const memory = loadMemory();
  return memory[message] || `I dont know about '${message}' can you teach me?`;
};

module.exports = { getResponse };