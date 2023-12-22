// Crear un nuevo objeto con spread operator

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

let resultado;

resultado = [...carrito, producto]
resultado = [...resultado, producto2, producto3]

console.table(resultado)