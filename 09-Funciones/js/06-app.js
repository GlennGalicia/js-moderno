// Parametros por defecto en una funcion

function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(`Hola ${nombre} ${apellido}, Bienvenido!!`);
}

saludar('Glenn', 'Galicia')
saludar()