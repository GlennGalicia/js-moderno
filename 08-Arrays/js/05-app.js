// Añadir nuevos elementos al final o inicio de un array

const carrito = []

// Definir productos
const producto = {
    nombre: "Monitor Samsung",
    precio: 3500
}

const producto2 = {
    nombre: "Logitech",
    precio: 3400
}

const producto3 = {
    nombre: "Teclado Apple",
    precio: 4400
}

// agregar elemento al final del arreglo
carrito.push(producto)
carrito.push(producto2)
carrito.unshift(producto3)

console.table(carrito)