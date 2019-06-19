import { Express } from 'express';
import { Device } from '../models';

export default (app: Express) => {
  app.get('/devices/', (req, res) => {
    Device.find().then((data) => {
      res.send(data);
    });
  });

  app.get('/device/', (req, res) => {
    Device.findById('asd').then((data) => {
      res.send(data);
    });
  });

  app.post('/device/', (req, res) => {
    Device.create({
      _id: 'asd',
      manufacturer: 'manufacturer',
      model: 'model',

    }).then((data) => {
      res.send(data);
    }).catch((error) => {
      res.send(error);
    });
  });
}