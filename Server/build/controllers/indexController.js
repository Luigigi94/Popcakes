"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'API Is /API/Games' });
    }
}
;
exports.indexController = new IndexController();
