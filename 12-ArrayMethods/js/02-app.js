const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes, i) =>{
    if (mes === 'Febrero') {
        console.log(`${mes} esta en la posición ${i}`)
    }
})

const indice = meses.findIndex( mes => mes === 'Diciembre')
console.log(indice)

const item = carrito.findIndex( producto => producto.nombre === 'Tablet')
console.log(item)