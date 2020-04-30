"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tiposaboresController_1 = __importDefault(require("../controllers/tiposaboresController"));
class TiposaboresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tiposaboresController_1.default.list);
        this.router.get('/:id', tiposaboresController_1.default.getOne);
        this.router.post('/', tiposaboresController_1.default.create);
        this.router.put('/:id', tiposaboresController_1.default.update);
        this.router.delete('/:id', tiposaboresController_1.default.delete);
    }
}
const tiposaboresRoutes = new TiposaboresRoutes();
exports.default = tiposaboresRoutes.router;
