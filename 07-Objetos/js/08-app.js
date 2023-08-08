'use strict'

//Object Literal
const producto = {
    nombre: "Monitor Samsung 4K",
    precio: 300,
    disponible: true
}

Object.freeze(producto)

//producto.disponible = false
//producto.image = "img.jpg"

console.log(producto)
console.log(Object.isFrozen(producto))