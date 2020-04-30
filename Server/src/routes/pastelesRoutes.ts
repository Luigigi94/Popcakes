import {Router} from 'express';
import  pastelesController  from '../controllers/pastelesController';

class PastelesRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config() :void{
        this.router.get('/', pastelesController.list);
        this.router.get('/:id', pastelesController.getOne);
        this.router.post('/', pastelesController.create);
        this.router.put('/:id', pastelesController.update);
        this.router.delete('/:id', pastelesController.delete)
        this.router.get('/order/:id',pastelesController.getOrder)
    }
}

const pastelesRoutes = new PastelesRoutes();
export default pastelesRoutes.router;
