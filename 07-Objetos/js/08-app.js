"use strict"
// Congelar un objeto para no poder modificarlo

const producto = {
    nombre: "MacBook Pro 14",
    precio: 65000,
    disponible: true
}

Object.freeze(producto)

console.log(Object.isFrozen(producto))