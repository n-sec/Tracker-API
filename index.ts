import net from 'net';
import createServer from './createServer';
import Gps103 from './protocol/gps103';

import './controller';

createServer(5001, (socket: net.Socket) => new Gps103(socket));
