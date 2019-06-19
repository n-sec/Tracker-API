import { Express } from 'express';
import bodyParser from 'body-parser';
import authorization from './authorization';

export default (app: Express) => {
  app.use(bodyParser.json());

  authorization(app);
}