const express = require('express');
const morgan = require('morgan');

const personRouters = require('./routes/personRouters');
const usersRouter = require('./routes/userRouters');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

//2) MOUNTING ROUTERS

app.use('/api/v1/person', personRouters);
app.use('/api/v1/users', usersRouter);

module.exports = app;
