//INGRESO DE VARIOS PRODUCTOS
db.Producto.insertMany(
    [
        {CODIGO_PRODUCTO: 1000033, DESCRIPCION: "CUADERNO ENGRAMPADO", CARACT: "CUADERNO A RAYAS", UNID_MEDIDA: "UNIDAD", PRECIOVENTASOL: 2.5, CANT_DISPO: 7.0, CST_TOT_DOLAR: 2.47, CODIGO_MARCA: 100008},
        {CODIGO_PRODUCTO: 1000034, DESCRIPCION: "CUADERNO ANILLADO", CARACT: "CUADERNO CUADRICULADO", UNID_MEDIDA: "UNIDAD", PRECIOVENTASOL: 6.5, CANT_DISPO: 12.0, CST_TOT_DOLAR: 2.47, CODIGO_MARCA: 100008}

    ]
);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//BUSCAR TODOS LOS PRODUCTOS DE UNA MARCA POR SU CODIGO
db.Producto.find({CODIGO_MARCA: 100008});        
//BUSCAR LOS PEDIDOS DE UNA PERSONA POR SU CODIGO
db.Pedido.find({COD_CLIENTE: 112});        
//BUSCAR LOS TRABAJADORES QUE TIENEN COMO SUPERVISOR A 10001
db.Trabajador.find({CODIGO_SUPERVISOR: 10001});       
//BUSQUEDA DE PRODUCTOS
db.Producto.find({CODIGO_PRODUCTO: {$in: [1000033, 1000034, 1000034]}});    
//TRABAJADORES CON UN SALARIO MENOR A 3000
db.Trabajador.find({SALARIO: {$lte: 3000}});
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//ACTUALIZAR EL SALARIO DE UN EMPLEADO
db.Trabajador.update({CODIGO_TRABAJADOR: 10005}, {$set: {SALARIO: 1100.0}});
db.Trabajador.find({CODIGO_TRABAJADOR: 10005});
//ACTUALIZAR EL ESTADO DE UN PEDIDO
db.Pedido.update({NRO_COMPROBANTE: 3}, {$set: {ESTADO: "PENDIENTE"}});
db.Pedido.find({NRO_COMPROBANTE: 3});
//ACTUALIZAR DIRECCION DE UNA PERSONA NATURAL
db.PersonaN.update({DNI: 73195187}, {$set: {DIRECCION: "CALLE LOS NOGALES 543"}});
db.PersonaN.find({DNI: 73195187});
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//ELIMINAR PRODUCTOS DE UNA MARCA DETERMINADA
db.Producto.remove({CODIGO_MARCA: 100008});
db.Producto.find({CODIGO_MARCA: 100008});        
//ELIMINAR UN CLIENTE POR CODIGO
db.Cliente.remove({COD: 115});
db.Cliente.find({COD: 115});        

        
        
        

