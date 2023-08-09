//Object Literal
const producto = {
    nombre: "Monitor Samsung 4K",
    precio: 300,
    disponible: true
}

//destructuring en objetos
const {nombre, precio, disponible} = producto

console.log(`Mi ${nombre} tiene precio de $${precio}`)

//destructuring en arreglos
const numeros = [10, 20, 30, 40]
const [ , , tercero] = numeros
console.log(tercero)