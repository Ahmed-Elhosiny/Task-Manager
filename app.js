const express = require('express');
const morgan = require('morgan');
const tasksRouter = require('./routes/tasksRouter');
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.static('./public'));
app.use(morgan('dev'));

// ROUTES
app.use('/api/v1/tasks', tasksRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
