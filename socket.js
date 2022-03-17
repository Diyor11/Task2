const express = require('express')
const app = express()
const server = require('http').createServer(app)
const {Server} = require('socket.io')
const io = new Server(server, {cors: {origin: 'http://localhost:3000'}})

io.on('connection', (socket) => {
    console.log('connect: ' + socket.id)

    socket.on('disconnect', () => console.log('disconnect ' + socket.id))
})

server.listen(8080, () => console.log('Server working localhost:8080'))

module.exports = io