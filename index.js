require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
if (!token) {
  console.error('Укажите BOT_TOKEN в файле .env');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

const reply = 'Привет, я бот!';

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, reply);
});

console.log('Бот запущен (long polling)');
