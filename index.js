const express = require("express");
const mongoose = require("mongoose");
require('./models/Event');
const eventRoutes = require('./routes/eventRoutes');
const { mongoURI } = require('./config/keys');

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

eventRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);