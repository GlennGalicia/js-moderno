// El Object constructor

// Object Literal
const producto = {
    nombre: "MacBook Pro 14",
    precio: 65000,
    disponible: true
}

// Object Constructor

function Producto(nombre, precio) {
    this.nombre = nombre,
    this.precio = precio,
    this.disponible = true
}

const item = new Producto('Macbook Pro 14', 65000)
console.log(item)