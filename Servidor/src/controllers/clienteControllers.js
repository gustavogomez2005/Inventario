import {conectar} from '../database/conexion.js';
import Swal from 'sweetalert2';

const bdd = await conectar();

export const finicio = (pet, resp)=>{
    resp.render('clientes')
}

export const falta = (pet, resp)=>{
    resp.render('clialta', {guardado: false})
}

export const fnuevo = async(pet, resp)=>{
    let id, nom, ciu, calif, idvend;
    id = parseInt(pet.body.id);
    nom = pet.body.nom;
    ciu = pet.body.ciu;
    calif = parseInt(pet.body.calif);
    idvend = parseInt(pet.body.idvend);

    try {
        let altaclisql = "INSERT INTO cliente (idCliente,nom,ciu,calif,idVendedor) VALUES ('"+id+"', '"+nom+"', '"+ciu+"', '"+calif+"', '"+idvend+"');";
        const [resultado] = await bdd.query(altaclisql);
        console.log(resultado);
            resp.render('clialta', {
                guardado: true,
                icono: "success",
                posicion: "top-end",
                mensaje: "Cliente guardado exitosamente  !!",
                tiempo: 1500,
                botonConfirma: false
            })
    } catch (error) {
        console.log(`error al intentar guardar un cliente \n ${error}`);
        let msjError = error;
         resp.render('clialta', {guardado: 'error', mensaje: msjError})            

    }   
}

export const fbaja = (pet, resp)=>{
    resp.render('clibaja', {ok: false, tit: 'Baja de Clientes', eliminado: false})
}

export const fbajaxid = async(pet, resp)=>{
    let id = pet.params.id;
    try {
        let buscaid = "select idcliente, nom, ciu, calif, idvendedor from cliente where idcliente = '"+id+"';";
        const [registro] = await bdd.query(buscaid);
        if (registro.length > 0) {
            resp.render('clieliminar', {
                    titulo: 'Consultar',
                    respcodigo: registro[0].idcliente,
                    respnom: registro[0].nom,
                    respciu: registro[0].ciu,
                    respcalif: registro[0].calif,
                    respidvend: registro[0].idvendedor});
        } else {
            console.log("no encontró al cliente");
            await Swal.fire("Cliente Inexistente !!!");             
        }

    } catch (error) {
        console.log(`${error}`);
        await Swal.fire({
            icon: "error",
            title: "No puede buscar al Cliente ...",
            text: "Algo salió mal!",
            footer: "<a href=\"#\">Algún dato incorrecto ?</a>"
            });        
    }    
}

export const fmodifica = (pet, resp)=>{
    resp.render('climodifica')
}

export const fmodificaxid = async(pet, resp)=>{
    let id = pet.params.id;
    console.log(pet.params.id);
    try {
        let buscaid = "select idcliente, nom, ciu, calif, idvendedor from cliente where idcliente = '"+id+"';";
        const [registro] = await bdd.query(buscaid);
        if (registro.length > 0) {
            resp.render('cliactualiza', {
                    cambiado: false,
                    titulo: 'Actualizar',
                    respcodigo: registro[0].idcliente,
                    respnom: registro[0].nom,
                    respciu: registro[0].ciu,
                    respcalif: registro[0].calif,
                    respidvend: registro[0].idvendedor});
        } else {
            console.log("no encontró al cliente");
            resp.render('cliactualiza', {
                    cambiado: false,
                    titulo: 'Actualizar',
                    respcodigo: "",
                    respnom: "",
                    respciu: "",
                    respcalif: "",
                    respidvend: ""})
        }

    } catch (error) {
        console.log(`${error}`);
        await Swal.fire({
            icon: "error",
            title: "No puede buscar al Cliente ...",
            text: "Algo salió mal!",
            footer: "<a href=\"#\">Algún dato incorrecto ?</a>"
            });        
    }    
}

export const factualiza = async(pet, resp)=>{
    let id, nom, ciu, calif, idvend;
    id = pet.body.id;
    nom = pet.body.nom;
    ciu = pet.body.ciu;
    calif = pet.body.calif;
    idvend = pet.body.idvend;

    try {
        let modificaclisql = "UPDATE cliente SET nom = '"+nom+"', ciu = '"+ciu+"', calif = '"+calif+"', idVendedor = '"+idvend+"' WHERE idCliente = '"+id+"';";
        const [resultado] = await bdd.query(modificaclisql);
        console.log(resultado);
        resp.render('cliactualiza', {actualizado: true, cambiado: true})

    } catch (error) {
        resp.render('cliactualiza', {actualizado: false, cambiado: true})
    }   
}


export const fconsultaid = (pet, resp)=>{
    resp.render('cliconsultaid')
}

export const fbuscaxid = async(pet, resp)=>{
    let id = pet.params.id;
    try {
        let buscaid = "select idcliente, nom, ciu, calif, idvendedor from cliente where idcliente = '"+id+"';";
        const [registro] = await bdd.query(buscaid);
        if (registro.length > 0) {
            console.log(`${registro[0].idcliente} ${registro[0].nom} ${registro[0].ciu} ${registro[0].calif} ${registro[0].idvendedor}`);
            resp.render('climostrar', {
                    existe: true,
                    ok: true,
                    titulo: 'Consultar',
                    respcodigo: registro[0].idcliente,
                    respnom: registro[0].nom,
                    respciu: registro[0].ciu,
                    respcalif: registro[0].calif,
                    respidvend: registro[0].idvendedor});
        } else {
            console.log("no encontró al cliente");
            resp.render('climostrar', {existe: false, ok: true})
        }

    } catch (error) {
        console.log(`${error}`);
        resp.render('climostrar', {existe: false, ok: true})
    }
}

export const fmostrartodos = async (pet, resp)=>{
    try {
        let muestrasql = "select idCliente, nom, ciu, calif, idVendedor from cliente order by idCliente;";
        const [registros] = await bdd.query(muestrasql);
        console.log(registros);
        resp.render('climostrartodos', { registros });
    } catch (error) {
        console.log("no puede mostrar los clientes");
    }
    
}


export const fborrarxid = async (pet, resp)=>{
    let id = pet.params.id;
    try {
        let borrarsql = "DELETE FROM cliente WHERE idcliente = '"+ id+"';";
        const [registro] = await bdd.query(borrarsql);
        console.log(registro);
        if (registro.affectedRows > 0) {
            resp.render('clibaja', {
                eliminado: true,
                tit: "elimnar cliente",
                ok: true
            })            
        } else {
            resp.render('clibaja', {eliminado: false, tit: "elimnar cliente", ok: true})    
        }

    } catch (error) {
        resp.render('clibaja', {eliminado: false, tit: "elimnar cliente", ok: true})
    }
}