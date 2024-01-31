// controllers/emailController.js
const axios = require('axios');

const generateRandomEmail = async () => {
  try {
    const response = await axios.get('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1');
    return response.data[0];
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while generating random email.');
  }
};

const getEmailMessages = async (email) => {
  try {
    const divide = email.split('@');
    const name = divide[0];
    const domain = divide[1];
    const response = await axios.get(`https://www.1secmail.com/api/v1/?action=getMessages&login=${name}&domain=${domain}`);
    const messages = response.data;
    const mainmsg = [];

    for (const message of messages) {
      const msgId = message.id;
      const sendmsg = await axios.get(`https://www.1secmail.com/api/v1/?action=readMessage&login=${name}&domain=${domain}&id=${msgId}`);
      const sendmessage = {
        from: sendmsg.data.from,
        subject: sendmsg.data.subject,
        body: sendmsg.data.textBody,
        date: sendmsg.data.date
      };
      mainmsg.push(sendmessage);
    }

    return mainmsg;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while fetching email messages.');
  }
};

module.exports = { generateRandomEmail, getEmailMessages };