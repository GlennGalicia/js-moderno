// Eventos submit a un formulario

const form = document.addEventListener('submit', validarForm)

function validarForm(evt) {
    evt.preventDefault(); // previene ejecutar el enlace

    console.log('buscando...');
    console.log(evt.target.method);
}