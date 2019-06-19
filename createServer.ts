import net from 'net';

function createServer(port: Number, callback: any) {
  const server = net.createServer((socket: any) => {

    const id = `${socket.remoteAddress}:${socket.remotePort}`;

    console.log(`[${id}][connect]: connected.`);

    socket.on('data', (data: any) => {
      console.log(`[${id}][data]: ${data}`);
    });

    socket.on('end', () => {
      console.log(`[${id}][end]: desconnected.`);
    });

    callback(socket);
  });

  server.listen(port, () => {
    console.log('Server running at port: ' + port);
  });
}

export default createServer;