import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import Connection from '../classes/connection';
import middlewares from './middlewares';
import routes from './routes';

export default (connections: Connection[]) => {

  const app = express();
  const server = http.createServer(app);
  const io = socketIO(server);
  
  middlewares(app);
  routes(app);

  io.on('connection', (socket) => {
    console.log(socket);
  });

  server.listen(8000, () => {
    console.log('HTTP Server running at port: ' + 8000);
  });
}