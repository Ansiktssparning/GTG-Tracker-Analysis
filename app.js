const express = require('express'); // Inkluderar express.js
const path = require('path'); // Inkluderar path, mestadels filhantering

const app = express(); // Skapar en express.js applikation
const server = require('http').Server(app); // Inkluderar http och skapar en server objekt med app  
const io = require('socket.io')(server); // Inkluderar socket.io och initierar en io objekt med http servern

const port_client = 3001; // Port nummer för hemsidan

const public_folder = path.join(__dirname, '/public'); // Skapar en absolute path till public mappen

app.get('/', function(req, res) {
    res.sendFile(path.join(public_folder, 'index.html')); // Skickar html filen till hemsidan och sätter HTTP Content Header till filtypen
});

app.use(express.static(public_folder)); // Skickar statiska filer (CSS, JS, bilder osv) till hemsidan

server.listen(port_client, function() {
  console.log(`Server running at http://localhost:${port_client}/`); // Skickar en länk till hemsidan i konsolfönstret
});

io.on('connection', function(socket) { // Funktion till när servern får en connection event
    console.log('A connection was made'); // Skickar meddelande när hemsidan öppnas via TCP
});