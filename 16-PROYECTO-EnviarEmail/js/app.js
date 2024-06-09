document.addEventListener('DOMContentLoaded', function() {

    // Campos Datos Usuario
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
    const formulario = document.querySelector('#formulario')

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
            mostrarAlerta(`el campo ${e.target.id} no puede estar vacio`)
        }
    }

    function mostrarAlerta(mesagge){
        const alerta = document.createElement('p')
        alerta.textContent = mesagge
        alerta.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')

        formulario.appendChild(alerta)
    }
})