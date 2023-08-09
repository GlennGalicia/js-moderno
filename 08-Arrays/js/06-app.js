const carrito = []

const producto = {
    nombre: 'Monitor 4k',
    precio: 4800
}

const producto2 = {
    nombre: 'Monitor 8k',
    precio: 4800
}

const producto3 = {
    nombre: 'Iphone 15 pro',
    precio: 4800
}

let resultado
resultado = [...carrito, producto]
resultado = [...resultado, producto2]
resultado = [producto3, ...resultado]


console.table(resultado)