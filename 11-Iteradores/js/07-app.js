const pendientes = ['llamar técnico woofer', 'curso ingles', 'cotización llantas']

for (const pendiente of pendientes) {
    console.log(pendiente)
}

const carrito = [
    { nombre: 'Monitor 4K 27in', precio: 4800, marca: 'Samsung' },
    { nombre: 'Monitor 2K 27in', precio: 5800, marca: 'HP' },
    { nombre: 'Ipad Pro 2Gen', precio: 10800, marca: 'Apple' },
    { nombre: 'Iphone 13 mini', precio: 18000, marca: 'Apple' },
    { nombre: 'Bocina portable', precio: 6800, marca: 'Bose', descuento: true }
]

for (const producto of carrito) {
    console.log(producto.nombre)
}