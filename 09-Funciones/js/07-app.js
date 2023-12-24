// Llamado entre funciones

iniciandoApp()
function iniciandoApp() {
    console.log('Iniciando App...')
    segundaFuncion()
}

function segundaFuncion() {
    console.log('Desde la segunda funcion');
    autenticandoUsuario('Glenn')
}

function autenticandoUsuario(nombre = 'Desconocido') {
    console.log('Autenticando usuario...espere...');
    console.log(`Bienvenido ${nombre}...`);
}