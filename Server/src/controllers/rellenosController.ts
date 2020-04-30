import {Request, Response} from 'express';
import pool from '../database'

class RellenosController {

    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;

        await pool.query('SELECT * FROM rellenos WHERE id_relleno = '+[id], function (err, result, fields) {
            if (err) throw err;
            if (result.length >0){
                return res.json(result[0])
            }
            res.status(404).json({text:'aqui no ta'});
        });
    }

    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM rellenos ', function (err, result, fields) {
            if (err) throw err;
            if (result.lenght == 0){
                res.status(404).json({text:'No hay na'})
            }
            else res.json(result)
        });
    }

    public async create(req: Request, res: Response): Promise<void>{
        // console.log(req.body);
        await pool.query('INSERT INTO rellenos SET ?', [req.body]);
        res.json({message: 'Crafted Mariconsola'});
    }

    public async update(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        await pool.query('UPDATE rellenos SET ? WHERE id_relleno = '+[id], [req.body]);
        res.json({message: 'se ve fresco el pana'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM rellenos WHERE id_relleno = '+[id]);
        res.json({message: 'Delited'});
    }
}
const rellenosController= new RellenosController();
export default rellenosController;