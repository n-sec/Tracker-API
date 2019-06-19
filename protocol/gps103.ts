import net from 'net';
import Connection from '../classes/connection';
import {
  ddm,
  Position,
} from '../classes/coordinate';

class Gps103 {
  private connection = new Connection();

  constructor(socket: net.Socket) {
    
    socket.on('data', (data) => {
      const res = data.toString().split(';');

      res.forEach((element) => {
        const data = element.split(',');

        switch (true) {
          case checkAuthString(element):
            socket.write('LOAD');
            this.connection.push(data[1].split(':')[1]);
            break;
          case checkHeartbeatString(element):
            socket.write('ON');
            this.connection.push(data[0]);
            break;
          case checkTrackerString(element):
            this.connection.push(data[0].split(':')[1], {
              position: new Position({
                lat: ddm('0254.83289S'),
                lon: ddm('04145.60974W'),
              }),
            });
            break;
            default:
              break;
          }
        });
      });
      
      socket.on('end', () => {
        this.connection.end();
      });
    }
}

function checkAuthString(data: string) {
  return /^##,imei:\d{15},A$/.test(data);
}

function checkHeartbeatString(data: string) {
  return /^\d{15}$/.test(data);
}

function checkTrackerString(data:  string) {
  return /^imei:\d{15}.+$/.test(data);
}

export default Gps103;