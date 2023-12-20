// Objectos dentro de objetos

const producto = {
    nombre: "MacBook Pro 14",
    precio: 65000,
    disponible: true,
    informacion: {
        medidas:{
            peso: "2kg",
            medida: "50cm"
        },
        fabricacion:{
            pais: "EUA"
        }
    }
}

// accesesando a objetos

console.log(producto.informacion.medidas)
console.log(producto.informacion.fabricacion)
