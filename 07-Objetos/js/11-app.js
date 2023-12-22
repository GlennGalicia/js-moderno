// Funciones en objetos y acceder a sus valores

const producto = {
    nombre: "MacBook Pro 14",
    precio: 65000,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene precio de - ${this.precio}`)
    }
}

producto.mostrarInfo()