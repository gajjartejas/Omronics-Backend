"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryById = exports.getCategories = exports.deleteCategory = exports.updateCategory = exports.createCategory = void 0;
const prismaClient_1 = __importDefault(require("../libs/prismaClient"));
/**
 * POST /categories
 * Create a new categories
 */
const createCategory = async (req, res, next) => {
    try {
        const { data } = req.body;
        const result = await prismaClient_1.default.category.create({
            data: data,
        });
        res.json(result);
    }
    catch (err) {
        return next(err);
    }
};
exports.createCategory = createCategory;
/**
 * PATCH /categories
 * Update single categories
 */
const updateCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { data } = req.body;
        const result = await prismaClient_1.default.category.update({
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
exports.updateCategory = updateCategory;
/**
 * DELETE /categories
 * Delete categories
 */
const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await prismaClient_1.default.category.delete({
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
exports.deleteCategory = deleteCategory;
/**
 * GET /categories
 * Get all categories
 */
const getCategories = async (req, res, next) => {
    try {
        const users = await prismaClient_1.default.category.findMany({});
        res.json(users);
    }
    catch (err) {
        return next(err);
    }
};
exports.getCategories = getCategories;
/**
 * GET /categories/:id
 * Get category by id
 */
const getCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await prismaClient_1.default.category.findUnique({
            where: { id: Number(id) },
        });
        res.json(post);
    }
    catch (err) {
        return next(err);
    }
};
exports.getCategoryById = getCategoryById;
