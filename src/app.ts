import { authenticationMiddleware } from './middleware';

const dotenv = require('dotenv');
dotenv.config();

import express from 'express';
import cors from 'cors';
import * as config from './config/index';
const fileUpload = require('express-fileupload');


const port = process.env.API_PORT || 5000;

const app = express();
app.use(express.json());
app.use(
  fileUpload({
    limits: { fileSize: 100 * 1024 * 1024 },
    useTempFiles: true,
    tempFileDir: '/tmp/',

    abortOnLimit: true,
    parseNested: true,
  }),
);

app.use(
  cors({
    origin: '*',
  }),
);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Custom middleware list
app.use(authenticationMiddleware);

// Load router paths
config.routerConfig(app);

app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
);

export default app;
