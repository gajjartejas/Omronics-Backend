import { Express } from 'express';

import productRouter from '../routes/product.js';
import categoryRouter from '../routes/category.js';
import productImageRouter from '../routes/productImage.js';
import productResourceRouter from '../routes/productResource.js';
import manufacturerRouter from '../routes/manufacturer.js';
import manufacturerImageRouter from '../routes/manufacturerImage.js';
import userRouter from '../routes/user.js';
import fileManagerRouter from '../routes/fileManager.js';
import categoryImageRouter from '../routes/categoryImage.js';
import contactDataRouter from '../routes/contactData.js';
import coverImageRouter from '../routes/coverImage.js';
import staticPageDataRouter from '../routes/staticPageData.js';
import frontendDataRouter from '../routes/frontendData.js';

export default function (app: Express): void {
  app.use('/products', productRouter);
  app.use('/categories', categoryRouter);
  app.use('/productImages', productImageRouter);
  app.use('/productResources', productResourceRouter);
  app.use('/manufacturers', manufacturerRouter);
  app.use('/manufacturerImages', manufacturerImageRouter);
  app.use('/users', userRouter);
  app.use('/fileManager', fileManagerRouter);
  app.use('/categoryImages', categoryImageRouter);
  app.use('/contactDatum', contactDataRouter);
  app.use('/coverImages', coverImageRouter);
  app.use('/staticPageDatum', staticPageDataRouter);
  app.use('/frontendData', frontendDataRouter);
}
