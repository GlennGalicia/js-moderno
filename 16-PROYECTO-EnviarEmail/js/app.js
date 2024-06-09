document.addEventListener('DOMContentLoaded', function() {

    // Campos Datos Usuario
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    console.log(inputEmail)
    console.log(inputAsunto)
    console.log(inputMensaje)

    // Asignar Eventos a los inputs
    inputEmail.addEventListener('blur', validar)
    inputAsunto.addEventListener('blur', validar)
    inputMensaje.addEventListener('blur', validar)

    // Validación de datos
    function validar(e){
        if(e.target.value.trim() !== ''){
           console.log('Si hay algo')
        } else {
            console.log('No hay nada')
        }
    }
})