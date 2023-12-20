// Copiar dos objetos

const producto = {
    nombre: "MacBook Pro 14",
    precio: 65000,
    disponible: true
}

const medidas = {
    peso: "2kg",
    medida: "40cm"
}

const producto1 = Object.assign(producto, medidas)
console.log(producto1)

//Spread operator
const producto2 = {...producto, ...medidas}
console.log(producto2)