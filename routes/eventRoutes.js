const mongoose = require("mongoose");

const Event = mongoose.model('events');

module.exports = (app) => {
	app.post('/api/event', async (req, res) => {
		const {
			firstName,
			lastName,
			email,
			eventDate,
		} = req.body;

		if (!firstName || !lastName || !email || !eventDate) {
			return res.status(404).send('An error occured. all data on the form must be sent');
		}

		const event = new Event({
			firstName,
			lastName,
			email,
			eventDate,
		});

		try {
			await event.save();
			res.send('Event app').status(200);

		} catch (err) {
			res.status(422).send(err);
		}
	});
}