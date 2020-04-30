"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipocoberturasController_1 = __importDefault(require("../controllers/tipocoberturasController"));
class TipocoberturasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tipocoberturasController_1.default.list);
        this.router.get('/:id', tipocoberturasController_1.default.getOne);
        this.router.get('/list/:id', tipocoberturasController_1.default.getListOf);
        this.router.post('/', tipocoberturasController_1.default.create);
        this.router.put('/:id', tipocoberturasController_1.default.update);
        this.router.delete('/:id', tipocoberturasController_1.default.delete);
    }
}
const tipocoberturasRoutes = new TipocoberturasRoutes();
exports.default = tipocoberturasRoutes.router;
