import prisma from '../libs/prismaClient.js';

/**
 * POST /coverImages
 * Create a new coverImages
 */
export const createCoverImage = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { data } = req.body;
    const result = await prisma.coverImage.create({
      data: data,
    });
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

/**
 * PATCH /coverImages
 * Update single coverImages
 */
export const updateCoverImage = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { id }: { id?: string } = req.params;
    const { data } = req.body;
    const result = await prisma.coverImage.update({
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
 * DELETE /coverImages
 * Delete coverImages
 */
export const deleteCoverImage = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { id }: { id?: string } = req.params;
    const result = await prisma.coverImage.delete({
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
 * POST /deleteCoverImages
 * Delete coverImages
 */
export const deleteCoverImages = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { data } = req.body;
    const result = await prisma.coverImage.deleteMany({
      where: {
        id: {
          in: data,
        },
      },
    });
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /coverImage
 * Get all coverImages
 */
export const getCoverImages = async (_req: any, res: any, next: any): Promise<void> => {
  try {
    const users = await prisma.coverImage.findMany({});
    res.json(users);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /coverImages/:id
 * Get coverImage by id
 */
export const getCoverImageById = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { id }: { id?: string } = req.params;

    const post = await prisma.coverImage.findUnique({
      where: { id: Number(id) },
    });
    res.json(post);
  } catch (err) {
    return next(err);
  }
};
