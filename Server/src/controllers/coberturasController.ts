import {Request, Response, text} from 'express';
import pool from '../database'

class CoberturasController{

    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;

        await pool.query('SELECT * FROM coberturas WHERE id_cobertura = '+[id], function (err, result, fields) {
            if (err) throw err;
            if (result.length >0){
                return res.json(result[0])
            }
            res.status(404).json({text:'aqui no ta'});
        });
    }

    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM coberturas ', function (err, result, fields) {
            if (err) throw err;
            if (result.lenght == 0){
                res.status(404).json({text:'No hay na'})
            }
            else res.json(result)
        });
    }

    public async create(req: Request, res: Response): Promise<void>{
        // console.log(req.body);
        await pool.query('INSERT INTO coberturas SET ?', [req.body]);
        res.json({message: 'Crafted Mariconsola'});
    }

    public async update(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        await pool.query('UPDATE coberturas SET ? WHERE id_cobertura = '+[id], [req.body]);
        res.json({message: 'se ve fresco el pana'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM coberturas WHERE id_cobertura = '+[id]);
        res.json({message: 'Delited'});
    }
}
const coberturasController= new CoberturasController();
export default coberturasController;