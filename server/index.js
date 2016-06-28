const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const router = require('./router');

const app = express();
mongoose.connect('mongodb://localhost:auth/auth');

/*** App setup ***/
app.use(morgan('dev'));
app.use(bodyParser.json({ type: '*/*' })); // TODO change this to application/json

router(app);

/*** Server setup ***/
const port = process.env.PORT || 3090;

app.listen(port, function() {
  console.log(`Server started on port ${port}`);
});
