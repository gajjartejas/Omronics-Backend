"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductResourceById = exports.getProductResources = exports.deleteProductResource = exports.updateProductResource = exports.createProductResource = void 0;
const prismaClient_1 = __importDefault(require("../libs/prismaClient"));
/**
 * POST /productResources
 * Create a new productResources
 */
const createProductResource = async (req, res, next) => {
    try {
        const { data } = req.body;
        const result = await prismaClient_1.default.productResource.create({
            data: data,
        });
        res.json(result);
    }
    catch (err) {
        return next(err);
    }
};
exports.createProductResource = createProductResource;
/**
 * PATCH /productResources
 * Update single productResources
 */
const updateProductResource = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { data } = req.body;
        const result = await prismaClient_1.default.productResource.update({
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
exports.updateProductResource = updateProductResource;
/**
 * DELETE /productResources
 * Delete productResources
 */
const deleteProductResource = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await prismaClient_1.default.productResource.delete({
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
exports.deleteProductResource = deleteProductResource;
/**
 * GET /productResources
 * Get all productResources
 */
const getProductResources = async (req, res, next) => {
    try {
        const users = await prismaClient_1.default.productResource.findMany({});
        res.json(users);
    }
    catch (err) {
        return next(err);
    }
};
exports.getProductResources = getProductResources;
/**
 * GET /productResources/:id
 * Get productResource by id
 */
const getProductResourceById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await prismaClient_1.default.productResource.findUnique({
            where: { id: Number(id) },
        });
        res.json(post);
    }
    catch (err) {
        return next(err);
    }
};
exports.getProductResourceById = getProductResourceById;
