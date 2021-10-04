/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const SpeakerService = new SpeakersService('./data/speakers.json');

const routes = require('./routes');

const app = express();
const port = 3000;

// linking EJS template

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// middleware so express can get img and style. always with use()

app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes());

// port listening

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
