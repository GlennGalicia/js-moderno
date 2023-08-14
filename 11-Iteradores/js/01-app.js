for (let i = 0; i <= 10; i++) {
    console.log(`Número: ${i}`)
}

for (let index = 0; index <= 20; index++) {
    if (index % 2 === 0) {
        console.log(`El número ${index} es par`)
    } else {
        console.log(`El número ${index} es impar`)
    }
}

const carrito = [
    { nombre: 'Monitor 4K 27in', precio: 4800, marca: 'Samsung' },
    { nombre: 'Monitor 2K 27in', precio: 5800, marca: 'HP' },
    { nombre: 'Ipad Pro 2Gen', precio: 10800, marca: 'Apple' },
    { nombre: 'Iphone 13 mini', precio: 18000, marca: 'Apple' },
    { nombre: 'Bocina portable', precio: 6800, marca: 'Bose' }
]

for (let iterador = 0; iterador < carrito.length; iterador++) {
    console.log(carrito[iterador])
}