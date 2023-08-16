const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo

meses.forEach( mes  =>{
    if (mes === 'Enero') {
        console.log('Si existe Enero')
    }
})

const existeMes = meses.includes('Enero')
console.log(existeMes)

// En un arreglo de objetos se usa .some

const item = carrito.some( producto => producto.nombre === 'Televisión')
console.log(item)