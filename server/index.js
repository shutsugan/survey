const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookie = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoDbURI, {useNewUrlParser: true});

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json())

app.use(cookie({
	maxAge: 30 * 24 * 60 * 60 * 1000,
	keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV) {
	app.use(express.static('client/build'));

	const path = require('path');
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
}

app.listen(PORT, _ => console.log('Running on 5000...'));
