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
        if(e.target.value.trim() === ''){
            mostrarAlerta(`el campo ${e.target.id} no puede estar vacio`,e.target.parentElement)
            return
        }
        
        if(e.target.id == 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El mail registrado no es valido',e.target.parentElement)
            return
        }

        limpiarAlerta(e.target.parentElement)
    }

    function mostrarAlerta(mesagge, reference){
        
        limpiarAlerta(reference)

        const error = document.createElement('p')
        error.textContent = mesagge
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')

        reference.appendChild(error)
    }

    function limpiarAlerta(reference){
        // Verificar si ya existe una alerta
        const alerta = reference.querySelector('.bg-red-600')
        if(alerta){
            alerta.remove()
        }
    }
 
    function validarEmail(email){
        const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        return expresion.test(email)
    }

})