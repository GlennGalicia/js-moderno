const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']

meses.push('Julio')
meses.push('Agosto')


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
    nombre: 'Iphone 13 mini',
    precio: 15000
}

carrito.push(producto)
carrito.push(producto2)
carrito.push(producto3)
console.table(carrito)

// elimina el ultimo elemento del arreglo
carrito.pop()
console.table(carrito)

// elimina el primer elemento del arreglo
carrito.shift()
console.table(carrito)