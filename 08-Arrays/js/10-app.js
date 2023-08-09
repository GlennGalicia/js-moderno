const carrito = [
    { nombre: 'Monitor 4k', precio: 4800 },
    { nombre: 'Teclado touch', precio: 5000 },
    { nombre: 'Iphone 13 mini', precio: 18500 }
]

const nuevoArray = carrito.map( function(producto){
    return `El producto ${producto.nombre} tiene precio de ${producto.precio}`
})

console.log(nuevoArray)

carrito.forEach( function(producto){
    console.log(`El producto ${producto.nombre} tiene precio de ${producto.precio}`)
})