"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bizcochosControllers_1 = __importDefault(require("../controllers/bizcochosControllers"));
class BizcochosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', bizcochosControllers_1.default.list);
        this.router.get('/:id', bizcochosControllers_1.default.getOne);
        this.router.post('/', bizcochosControllers_1.default.create);
        this.router.put('/:id', bizcochosControllers_1.default.update);
        this.router.delete('/:id', bizcochosControllers_1.default.delete);
    }
}
const bizcochosRoutes = new BizcochosRoutes();
exports.default = bizcochosRoutes.router;
