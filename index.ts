import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';

import * as config from './src/config/index.js';
import AppMiddleware from './src/middleware/index.js';

const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'development';
const FRONT_END_URL = env === 'production' ? 'https://omronics.com' : 'http://localhost:3000';

console.log('APP PORT IS', port);
console.log('APP ENV IS', env);

const app = express();
app.listen(port, () => console.log(`Started at Port:${port}`));

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

// Custom middleware list
app.use(AppMiddleware.authenticationMiddleware);

// Load router paths
config.routerConfig(app);

export default app;
