const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
	res.json({
		message: 'Post Created'
	});
});

app.post('/api/posts', verifyToken, (req, res) => {
	jwt.verify(req.token, 'someSecretKey', (err, authData) => {
		if (err) res.sendStatus(403);
		res.json({
			message: 'Post Created...',
			authData
		});
	});
});

app.post('/api/login', (req, res) => {
	// Mock User
	const user = {
		id: 23,
		username: 'B-rad',
		firstName: 'Brad',
		lastName: 'Vickers'
	};

	jwt.sign({ user }, 'someSecretKey', { expiresIn: '30s' }, (err, token) => {
		res.json({
			token
		});
	});
});
// Format of token
// Authorization: Bearer: <access_token>

// Verify Token
function verifyToken(req, res, next) {
	// Get auth header
	const bearerHeader = req.headers['authorization'];
	// Check if bearer is undefined
	if (typeof bearerHeader !== 'undefined') {
		console.log('bearerHeader:', bearerHeader);
		const bearer = bearerHeader.split(' ');
		// Get token from array
		const bearerToken = bearer[1];
		// Set the token
		req.token = bearerToken;
		// Next Middleware
		next();
	} else {
		console.log('Forbidden');
		// Forbidden
		res.sendStatus(403);
	}
}

app.listen(4000, () => console.log('Locked in Warp Gate 5000'));
