import prisma from '../libs/prismaClient.js';

/**
 * POST /staticPageData
 * Create a new staticPageData
 */
export const createStaticPageData = async (req: any, res: any, next: any) => {
  try {
    const { data } = req.body;
    const result = await prisma.staticPageData.create({
      data: data,
    });
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

/**
 * PATCH /staticPageData
 * Update single staticPageData
 */
export const updateStaticPageData = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params;
    const { data } = req.body;
    const result = await prisma.staticPageData.update({
      where: {
        id: Number(id),
      },
      data: { data },
    });
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

/**
 * DELETE /staticPageData
 * Delete staticPageData
 */
export const deleteStaticPageData = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params;
    const result = await prisma.staticPageData.delete({
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
 * GET /getStaticPageDatum
 * Get all static page data
 */
export const getStaticPageDatum = async (_req: any, res: any, next: any) => {
  try {
    const users = await prisma.staticPageData.findMany();
    res.json(users);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /staticPageData/:id
 * Get static page data by id
 */
export const getStaticPageDataById = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params;

    const post = await prisma.staticPageData.findUnique({
      where: { id: Number(id) },
    });
    res.json(post);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /getStaticPageDatumByIds
 * Get static page data by ids
 */
export const getStaticPageDatumByIds = async (req: any, res: any, next: any) => {
  try {
    const { data } = req.body;

    const users = await prisma.staticPageData.findMany({
      where: {
        id: {
          in: data.map((v: any) => Number(v)),
        },
      },
    });
    res.json(users);
  } catch (err) {
    return next(err);
  }
};

/**
 * POST /staticPageDatum
 * Update datum
 */
export const updateStaticPageDatum = async (req: any, res: any, next: any) => {
  try {
    const { data } = req.body;

    const transaction = await prisma.$transaction(
      data.map((d: any) =>
        prisma.staticPageData.update({
          where: { id: parseInt(d.id) },
          data: { data: d.data },
        }),
      ),
    );
    return res.json(transaction);
  } catch (err) {
    return next(err);
  }
};
