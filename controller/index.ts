import mongoose from 'mongoose';

import http from './http';
import { connections } from '../classes/connection';

mongoose.connect('mongodb://localhost:27017/tracker', {
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => {
  http(connections);
});