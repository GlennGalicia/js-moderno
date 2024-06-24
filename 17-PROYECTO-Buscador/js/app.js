// Variables
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')
const resultado = document.querySelector('#resultado');

const maxYear = new Date().getFullYear()
const minYear = maxYear - 10

const autoBusqueda = {
    marca: '',
    year: '',
    maxPrice: '',
    minPrice: '',
    puertas: '',
    transmision: '',
    color: ''
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
    llenarSelect();
});

marca.addEventListener('change', e => {
    autoBusqueda.marca = e.target.value
    filtrarAuto()
})

year.addEventListener('change', e => {
    autoBusqueda.year = e.target.value
})

minimo.addEventListener('change', e => {
    autoBusqueda.minPrice = e.target.value
})

maximo.addEventListener('change', e => {
    autoBusqueda.maxPrice = e.target.value
})

puertas.addEventListener('change', e => {
    autoBusqueda.puertas = e.target.value
})

transmision.addEventListener('change', e => {
    autoBusqueda.transmision = e.target.value
})

color.addEventListener('change', e => {
    autoBusqueda.color = e.target.value
})

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

function llenarSelect() {
    for (let i = maxYear; i >= minYear; i--) {
        const option = document.createElement('option')
        option.value = i
        option.textContent = i
        year.appendChild(option)
    }
}

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca)
    console.log(resultado);
}

// Retorna objetos que cumplan con la condición
function filtrarMarca(auto) {
    const { marca } = autoBusqueda

    if (marca) {
        return auto.marca === marca
    }

    return auto
}