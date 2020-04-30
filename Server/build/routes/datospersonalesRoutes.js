"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const datospersonalesController_1 = __importDefault(require("../controllers/datospersonalesController"));
class DatospersonalesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', datospersonalesController_1.default.list);
        this.router.get('/:id', datospersonalesController_1.default.getOne);
        this.router.post('/', datospersonalesController_1.default.create);
        this.router.put('/:id', datospersonalesController_1.default.update);
        this.router.delete('/:id', datospersonalesController_1.default.delete);
    }
}
const datospersonalesRoutes = new DatospersonalesRoutes();
exports.default = datospersonalesRoutes.router;
