import prisma from '../libs/prismaClient.js';

/**
 * GET /getStaticPageDatum
 * Get all static page data
 */
export const getFrontendDatum = async (_req: any, res: any, next: any) => {
  try {
    const staticPageData = await prisma.staticPageData.findMany();
    const featuredCategories = await prisma.category.findMany({
      where: { featured: true, active: true },
      take: 8,
      include: {
        images: true,
      },
    });
    const featuredProducts = await prisma.product.findMany({
      where: { featured: true, active: true },
      take: 8,
      include: {
        images: true,
      },
    });
    const featuredManufacturer = await prisma.manufacturer.findMany({
      where: { featured: true, active: true },
      take: 8,
    });

    const coverImages = await prisma.coverImage.findMany({
      where: { active: true },
      take: 8,
    });

    res.json({ staticPageData, featuredCategories, featuredProducts, featuredManufacturer, coverImages });
  } catch (err) {
    return next(err);
  }
};
