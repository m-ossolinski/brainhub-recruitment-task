const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	dataSent: Date,
});

mongoose.model("events", eventSchema);