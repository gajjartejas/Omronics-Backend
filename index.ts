import AppMiddleware from './src/middleware';

const dotenv = require('dotenv');
dotenv.config();

import express from 'express';
import cors from 'cors';
import * as config from './src/config/index';
import prisma from './src/libs/prismaClient'
const fileUpload = require('express-fileupload');

const port = process.env.PORT || 8080;

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
app.use(AppMiddleware.authenticationMiddleware);

// Load router paths
config.routerConfig(app);

app.listen(port, () => console.log(`Started at Port:${port}`));

export default app;
