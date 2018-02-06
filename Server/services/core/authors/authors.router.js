// REWRITE EXAMPLE
const express = require('express');
const jsonServer = require('json-server');
const router = express.Router();

router.use(jsonServer.rewriter({
	'/authors': '/authors',
	'/authors/:id': '/authors/:id',
}));

module.exports = router;