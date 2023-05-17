import prisma from '../libs/prismaClient';

/**
 * POST /ManufacturerImages
 * Create a new ManufacturerImages
 */
export const createManufacturerImage = async (req: any, res: any, next: any) => {
  try {
    const { data } = req.body;
    const result = await prisma.manufacturerImage.create({
      data: data,
    });
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

/**
 * PATCH /ManufacturerImages
 * Update single ManufacturerImages
 */
export const updateManufacturerImage = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params;
    const { data } = req.body;
    const result = await prisma.manufacturerImage.update({
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
 * DELETE /ManufacturerImages
 * Delete ManufacturerImages
 */
export const deleteManufacturerImage = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params;
    const result = await prisma.manufacturerImage.delete({
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
 * GET /ManufacturerImages
 * Get all ManufacturerImages
 */
export const getManufacturerImages = async (req: any, res: any, next: any) => {
  try {
    const users = await prisma.manufacturerImage.findMany({
      include: { manufacturers: true },
    });
    res.json(users);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /ManufacturerImages/:id
 * Get ManufacturerImage by id
 */
export const getManufacturerImageById = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params;

    const post = await prisma.manufacturerImage.findUnique({
      where: { id: Number(id) },
    });
    res.json(post);
  } catch (err) {
    return next(err);
  }
};
