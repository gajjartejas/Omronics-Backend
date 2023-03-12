import { Express } from 'express'

import productRouter from '../routes/product'
import categoryRouter from '../routes/category'
import productImageRouter from '../routes/productImage'
import productResourceRouter from '../routes/productResource'
import manufacturerRouter from '../routes/manufacturer'
import userRouter from '../routes/user'
import fileManagerRouter from '../routes/fileManager'
import categoryImageRouter from '../routes/categoryImage'
import contactDataRouter from '../routes/contactData'

export default function (app: Express) {
	app.use('/products', productRouter)
	app.use('/categories', categoryRouter)
	app.use('/productImages', productImageRouter)
	app.use('/productResources', productResourceRouter)
	app.use('/manufacturers', manufacturerRouter)
	app.use('/users', userRouter)
	app.use('/fileManager', fileManagerRouter)
	app.use('/categoryImages', categoryImageRouter)
	app.use('/contactDatum', contactDataRouter)
}
