function Cliente(nombre, saldo) {
    this.nombre = nombre,
    this.saldo = saldo
}

const glenn = new Cliente('Glenn', 500000);

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(glenn));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre,
    this.saldo = saldo,
    this.categoria = categoria
}

const empresa = new Empresa('Udemy', 1000000, 'Cursos en línea');

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría ${categoria}`;
}

console.log(formatearEmpresa(empresa));