import prisma from '../libs/prismaClient'

/**
 * POST /contactDatum
 * Create a new contactDatum
 */
export const createContactData = async (req: any, res: any, next: any) => {
  try {
    const { data } = req.body
    const result = await prisma.contactData.create({
      data: data,
    })
    res.json(result)
  } catch (err) {
    return next(err)
  }
}

/**
 * PATCH /contactDatum
 * Update single contactDatum
 */
export const updateContactData = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params
    const { data } = req.body
    const result = await prisma.contactData.update({
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
 * DELETE /contactDatum
 * Delete contactDatum
 */
export const deleteContactData = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params
    const result = await prisma.contactData.delete({
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
 * POST /deleteContactDatum
 * Delete contactDatum
 */
export const deleteContactDatum = async (req: any, res: any, next: any) => {
  try {
    const { data } = req.body
    const result = await prisma.contactData.deleteMany({
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
 * GET /contactDatum
 * Get all contactDatum
 */
export const getContactDatum = async (req: any, res: any, next: any) => {
  try {
    const users = await prisma.contactData.findMany({
    })
    res.json(users)
  } catch (err) {
    return next(err)
  }
}

/**
 * GET /contactDatum/:id
 * Get contactData by id
 */
export const getContactDataById = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params

    const post = await prisma.contactData.findUnique({
      where: { id: Number(id) },
    })
    res.json(post)
  } catch (err) {
    return next(err)
  }
}
