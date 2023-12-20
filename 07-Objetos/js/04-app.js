//Destructuring de objetos

const producto = {
    nombre: "MacBook Pro 14",
    precio: 65000,
    disponible: true
}

const { nombre, precio, disponible } = producto

console.log(nombre)
console.log(precio)
console.log(disponible)