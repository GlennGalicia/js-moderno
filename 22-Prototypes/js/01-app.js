// Object literal
const cliente = {
    nombre: 'Glenn',
    saldo: 500000
}
console.log(cliente);

// Object constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
const glenn = new Cliente('Glenn', 500000);
console.log(glenn);