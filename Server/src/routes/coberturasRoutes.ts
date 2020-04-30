import {Router} from 'express';
import  coberturasController  from '../controllers/coberturasController';

class CoberturasRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config() :void{
        this.router.get('/', coberturasController.list);
        this.router.get('/:id', coberturasController.getOne);
        this.router.post('/', coberturasController.create);
        this.router.put('/:id', coberturasController.update);
        this.router.delete('/:id', coberturasController.delete)
    }
}

const coberturasRoutes = new CoberturasRoutes();
export default coberturasRoutes.router;
