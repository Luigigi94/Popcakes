import {Router} from 'express';
import tipoestadosController from "../controllers/tipoestadosController";

class TipoestadosRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config() :void{
        this.router.get('/', tipoestadosController.list);
        this.router.get('/:id', tipoestadosController.getOne);
        this.router.post('/', tipoestadosController.create);
        this.router.put('/:id', tipoestadosController.update);
        this.router.delete('/:id', tipoestadosController.delete);
    }
}

const tipoestadosRoutes = new TipoestadosRoutes();
export default tipoestadosRoutes.router;
