"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tamanosController_1 = __importDefault(require("../controllers/tamanosController"));
class TamanosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tamanosController_1.default.list);
        this.router.get('/:id', tamanosController_1.default.getOne);
        this.router.post('/', tamanosController_1.default.create);
        this.router.put('/:id', tamanosController_1.default.update);
        this.router.delete('/:id', tamanosController_1.default.delete);
    }
}
const tamanosRoutes = new TamanosRoutes();
exports.default = tamanosRoutes.router;
