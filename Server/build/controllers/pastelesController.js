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
class PastelesController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT pasteles.*, eventos.desc_evento FROM pasteles, eventos WHERE pasteles.id_evento = eventos.id_evento AND pasteles.id_evento = (SELECT id_evento FROM pasteles WHERE id_pastel= ' + [id] + ')', function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length != 0) {
                    return res.json(result);
                }
                res.status(404).json({ text: 'aqui no ta' });
            });
        });
    }
    getOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT pasteles.id_pastel, pasteles.desc_pastel, eventos.desc_evento, pasteles.image FROM `pasteles`, eventos WHERE pasteles.id_evento = eventos.id_evento AND pasteles.id_pastel = ' + [id], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length != 0) {
                    return res.json(result);
                }
                res.status(404).json({ text: 'aqui no ta' });
            });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT  MAX(pasteles.id_pastel) AS id_pastel, pasteles.desc_pastel, eventos.desc_evento,pasteles.image FROM `pasteles`, eventos WHERE eventos.id_evento = pasteles.id_evento AND eventos.desc_evento IN (\'boda\') UNION\n' +
                'SELECT  MAX(pasteles.id_pastel) AS id_pastel, pasteles.desc_pastel, eventos.desc_evento,pasteles.image FROM `pasteles`, eventos WHERE eventos.id_evento = pasteles.id_evento AND eventos.desc_evento IN (\'primera comunion\') UNION\n' +
                'SELECT  MAX(pasteles.id_pastel) AS id_pastel, pasteles.desc_pastel, eventos.desc_evento,pasteles.image FROM `pasteles`, eventos WHERE eventos.id_evento = pasteles.id_evento AND eventos.desc_evento IN (\'confirmacion\') UNION\n' +
                'SELECT  MAX(pasteles.id_pastel) AS id_pastel, pasteles.desc_pastel, eventos.desc_evento,pasteles.image FROM `pasteles`, eventos WHERE eventos.id_evento = pasteles.id_evento AND eventos.desc_evento IN (\'bautizo\') UNION\n' +
                'SELECT  MAX(pasteles.id_pastel) AS id_pastel, pasteles.desc_pastel, eventos.desc_evento,pasteles.image FROM `pasteles`, eventos WHERE eventos.id_evento = pasteles.id_evento AND eventos.desc_evento IN (\'XV años\') UNION\n' +
                'SELECT  MAX(pasteles.id_pastel) AS id_pastel, pasteles.desc_pastel, eventos.desc_evento,pasteles.image FROM `pasteles`, eventos WHERE eventos.id_evento = pasteles.id_evento AND eventos.desc_evento IN (\'infantil\') UNION\n' +
                'SELECT  MAX(pasteles.id_pastel) AS id_pastel, pasteles.desc_pastel, eventos.desc_evento,pasteles.image FROM `pasteles`, eventos WHERE eventos.id_evento = pasteles.id_evento AND eventos.desc_evento IN (\'cumpleaños\') UNION\n' +
                'SELECT  MAX(pasteles.id_pastel) AS id_pastel, pasteles.desc_pastel, eventos.desc_evento,pasteles.image FROM `pasteles`, eventos WHERE eventos.id_evento = pasteles.id_evento AND eventos.desc_evento IN (\'casual\')', function (err, result, fields) {
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
            yield database_1.default.query('INSERT INTO pasteles SET ?', [req.body]);
            res.json({ message: 'Crafted Mariconsola' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE pasteles SET ? WHERE id_pastel = ' + [id], [req.body]);
            res.json({ message: 'se ve fresco el pana' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM pasteles WHERE id_pastel = ' + [id]);
            res.json({ message: 'Delited' });
        });
    }
}
const pastelesController = new PastelesController();
exports.default = pastelesController;
