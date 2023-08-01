import express from "express";
// import { createServer } from "node:http";
// import { Server } from "socket.io";
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')))
// const httpServer = createServer(app);
// const io = new Server(httpServer, { /* options */ })
const PORT = process.env.PORT || 3000
// io.on("connection", (socket) => {
//     console.log('A user connected');
//     socket.on('disconnect', () => {
//         console.log('A user has disconnected')
//     })

//     socket.on('message', (msg) => {
//         console.log('Message from client: ', msg);
//     })

//     socket.emit('server', 'Receive from server')
// });

// httpServer.listen(PORT);
app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));