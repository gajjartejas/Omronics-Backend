"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getProducts = exports.deleteProduct = exports.updateProduct = exports.createProduct = void 0;
const prismaClient_1 = __importDefault(require("../libs/prismaClient"));
/**
 * POST /products
 * Create a new product
 */
const createProduct = async (req, res, next) => {
    try {
        const { data } = req.body;
        const result = await prismaClient_1.default.product.create({
            data: data,
        });
        res.json(result);
    }
    catch (err) {
        return next(err);
    }
};
exports.createProduct = createProduct;
/**
 * PATCH /products
 * Update single product
 */
const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { data } = req.body;
        const result = await prismaClient_1.default.product.update({
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
exports.updateProduct = updateProduct;
/**
 * DELETE /products
 * Delete product
 */
const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await prismaClient_1.default.product.delete({
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
exports.deleteProduct = deleteProduct;
/**
 * GET /products
 * Get all products
 */
const getProducts = async (req, res, next) => {
    try {
        const users = await prismaClient_1.default.product.findMany({
            include: {
                categories: true,
                resourcees: true,
                images: true,
            },
        });
        res.json(users);
    }
    catch (err) {
        return next(err);
    }
};
exports.getProducts = getProducts;
/**
 * GET /products/:id
 * Get product by id
 */
const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await prismaClient_1.default.product.findUnique({
            where: { id: Number(id) },
            include: {
                categories: true,
                resourcees: true,
                images: true,
            },
        });
        res.json(post);
    }
    catch (err) {
        return next(err);
    }
};
exports.getProductById = getProductById;
