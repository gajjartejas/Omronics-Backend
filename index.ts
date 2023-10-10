import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';

import * as config from './src/config/index.js';
import AppMiddleware from './src/middleware/index.js';

const port = process.env.PORT || 80;
const env = process.env.NODE_ENV || 'development';
const FRONT_END_URL = env === 'production' ? '*' : 'http://localhost:3000';

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  fileUpload({
    limits: { fileSize: 100 * 1024 * 1024 },
    useTempFiles: true,
    tempFileDir: '/tmp/',

    abortOnLimit: true,
    parseNested: true,
  }),
);

app.use(cors({ credentials: true, origin: FRONT_END_URL }));
app.use(function (_req, res, next) {
  res.header('Access-Control-Allow-Origin', FRONT_END_URL);
  next();
});

// Custom middleware list
app.use(AppMiddleware.authenticationMiddleware);

// Load router paths
config.routerConfig(app);

app.listen(port, () => console.log(`Started at Port:${port}`));

export default app;
