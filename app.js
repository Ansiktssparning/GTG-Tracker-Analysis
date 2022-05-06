const express = require('express');
const path = require('path');
const { Server } = require("socket.io");
// const displayFunctions = require('./public/tracker_plugin');
const jsonData = require('./data.json');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {cors: {origin: '*'}});

const public = path.join(__dirname, '/public');
const hostname = "127.0.0.1";
const port_client = 3000;
const port_server = 8080;

app.get('/', function(req, res) {
  res.sendFile(path.join(public, 'index.html'));
});

app.use(express.static(public));
/*
server.listen(8080, () => {
  console.log('listening om *:8080');
});*/

app.listen(port_client, function() {
  console.log(`Server running at http://localhost:${port_client}/`);
});

io.on('connection', () => {
  console.log(`User connected: ${socket.id}`);
});