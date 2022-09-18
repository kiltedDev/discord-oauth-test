require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () =>
  console.log(`Now listening to requests on port ${PORT}`)
);