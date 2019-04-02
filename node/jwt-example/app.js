const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
	res.json({
		message: 'Post Created'
	});
});

app.post('/api/post', (req, res) => {
	res.json({
		message: 'Post Created'
	});
});

app.post('/api/login', (req, res) => {
	// Mock User

	jwt.sign();
});

app.listen(5000, () => console.log('Locked in Warp Gate 5000'));
