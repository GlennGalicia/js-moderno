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

    function validar(e){
        console.log(e.target.value);
    }
})