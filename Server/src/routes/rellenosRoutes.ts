import {Router} from 'express';
import rellenosController from "../controllers/rellenosController";

class RellenosRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config() :void{
        this.router.get('/', rellenosController.list);
        this.router.get('/:id', rellenosController.getOne);
        this.router.post('/', rellenosController.create);
        this.router.put('/:id', rellenosController.update);
        this.router.delete('/:id', rellenosController.delete);
    }
}

const rellenosRoutes = new RellenosRoutes();
export default rellenosRoutes.router;
