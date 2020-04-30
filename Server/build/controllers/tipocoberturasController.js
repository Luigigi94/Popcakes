"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TipocoberturasController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM tipo_coberturas WHERE  	id_tipo_cobertura  = ' + [id], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    return res.json(result[0]);
                }
                res.status(404).json({ text: 'aqui no ta' });
            });
        });
    }
    getListOf(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT tipo_coberturas.*, tipo_sabores.desc_sabor FROM `tipo_coberturas`, tipo_sabores WHERE tipo_sabores.id_tipo_sabor = tipo_coberturas.id_tipo_sabor AND tipo_coberturas.id_tipo_sabor = (SELECT id_tipo_sabor FROM tipo_sabores WHERE id_tipo_sabor =  ' + [id] + ')', function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    return res.json(result[0]);
                }
                res.status(404).json({ text: 'aqui no ta' });
            });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT tipo_coberturas.*, tipo_sabores.desc_sabor FROM `tipo_coberturas`, tipo_sabores WHERE tipo_sabores.id_tipo_sabor = tipo_coberturas.id_tipo_sabor', function (err, result, fields) {
                if (err)
                    throw err;
                if (result.lenght == 0) {
                    res.status(404).json({ text: 'No hay na' });
                }
                else
                    res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            yield database_1.default.query('INSERT INTO tipo_coberturas SET ?', [req.body]);
            res.json({ message: 'Crafted Mariconsola' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tipo_coberturas SET ? WHERE  	id_tipo_cobertura  = ' + [id], [req.body]);
            res.json({ message: 'se ve fresco el pana' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tipo_coberturas WHERE  	id_tipo_cobertura  = ' + [id]);
            res.json({ message: 'Delited' });
        });
    }
}
const tipocoberturasController = new TipocoberturasController();
exports.default = tipocoberturasController;
