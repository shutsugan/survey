const express = require('express');

const PORT = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res) => {
	res.send({hi: 'Hollow...'});
});

app.listen(PORT, _ => console.log('Running on 5000...'));