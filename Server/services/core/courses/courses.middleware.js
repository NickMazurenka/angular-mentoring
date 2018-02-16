const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {

	router.get('/courses', (req, res, next) => {
		let url_parts = url.parse(req.originalUrl, true),
			query = url_parts.query,
			from = query.start ? query.start : 0,
			to = query.count ? +query.start + +query.count : null,
			sort = query.sort,
			filter = query.filter,
			queryStr = query.query,
			courses = server.db.getState().courses;
		//console.log(sort);
		//console.log(queryStr);
		if (courses.length < to || to === null) {
			to = courses.length;
		}
		if (filter != null) {
			courses = courses.filter(course => {
				return course.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
			});
		}
		let total = courses.length;
		courses = courses.slice(from, to);

		res.json({ courses, total });
	});

	return router;
};
