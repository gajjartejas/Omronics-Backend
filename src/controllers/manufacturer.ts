import prisma from '../libs/prismaClient.js';

/**
 * POST /manufacturers
 * Create a new manufacturers
 */
export const createManufacturer = async (req: any, res: any, next: any) => {
  try {
    const { data } = req.body;
    const result = await prisma.manufacturer.create({
      data: data,
    });
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

/**
 * PATCH /manufacturers
 * Update single manufacturers
 */
export const updateManufacturer = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params;
    const { data } = req.body;
    const result = await prisma.manufacturer.update({
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
 * DELETE /manufacturers
 * Delete manufacturers
 */
export const deleteManufacturer = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params;
    const result = await prisma.manufacturer.delete({
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
 * POST /manufacturers
 * Delete manufacturers
 */
export const deleteManufacturers = async (req: any, res: any, next: any) => {
  try {
    const { data } = req.body;
    const result = await prisma.manufacturer.deleteMany({
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
 * GET /manufacturers
 * Get all manufacturers
 */
export const getManufacturers = async (_req: any, res: any, next: any) => {
  try {
    const users = await prisma.manufacturer.findMany({
      include: {
        images: true,
      },
    });
    res.json(users);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /manufacturers/:id
 * Get manufacturer by id
 */
export const getManufacturerById = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params;

    const post = await prisma.manufacturer.findUnique({
      where: { id: Number(id) },
      include: {
        images: true,
      },
    });
    res.json(post);
  } catch (err) {
    return next(err);
  }
};

/**
 * POST /addFeaturedManufacturers
 * Add Featured Manufacturers
 */
export const addFeaturedManufacturers = async (req: any, res: any, next: any) => {
  try {
    const { data } = req.body;
    const result = await prisma.manufacturer.updateMany({
      data: {
        featured: true,
      },
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
 * POST /removeFeaturedManufacturers
 * Remove Featured Manufacturers
 */
export const removeFeaturedManufacturers = async (req: any, res: any, next: any) => {
  try {
    const { data } = req.body;
    const result = await prisma.manufacturer.updateMany({
      data: {
        featured: false,
      },
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
 * GET /getProductsByManufacturerId/:id
 * Get getProductsByManufacturerId by id
 */
export const getProductsByManufacturerId = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params;

    const post = await prisma.manufacturer.findUnique({
      where: { id: Number(id) },
      include: {
        images: true,
        products: {
          include: {
            images: true,
          },
        },
      },
    });
    res.json(post);
  } catch (err) {
    return next(err);
  }
};
