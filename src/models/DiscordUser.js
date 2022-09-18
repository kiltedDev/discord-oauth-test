const mongoose = require('mongoose');

const DiscordUserSchema = new mongoose.Schema({
  discordId: { type: String, required: true },
  username: { type: String, required: true },
});

const DiscordUser = mongoose.model('DiscordUser', DiscordUserSchema);
module.exports = DiscordUser;
