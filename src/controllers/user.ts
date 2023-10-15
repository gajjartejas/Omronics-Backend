import prisma from '../libs/prismaClient.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**
 * POST /users
 * Create a new users
 */
// {
//   "data": {
//   "username": "chandrakant",
//     "email": "chandrakant@omronics.com",
//     "password": "Admin@123098",
//     "lastname": "Prajapati",
//     "firstname": "Chandrakant",
//     "isAdmin": true
//
// }
// }
export const createUser = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { data } = req.body;
    const { email, password } = data;
    const userCount = await prisma.user.count({
      where: {
        email: email,
      },
    });
    if (userCount > 0) {
      return res.status(409).send('User Already Exist. Please Login');
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const result = await prisma.user.create({
      data: { ...data, password: encryptedPassword },
    });
    res.json(result);
  } catch (err) {
    return next(err);
  }
};

/**
 * PATCH /users
 * Update single users
 */
export const updateUser = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { id }: { id?: string } = req.params;
    const { data } = req.body;
    const result = await prisma.user.update({
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
 * DELETE /users
 * Delete users
 */
export const deleteUser = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { id }: { id?: string } = req.params;
    const result = await prisma.user.delete({
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
 * GET /users
 * Get all users
 */
export const getUsers = async (_req: any, res: any, next: any): Promise<void> => {
  try {
    const users = await prisma.user.findMany({});
    res.json(users);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /users/:id
 * Get user by id
 */
export const getUserById = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { id }: { id?: string } = req.params;

    const post = await prisma.user.findUnique({
      where: { id: Number(id) },
    });
    res.json(post);
  } catch (err) {
    return next(err);
  }
};

/**
 * POST /login
 * Get user by id
 */
export const login = async (req: any, res: any, next: any): Promise<void> => {
  try {
    const { data } = req.body;
    const { email, password } = data;

    // Validate user input
    if (!(email && password)) {
      return res.status(400).send('All input is required');
    }
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    // 3hrs in sec
    const maxAge = 30 * 24 * 60 * 60;

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign({ id: user.id, email }, process.env.JWT_KEY, {
        expiresIn: maxAge,
      });

      res.cookie('jwt', token, {
        secure: true,
        maxAge: maxAge * 1000, // 3hrs in ms23231211123
      });

      // user
      res.status(200).json({ ...user, token: token });
    }

    res.status(200).send({ message: 'Unknown error!' });
  } catch (err) {
    return next(err);
  }
};
