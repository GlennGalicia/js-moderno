// Eventos sobre los imputs

// Registrar un evento
const busqueda = document.querySelector('.busqueda')

busqueda.addEventListener('input', (event) => {

    if (event.target.value === '') {
        console.log('fallo la validacion');
    } else {
        console.log(event.target.value);
    }
})