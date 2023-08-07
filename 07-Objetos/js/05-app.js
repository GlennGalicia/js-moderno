//Object Literal
const producto = {
    nombre: "Monitor Samsung 4K",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '2kg',
            medida: '1m'
        },
        fabricacion:{
            pais: 'China'
        }
    }
}

console.log(producto.nombre)
console.log(producto.informacion.medidas.peso)
console.log(producto.informacion.fabricacion.pais)
