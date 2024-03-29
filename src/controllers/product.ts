import prisma from '../libs/prismaClient.js';

/**
 * POST /products
 * Create a new product
 */
export const createProduct = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { data } = req.body;
    const result = await prisma.product.create({
      data: data,
    });
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

/**
 * PATCH /products
 * Update single product
 */
export const updateProduct = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { id }: { id?: string } = req.params;
    const { data } = req.body;
    const result = await prisma.product.update({
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
 * DELETE /products
 * Delete product
 */
export const deleteProduct = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { id }: { id?: string } = req.params;
    const result = await prisma.product.delete({
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
 * POST /deleteProducts
 * Delete products
 */
export const deleteProducts = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { data } = req.body;
    const result = await prisma.product.deleteMany({
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
 * GET /products
 * Get all products
 */
export const getProducts = async (_req: any, res: any, next: any): Promise<void> => {
  try {
    const users = await prisma.product.findMany({
      include: {
        categories: true,
        resourcees: true,
        images: true,
        manufacturer: true,
      },
    });
    res.json(users);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /products/:id
 * Get product by id
 */
export const getProductById = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { id }: { id?: string } = req.params;

    const post = await prisma.product.findUnique({
      where: { id: Number(id) },
      include: {
        categories: true,
        resourcees: true,
        images: true,
        manufacturer: true,
      },
    });
    res.json(post);
  } catch (err) {
    return next(err);
  }
};

/**
 * POST /addFeaturedProducts
 * Add Featured Products
 */
export const addFeaturedProducts = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { data } = req.body;
    const result = await prisma.product.updateMany({
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
 * POST /removeFeaturedProducts
 * Remove Featured Products
 */
export const removeFeaturedProducts = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { data } = req.body;
    const result = await prisma.product.updateMany({
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
