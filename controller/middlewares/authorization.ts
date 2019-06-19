import {
  Express,
  RequestHandler
} from 'express';

import jwt from 'jsonwebtoken';

export default (app: Express) => {
  app.use(authorization());
}

function authorization(): RequestHandler {
  return (req, res, next) => {
    if (req.headers.authorization) {
      const authorization = req.headers.authorization.split(' ');

      if (authorization[0] === 'Bearer') {
        try {
          const user = jwt.verify(authorization[1], 'abc@123');
          res.locals.user = user;
          next();
        } catch (error) {
          res.sendStatus(401);
        }
      } else {
        res.sendStatus(400);
      }
    } else {
      res.sendStatus(400);
    }
  }
}