"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tama_osController_1 = __importDefault(require("../controllers/tama\u00F1osController"));
class TamañosRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tama_osController_1.default.list);
        this.router.get('/:id', tama_osController_1.default.getOne);
        this.router.post('/', tama_osController_1.default.create);
        this.router.put('/:id', tama_osController_1.default.update);
        this.router.delete('/:id', tama_osController_1.default.delete);
    }
}
const tamañosRouter = new TamañosRouter();
exports.default = tamañosRouter.router;
