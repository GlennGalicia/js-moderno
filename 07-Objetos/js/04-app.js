//Object Literal
const producto = {
    nombre: "Monitor Samsung 4K",
    precio: 300,
    disponible: true
}

//destructuring
const {nombre, precio, disponible} = producto

console.log(`Mi ${nombre} tiene precio de $${precio}`)