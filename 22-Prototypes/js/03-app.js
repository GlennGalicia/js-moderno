function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {

    let tipo;

    if (this.saldo > 100000) {
        tipo = 'Gold';
    } else if (this.saldo > 50000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function (retira) {
    this.saldo -= retira;
}

const glenn = new Cliente('Glenn', 5000);
console.log(glenn.tipoCliente());
console.log(glenn.nombreClienteSaldo());
glenn.retiraSaldo(100);
console.log(glenn.nombreClienteSaldo());
console.log(glenn);
