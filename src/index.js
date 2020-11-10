require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const dialogFlow = require('./dialogflow.js');
const token = process.env.BOTFATHER_TOKEN
const youtube = require('./youtube.js');
const bot = new TelegramBot(token,{polling: true})


bot.on('message', async (msg) => {
  console.log(msg);
  const chatId = msg.chat.id

  console.log(msg.text);

  try {
    const dfResponse = await dialogFlow.sendMessage(chatId.toString(), msg.text)

    let responseText = dfResponse.text
    if (dfResponse.intent === 'intent treino') {
      responseText = await youtube.searchVideoURL(responseText,dfResponse.fields.corpo.stringValue)
    }

     await bot.sendMessage(chatId, responseText)
  } catch (error) {
    console.log(error);
  }

})