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
        fabricacion: {
            pais: 'China'
        }
    }
}

const { nombre, informacion, informacion: { fabricacion: { pais } } } = producto

console.log(nombre)
console.log(informacion)
console.log(pais)
