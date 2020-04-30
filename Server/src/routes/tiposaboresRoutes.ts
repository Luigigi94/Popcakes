import {Router} from 'express';
import tiposaboresController from "../controllers/tiposaboresController";


class TiposaboresRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config() :void{
        this.router.get('/', tiposaboresController.list);
        this.router.get('/:id', tiposaboresController.getOne);
        this.router.post('/', tiposaboresController.create);
        this.router.put('/:id', tiposaboresController.update);
        this.router.delete('/:id', tiposaboresController.delete);
    }
}

const tiposaboresRoutes = new TiposaboresRoutes();
export default tiposaboresRoutes.router;
