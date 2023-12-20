// Problema con los objetos: se pueden re asignar valores

const producto = {
    nombre: "MacBook Pro 14",
    precio: 65000,
    disponible: true
}

producto.disponible = false

console.log(producto)