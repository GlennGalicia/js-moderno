for (let i = 0; i <= 10; i++) {

    if (i === 5) {
        console.log('Cinco')
        continue
    }

    console.log(`Número: ${i}`)
}

console.log('-----')

const carrito = [
    { nombre: 'Monitor 4K 27in', precio: 4800, marca: 'Samsung' },
    { nombre: 'Monitor 2K 27in', precio: 5800, marca: 'HP' },
    { nombre: 'Ipad Pro 2Gen', precio: 10800, marca: 'Apple' },
    { nombre: 'Iphone 13 mini', precio: 18000, marca: 'Apple' },
    { nombre: 'Bocina portable', precio: 6800, marca: 'Bose', descuento: true }
]

for (let i = 0; i < carrito.length; i++) {
    
    if(carrito[i].descuento){
        console.log(`el articulo ${carrito[i].nombre} tiene descuento`)
        continue
    }
    console.log(carrito[i].nombre)
}