import prisma from '../libs/prismaClient'

/**
 * POST /categories
 * Create a new categories
 */
export const createCategory = async (req: any, res: any, next: any) => {
	try {
		const { data } = req.body
		const result = await prisma.category.create({
			data: data,
		})
		res.json(result)
	} catch (err) {
		return next(err)
	}
}

/**
 * PATCH /categories
 * Update single categories
 */
export const updateCategory = async (req: any, res: any, next: any) => {
	try {
		const { id }: { id?: string } = req.params
		const { data } = req.body
		const result = await prisma.category.update({
			where: {
				id: Number(id),
			},
			data: data,
		})
		res.json(result)
	} catch (err) {
		return next(err)
	}
}

/**
 * DELETE /categories
 * Delete categories
 */
export const deleteCategory = async (req: any, res: any, next: any) => {
	try {
		const { id }: { id?: string } = req.params
		const result = await prisma.category.delete({
			where: {
				id: Number(id),
			},
		})
	res.json( result)
	} catch (err) {
		return next(err)
	}
}

/**
 * POST /deleteCategories
 * Delete categories
 */
export const deleteCategories = async (req: any, res: any, next: any) => {
  try {
    const { data } = req.body
    const result = await prisma.category.deleteMany({
      where: {
        id: {
          in: data
        }
      },
    })
    res.json( result)
  } catch (err) {
    return next(err)
  }
}

/**
 * GET /categories
 * Get all categories
 */
export const getCategories = async (req: any, res: any, next: any) => {
	try {
		const users = await prisma.category.findMany({
      include:{
        images: true,
      }
    })
		res.json(users)
	} catch (err) {
		return next(err)
	}
}

/**
 * GET /categories/:id
 * Get category by id
 */
export const getCategoryById = async (req: any, res: any, next: any) => {
	try {
		const { id }: { id?: string } = req.params
		const post = await prisma.category.findUnique({
			where: { id: Number(id) },
      include:{
        images: true
      }
		})
		res.json(post)
	} catch (err) {
		return next(err)
	}
}

/**
 * GET /childCategories/:id
 * Get category by id
 */
export const getChildCategoriesById = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params
    const post = await prisma.category.findMany({
      where: {  parentId: Number(id) },
      orderBy: { id: 'asc' },
      include:{
        images: true,
      }
    })
    res.json(post)
  } catch (err) {
    return next(err)
  }
}

/**
 * GET /:id/products
 * Get category by id
 */
export const getProductsByCategoryId = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params
    const post = await prisma.category.findUnique({
      where: { id: Number(id) },
      include:{
        images: true,
        product: true
      }
    })
    res.json(post)
  } catch (err) {
    return next(err)
  }
}
