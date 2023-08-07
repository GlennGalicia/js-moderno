//Object Literal
const producto = {
    nombre: "Monitor Samsung 4K",
    precio: 300,
    disponible: true
}

//agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg"

//eliminar propiedades de objeto
delete producto.disponible

console.log(producto)