import {Router} from 'express';
import  datospersonalesController  from '../controllers/datospersonalesController';

class DatospersonalesRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config() :void{
        this.router.get('/', datospersonalesController.list);
        this.router.get('/:id', datospersonalesController.getOne);
        this.router.post('/', datospersonalesController.create);
        this.router.put('/:id', datospersonalesController.update);
        this.router.delete('/:id', datospersonalesController.delete)
    }
}

const datospersonalesRoutes = new DatospersonalesRoutes();
export default datospersonalesRoutes.router;
