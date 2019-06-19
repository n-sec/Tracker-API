const net = require('net');

const client = new net.Socket();

client.connect(5001, '127.0.0.1', () => {
  console.log('connected');
  client.write('##,imei:123456789012345,A;');
  // socket.write('1234567890;');
});

client.on('data', (data) => {
  console.log(data.toString());
});