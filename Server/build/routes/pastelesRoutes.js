"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pastelesController_1 = __importDefault(require("../controllers/pastelesController"));
class PastelesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', pastelesController_1.default.list);
        this.router.get('/:id', pastelesController_1.default.getOne);
        this.router.post('/', pastelesController_1.default.create);
        this.router.put('/:id', pastelesController_1.default.update);
        this.router.delete('/:id', pastelesController_1.default.delete);
        this.router.get('/order/:id', pastelesController_1.default.getOrder);
    }
}
const pastelesRoutes = new PastelesRoutes();
exports.default = pastelesRoutes.router;
