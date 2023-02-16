const http = require('http');
const express = require('express');
const cors = require('cors');

// import `items` from `routes` folder
const {createUser, getUsers, getData, getFindedData, login, register } = require('../routes/item')
// create new app
const app = express();
// for cors error
app.use(cors());
app.use(express.json());

// app.get('/', getData);
// app.get('/:id', getFindedData);
app.post('/login', login);
app.post('/register', register);
app.get('/users', getUsers);
app.post('/users', createUser);

const server = http.createServer(app);
const port = 4000;
server.listen(port);
console.debug('Server listening on port ' + port);
