"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rellenosController_1 = __importDefault(require("../controllers/rellenosController"));
class RellenosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', rellenosController_1.default.list);
        this.router.get('/:id', rellenosController_1.default.getOne);
        this.router.post('/', rellenosController_1.default.create);
        this.router.put('/:id', rellenosController_1.default.update);
        this.router.delete('/:id', rellenosController_1.default.delete);
    }
}
const rellenosRoutes = new RellenosRoutes();
exports.default = rellenosRoutes.router;
