import express from 'express';
import {falta, fbaja, fconsultaid, finicio, fmodifica, fmostrartodos,fnuevo, fbuscaxid, fmodificaxid, factualiza, fbajaxid, feliminar} from '../controllers/vendedorControllers.js';

const rvendedor = express.Router();

rvendedor.get('/vendedor', finicio)

rvendedor.get('/vendedor/alta', falta);

rvendedor.post('/vendedor/alta', fnuevo);

rvendedor.get('/vendedor/baja', fbaja);

rvendedor.get('/vendedor/bajaxid/:id', fbajaxid);

rvendedor.get('/vendedor/eliminarxid/:id', feliminar);

rvendedor.get('/vendedor/modifica', fmodifica);

rvendedor.get('/vendedor/modificaxid/:id', fmodificaxid);

rvendedor.post('/vendedor/actualiza', factualiza);

rvendedor.get('/vendedor/consultaxid', fconsultaid);

rvendedor.get('/vendedor/consultaxid/:id', fbuscaxid);

rvendedor.get('/vendedor/mostrartodos', fmostrartodos);

export {rvendedor};
