document.addEventListener('DOMContentLoaded', function () {

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // Campos Datos Usuario
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
    const formulario = document.querySelector('#formulario')
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    const spinner = document.querySelector('#spinner')

    // Asignar Eventos a los inputs
    inputEmail.addEventListener('input', validar)
    inputAsunto.addEventListener('input', validar)
    inputMensaje.addEventListener('input', validar)
    formulario.addEventListener('submit', enviarEmail)

    // Resetear formulario
    btnReset.addEventListener('click', e => {
        e.preventDefault()

        // Limpiar los campos
        email.email = ''
        email.asunto = ''
        email.mensaje = ''

        formulario.reset()
        comprobarDatos()
    })

    // Validación de datos
    function validar(e) {
        if (e.target.value.trim() === '') {
            mostrarAlerta(`el campo ${e.target.id} no puede estar vacio`, e.target.parentElement)
            email[e.target.id] = ''
            comprobarDatos(email)
            return
        }

        if (e.target.id == 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El mail registrado no es valido', e.target.parentElement)
            email[e.target.id] = ''
            comprobarDatos(email)
            return
        }

        limpiarAlerta(e.target.parentElement)

        // Asignar los valores al objeto
        email[e.target.id] = e.target.value.trim().toLowerCase()

        // Comprobar si todos los campos estan completos
        comprobarDatos(email)
    }

    function mostrarAlerta(mesagge, reference) {

        limpiarAlerta(reference)

        const error = document.createElement('p')
        error.textContent = mesagge
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')

        reference.appendChild(error)
    }

    function limpiarAlerta(reference) {
        // Verificar si ya existe una alerta
        const alerta = reference.querySelector('.bg-red-600')
        if (alerta) {
            alerta.remove()
        }
    }

    function validarEmail(email) {
        const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        return expresion.test(email)
    }

    function comprobarDatos() {
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true
            return
        }
        btnSubmit.classList.remove('opacity-50')
        btnSubmit.disabled = false
    }

    function enviarEmail(e) {
        e.preventDefault()
        spinner.classList.add('flex')
        spinner.classList.remove('hidden')
    }
})