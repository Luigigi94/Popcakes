import {Request, Response} from 'express';

class IndexController {
    public index (req: Request, res: Response) {
        res.json({text: 'API Is /API/Games'});
    }
};
export const indexController = new IndexController()