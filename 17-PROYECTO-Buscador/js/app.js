// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year')

const maxYear = new Date().getFullYear()
const minYear = maxYear - 10

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
    llenarSelect();
});

// Funciones
function mostrarAutos() {
    autos.forEach(auto => {

        // Destructuring
        const { marca, modelo, year, precio, puertas, color, transmision } = auto
        const autoHTML = document.createElement('p')
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $ ${precio} - Color: ${color}
        `
        resultado.appendChild(autoHTML)
    });
}

function llenarSelect(){
    for (let i = maxYear; i >= minYear; i--) {
        const option = document.createElement('option')
        option.value = i
        option.textContent = i
        year.appendChild(option)
    }
}