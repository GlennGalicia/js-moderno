'use strict'

// Object Literal
const producto = {
    nombre: "Monitor Samsung 4K",
    precio: 300,
    disponible: true,
   
}

// Object constructor
function Producto(nombre, precio){
    this.nombre = nombre
    this.precio = precio
    this.disponible = true
}

const product1 = new Producto('HP Z 2k', 48000)
console.log(product1)

const product2 = new Producto('Samsung 4k', 8000)
console.log(product2)