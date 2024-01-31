// controllers/teachController.js
const fs = require('fs');
const { loadMemory, saveMemory } = require('../utils/memoryUtils');

const teachMessage = (message, respond) => {
  const memory = loadMemory();
  memory[message] = respond;
  saveMemory(memory);
};

module.exports = { teachMessage };