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

function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);

const mary = new Persona('Mary', 5000, 1234567890);
console.log(mary);
console.log(mary.nombreClienteSaldo());


const glenn = new Cliente('Glenn', 5000);
console.log(glenn.tipoCliente());
console.log(glenn.nombreClienteSaldo());
glenn.retiraSaldo(100);
console.log(glenn.nombreClienteSaldo());
console.log(glenn);
