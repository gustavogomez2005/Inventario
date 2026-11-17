import express from 'express';
import colors from 'colors';
import path from 'path';
import {fileURLToPath} from 'url';

const puerto = 3000;
const app = express();

// setear que trabajo con motor de vistas ejs
app.set('view engine', 'ejs');

// seteo donde estan las vistas
const directorio = path.dirname(fileURLToPath(import.meta.url))
console.log(directorio);
app.set('views', path.join(directorio, 'vistas'));

// use la carpeta public
app.use(express.static(path.join(directorio, 'public')))

// para tomar datos de un formulario
app.use(express.urlencoded({extended: false}))

// para tomar datos de un json
app.use(express.json());

// rutas
import {rinicio} from './rutas/rutaInicio.js';
app.use(rinicio)


// inicio servidor
app.listen(puerto, ()=>{
    console.log(`servidor iniciando en el puerto ${puerto}`);
});