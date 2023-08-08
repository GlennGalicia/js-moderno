'use strict'

//Object Literal
const producto = {
    nombre: "Monitor Samsung 4K",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const res1 = Object.assign(producto, medidas)
console.log(res1)

const res2 = {...producto, ...medidas}
console.log(res2)