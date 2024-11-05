const TelegramBot = require("node-telegram-bot-api");

const botToken = "7646116203:AAE-lo2mxKHPDaJwkuTLsrnPl9cQXPAjg9w";
const kayaChatId = "SOURCE_CHAT_ID";
const myChatId = "DESTINATION_CHAT_ID";

// Initialize the bot
const bot = new TelegramBot(botToken, { polling: true });

console.log("Bot is running and listening for messages...");

// Listen for messages in the source chat
bot.on("message", (msg) => {
  if (msg.chat.id.toString() === kayaChatId) {
    // Forward the message to the destination chat
    bot
      .forwardMessage(myChatId, msg.chat.id, msg.message_id)
      .then(() => {
        console.log(`Message forwarded to chat ${myChatId}`);
      })
      .catch((error) => {
        console.error("Error forwarding message:", error);
      });
  } else {
    console.log("Received message from an unmonitored chat ID");
  }
});
