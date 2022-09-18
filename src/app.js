require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const db = require('./database');
const discordStrategy = require('./strategies/discordStrategy').Strategy;

// ROUTES
const authRoute = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 8080;

db.then(() => console.log('Connected to MongoDB')).catch(err =>
  console.log(err)
);

app.use(
  session({
    secret: 'some random secret',
    cookie: {
      maxAge: 60000 * 60 * 24,
    },
    saveUninitialized: false,
    name: 'discord.oauth2',
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Middleware Routes
app.use('/auth', authRoute);

app.listen(PORT, () =>
  console.log(`Now listening to requests on port ${PORT}`)
);
