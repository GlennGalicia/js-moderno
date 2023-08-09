const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']

meses.push('Julio')
meses.push('Agosto')

console.table(meses)

const carrito = []

const producto = {
    nombre: 'Monitor 4k',
    precio: 4800
}

const producto2 = {
    nombre: 'Monitor 8k',
    precio: 4800
}

carrito.push(producto2)
carrito.push(producto)

console.table(carrito)