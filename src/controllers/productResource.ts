import prisma from '../libs/prismaClient.js';

/**
 * POST /productResources
 * Create a new productResources
 */
export const createProductResource = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { data } = req.body;
    const result = await prisma.productResource.create({
      data: data,
    });
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

/**
 * PATCH /productResources
 * Update single productResources
 */
export const updateProductResource = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { id }: { id?: string } = req.params;
    const { data } = req.body;
    const result = await prisma.productResource.update({
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
 * DELETE /productResources
 * Delete productResources
 */
export const deleteProductResource = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { id }: { id?: string } = req.params;
    const result = await prisma.productResource.delete({
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
 * GET /productResources
 * Get all productResources
 */
export const getProductResources = async (_req: any, res: any, next: any): Promise<void> => {
  try {
    const users = await prisma.productResource.findMany({ include: { products: true } });
    res.json(users);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /productResources/:id
 * Get productResource by id
 */
export const getProductResourceById = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { id }: { id?: string } = req.params;

    const post = await prisma.productResource.findUnique({
      where: { id: Number(id) },
    });
    res.json(post);
  } catch (err) {
    return next(err);
  }
};
