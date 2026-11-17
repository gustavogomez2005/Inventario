import express from 'express';
import {rcliente} from './rutaCliente.js';
import {rvendedor} from './rutaVendedor.js';
import {rpedidos} from './rutraPedidos.js';

const rinicio = express.Router();

rinicio.get('/', (pet, resp)=>{
   resp.render('index');
})

rinicio.use(rcliente);
rinicio.use(rpedidos);
rinicio.use(rvendedor);
export {rinicio}