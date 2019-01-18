const express = require('express');
const mongoose = require('mongoose');

const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoDbURI);

const PORT = process.env.PORT || 5000;
const app = express();

require('./routes/authRoutes')(app);

app.listen(PORT, _ => console.log('Running on 5000...'));