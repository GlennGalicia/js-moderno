// Funciones que se pasan valores

function sumar(a, b) {
    return a + b
}

console.log(sumar(10, 3));

// ejemplo más avanzado

let total = 0

function agregarCarrito(precio) {
    return total += precio
}

function calcularImpuestos(total) {
    return total * 1.15
}

total = agregarCarrito(100)
total = agregarCarrito(100)
total = agregarCarrito(300)

const totalPagar = calcularImpuestos(total)

console.log(total);
console.log(`El total a pagar es ${totalPagar}`);