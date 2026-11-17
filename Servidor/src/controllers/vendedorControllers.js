import {conectar} from '../database/conexion.js';
import Swal from 'sweetalert2';
const bdd = await conectar();

export const finicio = (pet, resp)=>{
    resp.render('vendedores')
}

export const falta = (pet, resp)=>{
    resp.render('vendalta')
}

export const fnuevo = async (pet, resp)=>{
    let id, nom, ciu, comi;
    id = pet.body.id;
    nom = pet.body.nom;
    ciu = pet.body.ciu;
    comi = parseFloat(pet.body.comi);

    try {
        let altaven = "INSERT INTO vendedor (idVendedor,nom,ciu,comi) VALUES ('"+id+"','"+nom+"','"+ciu+"','"+comi+"');";
        const [resultado] = await bdd.query(altaven);
        await Swal.fire({
            position: "center-start",
            icon: "success",
            title: "Vendedor correctamente guardado",
            showConfirmButton: false,
            timer: 1500
            });
    } catch (error) {
        await Swal.fire({
            icon: "error",
            title: "No pudo guardar al Vendedor ...",
            text: "Algo salió mal!",
            footer: "<a href=\"#\">Debe encontrar el error </a>"
            });
    }
}

export const fbaja = (pet, resp)=>{
    resp.render('vendbaja')
}

export const fbajaxid = async(pet, resp)=>{
    let id = pet.params.id;
    try {
        let consultasql = "select idVendedor, nom, ciu, comi from vendedor where idVendedor = '"+id+"';";
        const [registro] = await bdd.query(consultasql);
        console.log(registro);
        if (registro.length > 0) {
            console.log(`${registro[0].idVendedor} ${registro[0].nom} ${registro[0].ciu} ${registro[0].comi}`);
            resp.render('vendeliminar', {
                Codigo: registro[0].idVendedor,
                nom: registro[0].nom,
                ciu: registro[0].ciu,
                Comi: registro[0].comi
            })
        } else {
            console.log(`Vendedor inexistente`);
            await Swal.fire("Vendedor inexistente !!!");
        }
    } catch (error) {
        console.log(`error en la bdd`);
        await Swal.fire({
            icon: "error",
            title: "error en la bdd al buscar un Vendedor ...",
            text: "Algo salió mal!",
            footer: "<a href=\"#\">Debe encontrar el error </a>"
            });

    }
    
}

export const feliminar = async(pet, resp)=>{
    let id;
    id = pet.params.id;
    try {
        let eliminaven = "DELETE FROM vendedor WHERE idVendedor = '"+id+"';";
        const [resultado] = await bdd.query(eliminaven);
        await Swal.fire({
            position: "center-start",
            icon: "success",
            title: "Vendedor correctamente ELIMINADO",
            showConfirmButton: false,
            timer: 1500
            });
            resp.render('vendedores')
    } catch (error) {
        await Swal.fire({
            icon: "error",
            title: "No pudo ELIMINAR al Vendedor ...",
            text: "Algo salió mal!",
            footer: "<a href=\"#\">Debe encontrar el error </a>"
            });
    }

}

export const fmodifica = (pet, resp)=>{
    resp.render('vendmodifica')
}

export const fmodificaxid = async(pet, resp)=>{
    let id = pet.params.id;
    try {
        let consultasql = "select idVendedor, nom, ciu, comi from vendedor where idVendedor = '"+id+"';";
        const [registro] = await bdd.query(consultasql);
        if (registro.length > 0) {
            resp.render('vendactualizar', {
                Codigo: registro[0].idVendedor,
                nom: registro[0].nom,
                ciu: registro[0].ciu,
                Comi: registro[0].comi
            })
        } else {
            console.log(`Vendedor inexistente`);
            await Swal.fire("Vendedor inexistente !!!");
        }
    } catch (error) {
        console.log(`error en la bdd`);
        await Swal.fire({
            icon: "error",
            title: "error en la bdd al buscar un Vendedor ...",
            text: "Algo salió mal!",
            footer: "<a href=\"#\">Debe encontrar el error </a>"
            });
    }    
}

export const factualiza = async (pet, resp)=>{
    let id, nom, ciu, comi;
    id = pet.body.id;
    nom = pet.body.nom;
    ciu = pet.body.ciu;
    comi = parseFloat(pet.body.comi);

    try {
        let modificaven = "UPDATE vendedor SET nom = '"+nom+"', ciu = '"+ciu+"', comi = '"+comi+"' WHERE idVendedor = '"+id+"';";
        const [resultado] = await bdd.query(modificaven);
        await Swal.fire({
            position: "center-start",
            icon: "success",
            title: "Vendedor correctamente actualizado",
            showConfirmButton: false,
            timer: 1500
            });
    } catch (error) {
        await Swal.fire({
            icon: "error",
            title: "No pudo guardar al Vendedor ...",
            text: "Algo salió mal!",
            footer: "<a href=\"#\">Debe encontrar el error </a>"
            });
    }
}

export const fconsultaid = (pet, resp)=>{
    resp.render('vendconsultaxid')
}

export const fbuscaxid = async(pet, resp)=>{
    let id = pet.params.id;
    try {
        let consultasql = "select idVendedor, nom, ciu, comi from vendedor where idVendedor = '"+id+"';";
        const [registro] = await bdd.query(consultasql);
        console.log(registro);
        if (registro.length > 0) {
            console.log(`${registro[0].idVendedor} ${registro[0].nom} ${registro[0].ciu} ${registro[0].comi}`);
            resp.render('vendmostrar', {
                Codigo: registro[0].idVendedor,
                nom: registro[0].nom,
                ciu: registro[0].ciu,
                Comi: registro[0].comi
            })
        } else {
            console.log(`Vendedor inexistente`);
            await Swal.fire("Vendedor inexistente !!!");
        }
    } catch (error) {
        console.log(`error en la bdd`);
        await Swal.fire({
            icon: "error",
            title: "error en la bdd al buscar un Vendedor ...",
            text: "Algo salió mal!",
            footer: "<a href=\"#\">Debe encontrar el error </a>"
            });

    }
}

export const fmostrartodos = async(pet, resp)=>{
    try {
        let mostrarsql = "select idVendedor, nom, ciu, comi from vendedor order by idVendedor;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('vendmostrartodos', {registros})
    } catch (error) {
        console.log("error en la bdd");
        await Swal.fire({
            icon: "error",
            title: "error en la bdd al mostrar los Vendedores ...",
            text: "Algo salió mal!",
            footer: "<a href=\"#\">Debe encontrar el error </a>"
            });

    }
}
