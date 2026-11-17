import express from 'express';
import {falta, fbaja, fconsultaid, fmodifica, fmostrartodos, finicio, fnuevo, fbuscaxid, fmodificaxid, factualiza, fbajaxid, fborrarxid} from '../controllers/clienteControllers.js';

const rcliente = express.Router();

rcliente.get('/cliente', finicio)

rcliente.get('/cliente/alta', falta);

rcliente.post('/cliente/alta', fnuevo)

rcliente.get('/cliente/baja', fbaja);

rcliente.get('/cliente/bajaxid/:id', fbajaxid);

rcliente.get('/cliente/modifica', fmodifica);

rcliente.get('/cliente/modificaxid/:id', fmodificaxid);

rcliente.post('/cliente/actualiza', factualiza);

rcliente.get('/cliente/consultaxid', fconsultaid);

rcliente.get('/cliente/buscaxid/:id', fbuscaxid);

rcliente.get('/cliente/mostrartodos', fmostrartodos);

rcliente.get('/cliente/borrar/:id', fborrarxid);

export {rcliente};
