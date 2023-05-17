import { PrismaClient } from '@prisma/client';
// import cacheMiddleware from './reddis';
const prisma = new PrismaClient();
// prisma.$use(cacheMiddleware);
export default prisma;
