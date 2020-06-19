const mongoose = require("mongoose");

const Event = mongoose.model('events');

module.exports = (app) => {
	app.post('/event', async (req, res) => {
		const {
			firstName,
			lastName,
			email,
			eventDate,
		} = req.body;

		const event = new Event({
			firstName,
			lastName,
			email,
			eventDate,
		});

		try {
			await event.save().status(200);
			res.send('Event app');

		} catch (err) {
			res.status(422).send(err);
		}
	});
}