import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes  from './routes/gamesRoutes';
import bizcochosRoutes  from './routes/bizcochosRoutes';
import coberturasRoutes from "./routes/coberturasRoutes";
import datospersonalesRoutes from "./routes/datospersonalesRoutes";
import eventosRoutes from "./routes/eventosRoutes";
import pastelesRoutes from "./routes/pastelesRoutes";
import pedidosRoutes from "./routes/pedidosRoutes";
import rellenosRoutes from "./routes/rellenosRoutes";
import tamanosRoutes from "./routes/tamanosRoutes";
import tipoestadosRoutes from "./routes/tipoestadosRoutes";
import tipocoberturasRoutes from "./routes/tipocoberturasRoutes";
import tiposaboresRoutes from "./routes/tiposaboresRoutes"






class Server{
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.PORT || 3000 );
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}))
    }

    routes():void{
        this.app.use('/', indexRoutes);
        this.app.use('/api/games', gamesRoutes);
        this.app.use('/api/bizcochos',bizcochosRoutes);
        this.app.use('/api/coberturas',coberturasRoutes);
        this.app.use('/api/datos',datospersonalesRoutes);
        this.app.use('/api/eventos',eventosRoutes);
        this.app.use('/api/pastel',pastelesRoutes);
        this.app.use('/api/pedidos',pedidosRoutes);
        this.app.use('/api/rellenos',rellenosRoutes);
        this.app.use('/api/tamanos',tamanosRoutes);
        this.app.use('/api/estado',tipoestadosRoutes);
        this.app.use('/api/cobertura',tipocoberturasRoutes);
        this.app.use('/api/sabores',tiposaboresRoutes);
        this.app.use('/api/users',tiposaboresRoutes);



    }

    start():void{
        this.app.listen(this.app.get('port'), ()=> {
            console.log("SERVER ON PORT", this.app.get('port'));
        })
    }
}

const server = new Server();
server.start();