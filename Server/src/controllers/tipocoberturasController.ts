import {Request, Response} from 'express';
import pool from '../database';

class TipocoberturasController {

    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;

        await pool.query('SELECT * FROM tipo_coberturas WHERE  	id_tipo_cobertura  = '+[id], function (err, result, fields) {
            if (err) throw err;
            if (result.length >0){
                return res.json(result[0])
            }
            res.status(404).json({text:'aqui no ta'});
        });
    }

    public async getListOf(req: Request, res: Response): Promise<any>{
        const {id} = req.params;

        await pool.query('SELECT tipo_coberturas.*, tipo_sabores.desc_sabor FROM `tipo_coberturas`, tipo_sabores WHERE tipo_sabores.id_tipo_sabor = tipo_coberturas.id_tipo_sabor AND tipo_coberturas.id_tipo_sabor = (SELECT id_tipo_sabor FROM tipo_sabores WHERE id_tipo_sabor =  '+[id]+')', function (err, result, fields) {
            if (err) throw err;
            if (result.length >0){
                return res.json(result[0])
            }
            res.status(404).json({text:'aqui no ta'});
        });
    }


    public async list(req:Request, res:Response){
        await pool.query('SELECT tipo_coberturas.*, tipo_sabores.desc_sabor FROM `tipo_coberturas`, tipo_sabores WHERE tipo_sabores.id_tipo_sabor = tipo_coberturas.id_tipo_sabor', function (err, result, fields) {
            if (err) throw err;
            if (result.lenght == 0){
                res.status(404).json({text:'No hay na'})
            }
            else res.json(result)
        });
    }

    public async create(req: Request, res: Response): Promise<void>{
        // console.log(req.body);
        await pool.query('INSERT INTO tipo_coberturas SET ?', [req.body]);
        res.json({message: 'Crafted Mariconsola'});
    }

    public async update(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        await pool.query('UPDATE tipo_coberturas SET ? WHERE  	id_tipo_cobertura  = '+[id], [req.body]);
        res.json({message: 'se ve fresco el pana'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM tipo_coberturas WHERE  	id_tipo_cobertura  = '+[id]);
        res.json({message: 'Delited'});
    }
}
const tipocoberturasController= new TipocoberturasController();
export default tipocoberturasController;