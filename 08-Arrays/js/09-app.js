const carrito = [
    { nombre: 'Monitor 4k', precio: 4800 },
    { nombre: 'Teclado touch', precio: 5000 },
    { nombre: 'Iphone 13 mini', precio: 18500 }
]

carrito.forEach( function(producto){
    console.log(`El producto ${producto.nombre} tiene precio de ${producto.precio}`)
})