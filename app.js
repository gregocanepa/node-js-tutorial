const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Welcome to our Homepage!')
    res.end()
})

// this starts the server
server.listen('5000')
