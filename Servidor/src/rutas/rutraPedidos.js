import express from 'express';
import {falta, fbaja, fconsultaid, fmodifica, fmostrartodo, finicio, fnuevo, fbuscaid, fmodificaxid, factualiza, fbajaxid, feliminarxid} from '../controllers/pedidosControllers.js';

const rpedidos = express.Router();

rpedidos.get('/pedido', finicio);

rpedidos.get('/pedido/alta', falta);

rpedidos.post('/pedido/alta', fnuevo)

rpedidos.get('/pedido/baja', fbaja);

rpedidos.get('/pedido/bajaxid/:id', fbajaxid);

rpedidos.get('/pedido/eliminarxid/:id', feliminarxid);

rpedidos.get('/pedido/modifica', fmodifica);

rpedidos.get('/pedido/modificaxid/:id', fmodificaxid);

rpedidos.post('/pedido/actualiza', factualiza);

rpedidos.get('/pedido/consultaid', fconsultaid);

rpedidos.get('/pedido/consultaid/:id', fbuscaid);

rpedidos.get('/pedido/mostrartodo', fmostrartodo);

export {rpedidos};
