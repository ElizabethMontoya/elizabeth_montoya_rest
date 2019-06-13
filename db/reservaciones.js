const name = 'reservaciones'

let schema = {
    id: 'number',
    cantHab: 'number',
    fechaEntrada: 'string',
    fechaSalida: 'string',
    dias: 'number',
    precio: 'number',
    idhabitacion: 'number'
}

// contenido inicial
let data = [
    {
        id: 1,
        cantHab: 2,
        fechaEntrada: "6/15/2019",
        fechaSalida: "6/20/2019",
        dias: 3,
        precio: 12000,
        idhabitacion: 1         
        
    }
    
]

module.exports = {
    schema,
    data,
}
