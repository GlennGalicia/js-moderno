//Destructuring de Arrays

const producto = {
    nombre: "MacBook Pro 14",
    precio: 65000,
    disponible: true
}

const { nombre, precio, disponible } = producto

console.log(nombre)
console.log(precio)
console.log(disponible)

const numeros = [10, 20, 30, 40, 50]
const [primero, segundo, tercero] = numeros
const [ , , , cuarto] = numeros
const [pri, ...ter] = numeros

console.log(primero)
console.log(segundo)
console.log(tercero)
console.log(cuarto)
console.log(ter)