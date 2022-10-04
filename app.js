const express = require('express');
const app = express();
const usersRouter = require('./todos/users.router')

app.use(express.json());
app.use(usersRouter);

app.listen(3000, function () {
    console.log('Listening at port 3000');
});