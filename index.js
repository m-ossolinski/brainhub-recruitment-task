const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('./models/Event');
const eventRoutes = require('./routes/eventRoutes');
const { mongoURI } = require('./config/keys');

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(bodyParser.json());

eventRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);