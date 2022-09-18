const mongoose = require('mongoose');

const URL = `mongodb+srv://templeMalleus:${process.env.MONGO_DB_PASSWORD}@cluster0.9itungd.mongodb.net/GrimalkinsCollection?retryWrites=true&w=majority`;

const connection = mongoose.connect(URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = connection;
