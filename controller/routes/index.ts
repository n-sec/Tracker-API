import { Express } from 'express';

import profile from './profile';
import device from './device';

export default (app: Express) => {
  profile(app);
  device(app);
}