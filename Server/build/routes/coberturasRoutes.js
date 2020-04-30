"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coberturasController_1 = __importDefault(require("../controllers/coberturasController"));
class CoberturasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', coberturasController_1.default.list);
        this.router.get('/:id', coberturasController_1.default.getOne);
        this.router.post('/', coberturasController_1.default.create);
        this.router.put('/:id', coberturasController_1.default.update);
        this.router.delete('/:id', coberturasController_1.default.delete);
    }
}
const coberturasRoutes = new CoberturasRoutes();
exports.default = coberturasRoutes.router;
