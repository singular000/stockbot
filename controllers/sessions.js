module.exports.controller = function (app) {

	app.get('/session', function (req, res) {
		res.json(req.session)
	});

	app.post('/setuser', function (req, res) {
		req.session.name = req.body.name;
		console.log(req.session)
		//res.json(req.session.name);
		// models.users.findOne({ where: {id: req.params.id}, include: [models.bots]}).then(function (result) {
		// 	res.json(result);
		// })

		//how can we watch to see if this has been changed and set the view accordingly?

		//remove the redirection.
		//res.redirect('/');

		res.json(req.session);
	});

	app.post('/login', function (req, res) {
		
		//go into the db, look for the 
		// models.users.findOne({ where: {id: req.params.id}, include: [models.bots]}).then(function (result) {
		// 	res.json(result);
		// })


		req.session.name = req.body.name;
		console.log(req.session);
		res.json(req.session);
	});

	app.post('/removeuser', function (req, res) {
		req.session.name = null
		
		res.json(req.session)
		
	});

}