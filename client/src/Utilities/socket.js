import io from 'socket.io-client'

const url = 'http://localhost:8080'

const socket = io(process.env.REACT_APP_SOCKET_API || url)

export default socket
