const express = require('express');
const mongoose = require('mongoose');
const cookie = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoDbURI);

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cookie({
	maxAge: 30 * 24 * 60 * 60 * 1000,
	keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(PORT, _ => console.log('Running on 5000...'));