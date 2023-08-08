//Object Literal
const producto = {
    nombre: "Monitor Samsung 4K",
    precio: 300,
    disponible: true
}

producto.disponible = false
delete producto.precio

console.log(producto)