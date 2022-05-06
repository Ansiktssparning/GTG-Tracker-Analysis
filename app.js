const express = require('express');
const path = require('path');
// const displayFunctions = require('./public/tracker_plugin');
const jsonData = require('./data.json');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const public = path.join(__dirname, '/public');
const port_client = 3000;

app.get('/', function(req, res) {
  res.sendFile(path.join(public, '/index.html'));
});

app.use(express.static(public));
/*
server.listen(8080, () => {
  console.log('listening om *:8080');
});*/

app.listen(port_client, function() {
  console.log(`Server running at http://localhost:${port_client}/`);
});

io.on('connection', function(socket) {
  console.log('A connection was made');
})