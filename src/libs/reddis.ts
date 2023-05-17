import { createPrismaRedisCache } from 'prisma-redis-middleware';
import Redis from 'ioredis';
import { Prisma } from '@prisma/client';

const redis = new Redis(); // Uses default options for Redis connection

const cacheMiddleware: Prisma.Middleware = createPrismaRedisCache({
  models: [
    { model: 'Category', excludeMethods: [] },
    { model: 'CategoryImage', excludeMethods: [] },
    { model: 'Product', excludeMethods: [] },
    { model: 'ProductImage', excludeMethods: [] },
    { model: 'ProductResource', excludeMethods: [] },
    { model: 'Manufacturer', excludeMethods: [] },
    { model: 'ManufacturerImage', excludeMethods: [] },
    { model: 'ContactData', excludeMethods: [] },
    { model: 'CoverImage', excludeMethods: [] },
    { model: 'StaticPageData', excludeMethods: [] },
  ],
  storage: { type: 'redis', options: { client: redis, invalidation: { referencesTTL: 300 }, log: console } },
  cacheTime: 300,
  excludeModels: [],
  excludeMethods: [],
  onHit: key => {
    console.log('hit', key);
  },
  onMiss: key => {
    console.log('miss', key);
  },
  onError: key => {
    console.log('error', key);
  },
});

export default cacheMiddleware;
