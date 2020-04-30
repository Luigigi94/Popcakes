"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventosController_1 = __importDefault(require("../controllers/eventosController"));
class EventosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', eventosController_1.default.list);
        this.router.get('/:id', eventosController_1.default.getOne);
        this.router.post('/', eventosController_1.default.create);
        this.router.put('/:id', eventosController_1.default.update);
        this.router.delete('/:id', eventosController_1.default.delete);
    }
}
const eventosRoutes = new EventosRoutes();
exports.default = eventosRoutes.router;
