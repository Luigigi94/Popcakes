import {Router} from 'express';
import  bizcochosControllers  from '../controllers/bizcochosControllers';

class BizcochosRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config() :void{
        this.router.get('/', bizcochosControllers.list);
        this.router.get('/:id', bizcochosControllers.getOne);
        this.router.post('/', bizcochosControllers.create);
        this.router.put('/:id', bizcochosControllers.update);
        this.router.delete('/:id', bizcochosControllers.delete)
    }
}

const bizcochosRoutes = new BizcochosRoutes();
export default bizcochosRoutes.router;
