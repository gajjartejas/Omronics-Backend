"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductImageById = exports.getProductImages = exports.deleteProductImage = exports.updateProductImage = exports.createProductImage = void 0;
const prismaClient_1 = __importDefault(require("../libs/prismaClient"));
/**
 * POST /productImages
 * Create a new productImages
 */
const createProductImage = async (req, res, next) => {
    try {
        const { data } = req.body;
        const result = await prismaClient_1.default.productImage.create({
            data: data,
        });
        res.json(result);
    }
    catch (err) {
        return next(err);
    }
};
exports.createProductImage = createProductImage;
/**
 * PATCH /productImages
 * Update single productImages
 */
const updateProductImage = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { data } = req.body;
        const result = await prismaClient_1.default.productImage.update({
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
exports.updateProductImage = updateProductImage;
/**
 * DELETE /productImages
 * Delete productImages
 */
const deleteProductImage = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await prismaClient_1.default.productImage.delete({
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
exports.deleteProductImage = deleteProductImage;
/**
 * GET /productImages
 * Get all productImages
 */
const getProductImages = async (req, res, next) => {
    try {
        const users = await prismaClient_1.default.productImage.findMany({});
        res.json(users);
    }
    catch (err) {
        return next(err);
    }
};
exports.getProductImages = getProductImages;
/**
 * GET /productImages/:id
 * Get productImage by id
 */
const getProductImageById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await prismaClient_1.default.productImage.findUnique({
            where: { id: Number(id) },
        });
        res.json(post);
    }
    catch (err) {
        return next(err);
    }
};
exports.getProductImageById = getProductImageById;
