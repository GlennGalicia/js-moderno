// Arrow function en foreach y maps

const carrito = [
    { nombre: "Monitor 4k", precio: 5800 },
    { nombre: "Teclado Apple", precio: 4800 },
    { nombre: "TrackPad Apple", precio: 2800 },
    { nombre: "Logitech THX", precio: 3800 },
    { nombre: "MacBook Pro 14", precio: 65000 },
]

carrito.forEach(producto => console.log(`${producto.nombre} - ${producto.precio}`));

const nuevoArray = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

console.log(nuevoArray)