import { Express } from 'express';
import { Profile } from '../models';

export default (app: Express) => {
  app.get('/profiles/', (req, res) => {
    Profile.find().then((data) => {
      res.send(data);
    }).catch((error) => {
      res.sendStatus(500);
    });
  });

  app.delete('/profiles/', (req, res) => {
    Profile.deleteMany({}).then((data) => {
      res.send(data);
    }).catch((error) => {
      res.sendStatus(500);
    });
  });

  app.get('/profile/', (req, res) => {
    Profile.findById(res.locals.user._id).then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.sendStatus(404);
      }
    }).catch((error) => {
      res.sendStatus(500);
    });
  });

  app.post('/profile/', (req, res) => {
    req.body._id = res.locals.user._id,

    Profile.create(req.body).then((data) => {
      res.send(data);
    }).catch((error) => {
      switch (error.code) {
        case 11000:
          res.sendStatus(409);
          break;
        default:
          console.log(error);
          res.sendStatus(400);
          break;
      }
    });
  });
}