import {conectar} from '../database/conexion.js';
import Swal from 'sweetalert2';
const bdd = await conectar();

export const finicio = (pet, resp)=>{
    resp.render('pedidos')
}

export const falta = (pet, resp)=>{
    resp.render('pedalta')
}

export const fnuevo = async (pet, resp)=>{
    let id, precio, fecha, idcli, idvend;
    id = parseInt(pet.body.id);
    precio = parseFloat(pet.body.precio);
    fecha  = pet.body.fecha;
    idcli = parseInt(pet.body.idcli);
    idvend = parseInt(pet.body.idvend);

    try {
        let alta = "INSERT INTO pedidos (idPedidos,precioCompra,fechaPedido,Cliente_idCliente,Vendedor_idVendedor) VALUES ('"+id+"','"+precio+"','"+fecha+"','"+idcli+"','"+idvend+"');";
        const [resultado] = await bdd.query(alta);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "El pedido fue correctamente guardado",
            showConfirmButton: false,
            timer: 1500
            });
    } catch (error) {
        await Swal.fire({
        icon: "error",
        title: "No pudo guardar el pedido ...",
        text: "Algún problema hay!",
        footer: "<a href=\"#\">Hay que revisar</a>"
        });
    }
}

export const fbaja = (pet, resp)=>{
    resp.render('pedbaja')
}

export const fbajaxid = async(pet, resp)=>{
    let id = pet.params.id;
    try {
        let consultasql = "select idPedidos, precioCompra, fechaPedido, Cliente_idCliente, Vendedor_idVendedor from pedidos where idPedidos = '"+id+"';";
        const [registro] = await bdd.query(consultasql);
        if (registro.length > 0) {
            console.log(registro);
            console.log(`${registro[0].idPedidos} ${registro[0].precioCompra} ${registro[0].fechaPedido} ${registro[0].Cliente_idCliente} ${registro[0].Vendedor_idVendedor}`);
            resp.render('pedeliminar', {
                codped: registro[0].idPedidos,
                precio: registro[0].precioCompra,
                fecha: registro[0].fechaPedido,
                codcli: registro[0].Cliente_idCliente,
                codvend: registro[0].Vendedor_idVendedor
            })
        } else {
            console.log("Pedido inexistente !!");
            await Swal.fire("Pedido Inexistente !!!");             
        }
    } catch (error) {
        console.log("error en la base de datos");
        await Swal.fire({
        icon: "error",
        title: "error en la base de datos al buscar el pedido ...",
        text: "Algún problema hay!",
        footer: "<a href=\"#\">Hay que revisar</a>"
        });

    }    
}


export const feliminarxid = async (pet, resp)=>{
    let id;
    id = parseInt(pet.params.id);

    try {
        let eliminarsql = "DELETE FROM pedidos WHERE idPedidos = '"+id+"';";
        const [resultado] = await bdd.query(eliminarsql);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "El pedido fue correctamente ELIMINADO",
            showConfirmButton: false,
            timer: 1500
            });
            resp.render('pedidos')
    } catch (error) {
        await Swal.fire({
        icon: "error",
        title: "No pudo ELIMINAR el pedido ...",
        text: "Algún problema hay!",
        footer: "<a href=\"#\">Hay que revisar</a>"
        });
    }
}


export const fmodifica = (pet, resp)=>{
    resp.render('pedmodifica')
}

export const fmodificaxid = async(pet, resp)=>{
    let id = pet.params.id;
    try {
        let consultasql = "select idPedidos, precioCompra, fechaPedido, Cliente_idCliente, Vendedor_idVendedor from pedidos where idPedidos = '"+id+"';";
        const [registro] = await bdd.query(consultasql);
        if (registro.length > 0) {
            console.log(registro);
            console.log(`${registro[0].idPedidos} ${registro[0].precioCompra} ${registro[0].fechaPedido} ${registro[0].Cliente_idCliente} ${registro[0].Vendedor_idVendedor}`);
            resp.render('pedactualizar', {
                codped: registro[0].idPedidos,
                precio: registro[0].precioCompra,
                fecha: registro[0].fechaPedido,
                codcli: registro[0].Cliente_idCliente,
                codvend: registro[0].Vendedor_idVendedor
            })
        } else {
            console.log("Pedido inexistente !!");
            await Swal.fire("Pedido Inexistente !!!");             
        }
    } catch (error) {
        console.log("error en la base de datos");
        await Swal.fire({
        icon: "error",
        title: "error en la base de datos al buscar el pedido ...",
        text: "Algún problema hay!",
        footer: "<a href=\"#\">Hay que revisar</a>"
        });
    }    
}

export const factualiza = async (pet, resp)=>{
    let id, precio, fecha, idcli, idvend;
    id = parseInt(pet.body.id);
    precio = parseFloat(pet.body.precio);
    fecha  = pet.body.fecha;
    idcli = parseInt(pet.body.idcli);
    idvend = parseInt(pet.body.idvend);

    try {
        let modisql = "UPDATE pedidos SET precioCompra = '"+precio+"', fechaPedido = '"+fecha+"', Cliente_idCliente = '"+idcli+"', Vendedor_idVendedor = '"+idvend+"' WHERE idPedidos = '"+id+"';";
        const [resultado] = await bdd.query(modisql);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "El pedido fue correctamente actualizado",
            showConfirmButton: false,
            timer: 1500
            });
    } catch (error) {
        await Swal.fire({
        icon: "error",
        title: "No pudo guardar el pedido ...",
        text: "Algún problema hay!",
        footer: "<a href=\"#\">Hay que revisar</a>"
        });
    }
}

export const fconsultaid = (pet, resp)=>{
    resp.render('pedconsultaid')
}

export const fbuscaid = async (pet, resp)=>{
    let id = pet.params.id;
    try {
        let consultasql = "select idPedidos, precioCompra, fechaPedido, Cliente_idCliente, Vendedor_idVendedor from pedidos where idPedidos = '"+id+"';";
        const [registro] = await bdd.query(consultasql);
        if (registro.length > 0) {
            console.log(registro);
            console.log(`${registro[0].idPedidos} ${registro[0].precioCompra} ${registro[0].fechaPedido} ${registro[0].Cliente_idCliente} ${registro[0].Vendedor_idVendedor}`);
            resp.render('pedmostrar', {
                codped: registro[0].idPedidos,
                precio: registro[0].precioCompra,
                fecha: registro[0].fechaPedido,
                codcli: registro[0].Cliente_idCliente,
                codvend: registro[0].Vendedor_idVendedor
            })
        } else {
            console.log("Pedido inexistente !!");
            await Swal.fire("Pedido Inexistente !!!");             
        }
    } catch (error) {
        console.log("error en la base de datos");
        await Swal.fire({
        icon: "error",
        title: "error en la base de datos al buscar el pedido ...",
        text: "Algún problema hay!",
        footer: "<a href=\"#\">Hay que revisar</a>"
        });

    }
}

export const fmostrartodo = async(pet, resp)=>{
    try {
        let mostrarsql = "select idPedidos, precioCompra, fechaPedido, Cliente_idCliente, Vendedor_idVendedor from pedidos order by idPedidos;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('pedmostrartodos', {registros})
    } catch (error) {
        console.log("error en la base de datos");
        await Swal.fire({
        icon: "error",
        title: "error en la base de datos al mostrar los pedidos ...",
        text: "Algún problema hay!",
        footer: "<a href=\"#\">Hay que revisar</a>"
        });

    }

}