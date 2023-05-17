import prisma from '../libs/prismaClient';

/**
 * GET /getStaticPageDatum
 * Get all static page data
 */
export const getFrontendDatum = async (req: any, res: any, next: any) => {
  try {
    const staticPageData = await prisma.staticPageData.findMany();
    const featuredCategories = await prisma.category.findMany({
        where: {featured: true},
        take: 8,
        include: {
          images: true
        }
      }
    );
    const featuredProducts = await prisma.product.findMany({
        where: {featured: true},
        take: 8,
        include: {
          images: true
        }
      }
    );
    const featuredManufacturer = await prisma.manufacturer.findMany({
        where: {featured: true},
        take: 8,
      }
    );

    res.json({staticPageData, featuredCategories, featuredProducts, featuredManufacturer});
  } catch (err) {
    return next(err);
  }
};