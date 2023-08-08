'use strict'

//Object Literal
const producto = {
    nombre: "Monitor Samsung 4K",
    precio: 300,
    disponible: true
}

Object.seal(producto)

producto.disponible = false

console.log(producto)
console.log(Object.isSealed(producto))