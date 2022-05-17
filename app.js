const express = require('express');
const path = require('path');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port_client = 3001;

const public_folder = path.join(__dirname, '/public');

app.get('/', function(req, res) {
    res.sendFile(path.join(public_folder, 'index.html'));
});

app.use(express.static(public_folder));

server.listen(port_client, function() {
  console.log(`Server running at http://localhost:${port_client}/`);
});

io.on('connection', function(socket) {
    console.log('A connection was made');
})