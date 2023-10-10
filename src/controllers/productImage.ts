import prisma from '../libs/prismaClient.js';

/**
 * POST /productImages
 * Create a new productImages
 */
export const createProductImage = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { data } = req.body;
    const result = await prisma.productImage.create({
      data: data,
    });
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

/**
 * PATCH /productImages
 * Update single productImages
 */
export const updateProductImage = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { id }: { id?: string } = req.params;
    const { data } = req.body;
    const result = await prisma.productImage.update({
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
 * DELETE /productImages
 * Delete productImages
 */
export const deleteProductImage = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { id }: { id?: string } = req.params;
    const result = await prisma.productImage.delete({
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
 * GET /productImages
 * Get all productImages
 */
export const getProductImages = async (_req: any, res: any, next: any): Promise<void> => {
  try {
    const users = await prisma.productImage.findMany({
      include: { products: true },
    });
    res.json(users);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /productImages/:id
 * Get productImage by id
 */
export const getProductImageById = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { id }: { id?: string } = req.params;

    const post = await prisma.productImage.findUnique({
      where: { id: Number(id) },
    });
    res.json(post);
  } catch (err) {
    return next(err);
  }
};
