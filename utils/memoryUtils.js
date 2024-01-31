// utils/memoryUtils.js
const fs = require('fs');
const path = require('path');

const mainData = path.join(__dirname, '..', 'memory.json');

const loadMemory = () => {
  try {
    const memoryData = fs.readFileSync(mainData);
    return JSON.parse(memoryData);
  } catch (error) {
    console.error('Error loading memory:', error);
    return {};
  }
};

const saveMemory = (memory) => {
  try {
    fs.writeFileSync(mainData, JSON.stringify(memory, null, 2));
  } catch (error) {
    console.error('Error saving memory:', error);
  }
};

module.exports = { loadMemory, saveMemory };
