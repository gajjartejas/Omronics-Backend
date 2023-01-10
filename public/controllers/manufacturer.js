"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getManufacturerById = exports.getManufacturers = exports.deleteManufacturer = exports.updateManufacturer = exports.createManufacturer = void 0;
const prismaClient_1 = __importDefault(require("../libs/prismaClient"));
/**
 * POST /manufacturers
 * Create a new manufacturers
 */
const createManufacturer = async (req, res, next) => {
    try {
        const { data } = req.body;
        const result = await prismaClient_1.default.manufacturer.create({
            data: data,
        });
        res.json(result);
    }
    catch (err) {
        return next(err);
    }
};
exports.createManufacturer = createManufacturer;
/**
 * PATCH /manufacturers
 * Update single manufacturers
 */
const updateManufacturer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { data } = req.body;
        const result = await prismaClient_1.default.manufacturer.update({
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
exports.updateManufacturer = updateManufacturer;
/**
 * DELETE /manufacturers
 * Delete manufacturers
 */
const deleteManufacturer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await prismaClient_1.default.manufacturer.delete({
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
exports.deleteManufacturer = deleteManufacturer;
/**
 * GET /manufacturers
 * Get all manufacturers
 */
const getManufacturers = async (req, res, next) => {
    try {
        const users = await prismaClient_1.default.manufacturer.findMany({});
        res.json(users);
    }
    catch (err) {
        return next(err);
    }
};
exports.getManufacturers = getManufacturers;
/**
 * GET /manufacturers/:id
 * Get manufacturer by id
 */
const getManufacturerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await prismaClient_1.default.manufacturer.findUnique({
            where: { id: Number(id) },
        });
        res.json(post);
    }
    catch (err) {
        return next(err);
    }
};
exports.getManufacturerById = getManufacturerById;
