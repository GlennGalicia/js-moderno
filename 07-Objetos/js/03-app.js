// Agregar o eliminar propiedades de un objeto

const producto = {
    nombre: "MacBook Pro 14",
    precio: 65000,
    disponible: true
}

// agregar nueva propiedad al objeto
producto.imagen = "img/dashboard.jpg"

// eliminar propiedad del objeto
delete producto.disponible

console.log(producto)