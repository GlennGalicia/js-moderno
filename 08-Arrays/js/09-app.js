// foreach para iterar un arrary

const carrito = [
    { nombre: "Monitor 4k", precio: 5800 },
    { nombre: "Teclado Apple", precio: 4800 },
    { nombre: "TrackPad Apple", precio: 2800 },
    { nombre: "Logitech THX", precio: 3800 },
    { nombre: "MacBook Pro 14", precio: 65000 },
]

for (let i = 0; i < carrito.length; i++) {
    console.log(`Producto: ${carrito[i].nombre} - precio: ${carrito[i].precio}`)    
}

carrito.forEach( producto => {
    console.log(`${producto.nombre} - ${producto.precio}`)
});