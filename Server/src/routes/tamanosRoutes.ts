import {Router} from 'express';
import tamañosController from "../controllers/tamanosController";

class TamanosRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config() :void{
        this.router.get('/', tamañosController.list);
        this.router.get('/:id', tamañosController.getOne);
        this.router.post('/', tamañosController.create);
        this.router.put('/:id', tamañosController.update);
        this.router.delete('/:id', tamañosController.delete);
    }
}

const tamanosRoutes = new TamanosRoutes();
export default tamanosRoutes.router;
