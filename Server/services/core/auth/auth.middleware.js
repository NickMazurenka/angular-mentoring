const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {

	router.post('/auth/login', (req, res, next) => {
		let users = server.db.getState().users,
			matchedUser = users.find((user) => {
				console.log(user);
				return user.login.toUpperCase() === req.body.username.toUpperCase();
			});

		if (!matchedUser) {
			res.status(401).send('Wrong username');
		} else if (matchedUser.password === req.body.password) {
			res.json({
				firstName: matchedUser.name.first,
				lastName: matchedUser.name.last,
				token: matchedUser.fakeToken
			});
		} else {
			res.status(401).send("Wrong password");
		}
	});

	return router;
};
