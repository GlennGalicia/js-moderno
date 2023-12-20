//Destructuring de objetos anidados

const producto = {
    nombre: "MacBook Pro 14",
    precio: 65000,
    disponible: true,
    informacion: {
        medidas: {
            peso: "2kg",
            medida: "50cm"
        },
        fabricacion: {
            pais: "EUA"
        }
    }
}

const { nombre, informacion, informacion: { medidas, fabricacion, fabricacion: { pais } } } = producto

console.log(nombre)
console.log(informacion)
console.log(medidas)
console.log(fabricacion)
console.log(pais)
