import {Router} from 'express';
import tipocoberturasController from "../controllers/tipocoberturasController";

class TipocoberturasRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config() :void{
        this.router.get('/', tipocoberturasController.list);
        this.router.get('/:id', tipocoberturasController.getOne);
        this.router.get('/list/:id',tipocoberturasController.getListOf)
        this.router.post('/', tipocoberturasController.create);
        this.router.put('/:id', tipocoberturasController.update);
        this.router.delete('/:id', tipocoberturasController.delete);
    }
}

const tipocoberturasRoutes = new TipocoberturasRoutes();
export default tipocoberturasRoutes.router;
