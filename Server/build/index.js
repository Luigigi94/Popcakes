"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
const bizcochosRoutes_1 = __importDefault(require("./routes/bizcochosRoutes"));
const coberturasRoutes_1 = __importDefault(require("./routes/coberturasRoutes"));
const datospersonalesRoutes_1 = __importDefault(require("./routes/datospersonalesRoutes"));
const eventosRoutes_1 = __importDefault(require("./routes/eventosRoutes"));
const pastelesRoutes_1 = __importDefault(require("./routes/pastelesRoutes"));
const pedidosRoutes_1 = __importDefault(require("./routes/pedidosRoutes"));
const rellenosRoutes_1 = __importDefault(require("./routes/rellenosRoutes"));
const tamanosRoutes_1 = __importDefault(require("./routes/tamanosRoutes"));
const tipoestadosRoutes_1 = __importDefault(require("./routes/tipoestadosRoutes"));
const tipocoberturasRoutes_1 = __importDefault(require("./routes/tipocoberturasRoutes"));
const tiposaboresRoutes_1 = __importDefault(require("./routes/tiposaboresRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
        this.app.use('/api/bizcochos', bizcochosRoutes_1.default);
        this.app.use('/api/coberturas', coberturasRoutes_1.default);
        this.app.use('/api/datos', datospersonalesRoutes_1.default);
        this.app.use('/api/eventos', eventosRoutes_1.default);
        this.app.use('/api/pastel', pastelesRoutes_1.default);
        this.app.use('/api/pedidos', pedidosRoutes_1.default);
        this.app.use('/api/rellenos', rellenosRoutes_1.default);
        this.app.use('/api/tamanos', tamanosRoutes_1.default);
        this.app.use('/api/estado', tipoestadosRoutes_1.default);
        this.app.use('/api/cobertura', tipocoberturasRoutes_1.default);
        this.app.use('/api/sabores', tiposaboresRoutes_1.default);
        this.app.use('/api/users', tiposaboresRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("SERVER ON PORT", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
