// Eliminar elementos con splice

const carrito = []

// definir productos
const producto = {
    nombre: "Monitor Samsung",
    precio: 3500
}

const producto2 = {
    nombre: "Logitech THX",
    precio: 3400
}

const producto3 = {
    nombre: "Teclado Apple",
    precio: 4400
}

const producto4 = {
    nombre: "Trackpad Apple",
    precio: 4400
}

// agregar elemento al final del arreglo
carrito.push(producto)
carrito.push(producto2)
carrito.push(producto4)
carrito.unshift(producto3)

console.table(carrito)

// eliminar último elemento de un arreglo
carrito.pop()

// eliminar el primer elemento
carrito.shift()

// eliminar cualquier elemento
carrito.splice(0, 1)

console.table(carrito)