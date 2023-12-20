"use strict"
// Sellar un objeto para solo actualizar sus propiedades

const producto = {
    nombre: "MacBook Pro 14",
    precio: 65000,
    disponible: true
}

Object.seal(producto)

//delete producto.disponible
producto.disponible = false

console.log(producto)