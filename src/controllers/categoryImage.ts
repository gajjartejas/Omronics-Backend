import prisma from '../libs/prismaClient';

/**
 * POST /CategoryImages
 * Create a new CategoryImages
 */
export const createCategoryImage = async (req: any, res: any, next: any) => {
  try {
    const { data } = req.body;
    const result = await prisma.categoryImage.create({
      data: data,
    });
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

/**
 * PATCH /CategoryImages
 * Update single CategoryImages
 */
export const updateCategoryImage = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params;
    const { data } = req.body;
    const result = await prisma.categoryImage.update({
      where: {
        id: Number(id),
      },
      data: data,
    });
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

/**
 * DELETE /CategoryImages
 * Delete CategoryImages
 */
export const deleteCategoryImage = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params;
    const result = await prisma.categoryImage.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /CategoryImages
 * Get all CategoryImages
 */
export const getCategoryImages = async (req: any, res: any, next: any) => {
  try {
    const users = await prisma.categoryImage.findMany({
      include: { categories: true },
    });
    res.json(users);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /CategoryImages/:id
 * Get CategoryImage by id
 */
export const getCategoryImageById = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params;

    const post = await prisma.categoryImage.findUnique({
      where: { id: Number(id) },
    });
    res.json(post);
  } catch (err) {
    return next(err);
  }
};
