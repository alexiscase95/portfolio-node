const express = require('express');
const morgan = require('morgan');

const aboutRouter = require('./routes/aboutRouters');
const usersRouter = require('./routes/userRouters');

const app = express();

// 1) MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

//2) MOUNTING ROUTERS

app.use('/api/v1/about', aboutRouter);
app.use('/api/v1/users', usersRouter);

module.exports = app;