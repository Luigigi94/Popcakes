import {Request, Response, text} from 'express';
import pool from '../database'

class PastelesController{

    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;

        await pool.query('SELECT pasteles.*, eventos.desc_evento FROM pasteles, eventos WHERE pasteles.id_evento = eventos.id_evento AND pasteles.id_evento = (SELECT id_evento FROM pasteles WHERE id_pastel= '+[id]+')',function (err, result, fields) {
            if (err) throw err;
            if (result.length !=0){
                return res.json(result)
            }
            res.status(404).json({text:'aqui no ta'});
        });
    }

    public async getOrder(req: Request, res: Response): Promise<any>{
        const {id} = req.params;

        await pool.query('SELECT pasteles.id_pastel, pasteles.desc_pastel, eventos.desc_evento, pasteles.image FROM `pasteles`, eventos WHERE pasteles.id_evento = eventos.id_evento AND pasteles.id_pastel = '+[id],function (err, result, fields) {

            if (err) throw err;
            if (result.length !=0){
                return res.json(result)
            }
            res.status(404).json({text:'aqui no ta'});
        });
    }


    public async list(req:Request, res:Response){
        await pool.query('SELECT  MAX(pasteles.id_pastel) AS id_pastel, pasteles.desc_pastel, eventos.desc_evento,pasteles.image FROM `pasteles`, eventos WHERE eventos.id_evento = pasteles.id_evento AND eventos.desc_evento IN (\'boda\') UNION\n' +
            'SELECT  MAX(pasteles.id_pastel) AS id_pastel, pasteles.desc_pastel, eventos.desc_evento,pasteles.image FROM `pasteles`, eventos WHERE eventos.id_evento = pasteles.id_evento AND eventos.desc_evento IN (\'primera comunion\') UNION\n' +
            'SELECT  MAX(pasteles.id_pastel) AS id_pastel, pasteles.desc_pastel, eventos.desc_evento,pasteles.image FROM `pasteles`, eventos WHERE eventos.id_evento = pasteles.id_evento AND eventos.desc_evento IN (\'confirmacion\') UNION\n' +
            'SELECT  MAX(pasteles.id_pastel) AS id_pastel, pasteles.desc_pastel, eventos.desc_evento,pasteles.image FROM `pasteles`, eventos WHERE eventos.id_evento = pasteles.id_evento AND eventos.desc_evento IN (\'bautizo\') UNION\n' +
            'SELECT  MAX(pasteles.id_pastel) AS id_pastel, pasteles.desc_pastel, eventos.desc_evento,pasteles.image FROM `pasteles`, eventos WHERE eventos.id_evento = pasteles.id_evento AND eventos.desc_evento IN (\'XV años\') UNION\n' +
            'SELECT  MAX(pasteles.id_pastel) AS id_pastel, pasteles.desc_pastel, eventos.desc_evento,pasteles.image FROM `pasteles`, eventos WHERE eventos.id_evento = pasteles.id_evento AND eventos.desc_evento IN (\'infantil\') UNION\n' +
            'SELECT  MAX(pasteles.id_pastel) AS id_pastel, pasteles.desc_pastel, eventos.desc_evento,pasteles.image FROM `pasteles`, eventos WHERE eventos.id_evento = pasteles.id_evento AND eventos.desc_evento IN (\'cumpleaños\') UNION\n' +
            'SELECT  MAX(pasteles.id_pastel) AS id_pastel, pasteles.desc_pastel, eventos.desc_evento,pasteles.image FROM `pasteles`, eventos WHERE eventos.id_evento = pasteles.id_evento AND eventos.desc_evento IN (\'casual\')', function (err, result, fields) {
            if (err) throw err;
            if (result.lenght == 0){
                res.status(404).json({text:'No hay na'})
            }
            else res.json(result)
        });
    }

    public async create(req: Request, res: Response): Promise<void>{
        // console.log(req.body);
        await pool.query('INSERT INTO pasteles SET ?', [req.body]);
        res.json({message: 'Crafted Mariconsola'});
    }

    public async update(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        await pool.query('UPDATE pasteles SET ? WHERE id_pastel = '+[id], [req.body]);
        res.json({message: 'se ve fresco el pana'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM pasteles WHERE id_pastel = '+[id]);
        res.json({message: 'Delited'});
    }
}
const pastelesController= new PastelesController();
export default pastelesController;