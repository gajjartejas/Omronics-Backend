"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.getUserById = exports.getUsers = exports.deleteUser = exports.updateUser = exports.createUser = void 0;
const prismaClient_1 = __importDefault(require("../libs/prismaClient"));
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
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
const createUser = async (req, res, next) => {
    try {
        const { data } = req.body;
        const { email, password } = data;
        let userCount = await prismaClient_1.default.user.count({
            where: {
                email: email
            }
        });
        if (userCount > 0) {
            return res.status(409).send('User Already Exist. Please Login');
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        const result = await prismaClient_1.default.user.create({
            data: { ...data, password: encryptedPassword },
        });
        res.json(result);
    }
    catch (err) {
        return next(err);
    }
};
exports.createUser = createUser;
/**
 * PATCH /users
 * Update single users
 */
const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { data } = req.body;
        const result = await prismaClient_1.default.user.update({
            where: {
                id: Number(id),
            },
            data: data,
        });
        res.json(result);
    }
    catch (err) {
        return next(err);
    }
};
exports.updateUser = updateUser;
/**
 * DELETE /users
 * Delete users
 */
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await prismaClient_1.default.user.delete({
            where: {
                id: Number(id),
            },
        });
        res.json(result);
    }
    catch (err) {
        return next(err);
    }
};
exports.deleteUser = deleteUser;
/**
 * GET /users
 * Get all users
 */
const getUsers = async (req, res, next) => {
    try {
        const users = await prismaClient_1.default.user.findMany({});
        res.json(users);
    }
    catch (err) {
        return next(err);
    }
};
exports.getUsers = getUsers;
/**
 * GET /users/:id
 * Get user by id
 */
const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await prismaClient_1.default.user.findUnique({
            where: { id: Number(id) },
        });
        res.json(post);
    }
    catch (err) {
        return next(err);
    }
};
exports.getUserById = getUserById;
/**
 * POST /login
 * Get user by id
 */
const login = async (req, res, next) => {
    try {
        const { data } = req.body;
        const { email, password } = data;
        // Validate user input
        if (!(email && password)) {
            return res.status(400).send('All input is required');
        }
        let user = await prismaClient_1.default.user.findFirst({
            where: {
                email: email
            }
        });
        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign({ id: user.id, email }, process.env.JWT_KEY, {
                expiresIn: '2h',
            });
            // user
            res.status(200).json({ ...user, token: token });
        }
        res.status(400).send('Invalid Credentials');
    }
    catch (err) {
        return next(err);
    }
};
exports.login = login;
