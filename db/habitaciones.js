const name = 'habitaciones'

let schema = {
    id: 'number',
    canPersona: 'number',
    precio: 'number'
}

// contenido inicial
let data = [
    {
        id: 1,
        canPersona: 2,
        precio: 2000
    }
]

module.exports = {
    schema,
    data,
}
