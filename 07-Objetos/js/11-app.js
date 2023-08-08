'use strict'
//Object Literal
const producto = {
    nombre: "Monitor Samsung 4K",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }
}
producto.mostrarInfo()