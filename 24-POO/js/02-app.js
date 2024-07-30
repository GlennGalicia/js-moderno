class Cliente {

    constructor(nombre, saldo) {
        this.nombre = nombre
        this.saldo = saldo
    }
    
    mostrarInfo(){
        return `Cliente ${this.nombre}, tu saldo es de: $ ${this.saldo}`
    }

    static bienvenida(){ // metodos estaticos no necesitan instancia
        return `Bienvenido al Cajero BBVA`
    }
}

const glenn = new Cliente('Glenn', 54000)
console.log(glenn);
console.log(glenn.mostrarInfo());
console.log(Cliente.bienvenida());