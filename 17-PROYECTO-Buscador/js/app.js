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
    mostrarAutos(autos);
    llenarSelect();
});

marca.addEventListener('change', e => {
    autoBusqueda.marca = e.target.value
    filtrarAuto()
})

year.addEventListener('change', e => {
    autoBusqueda.year = parseInt(e.target.value)
    filtrarAuto()
})

minimo.addEventListener('change', e => {
    autoBusqueda.minPrice = e.target.value
    filtrarAuto()
})

maximo.addEventListener('change', e => {
    autoBusqueda.maxPrice = e.target.value
    filtrarAuto()
})

puertas.addEventListener('change', e => {
    autoBusqueda.puertas = parseInt(e.target.value)
    filtrarAuto()
})

transmision.addEventListener('change', e => {
    autoBusqueda.transmision = e.target.value
    filtrarAuto()
})

color.addEventListener('change', e => {
    autoBusqueda.color = e.target.value
    filtrarAuto()
})

// Funciones
function mostrarAutos(autos) {

    limpiarHTML()

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

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
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
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinPrice).filter(filtrarMaxPrice).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    mostrarAutos(resultado)
}

// Retorna objetos que cumplan con la condición
function filtrarMarca(auto) {
    const { marca } = autoBusqueda

    if (marca) {
        return auto.marca === marca
    }
    return auto
}
function filtrarYear(auto) {
    const { year } = autoBusqueda

    if (year) {
        return auto.year === year
    }
    return auto
}
function filtrarMinPrice(auto) {
    const { minPrice } = autoBusqueda

    if (minPrice) {
        return auto.precio >= minPrice
    }
    return auto
}
function filtrarMaxPrice(auto) {
    const { maxPrice } = autoBusqueda

    if (maxPrice) {
        return auto.precio <= maxPrice
    }
    return auto
}
function filtrarPuertas(auto) {
    const { puertas } = autoBusqueda

    if (puertas) {
        return auto.puertas === puertas
    }
    return auto
}
function filtrarTransmision(auto) {
    const { transmision } = autoBusqueda

    if (transmision) {
        return auto.transmision === transmision
    }
    return auto
}
function filtrarColor(auto) {
    const { color } = autoBusqueda

    if (color) {
        return auto.color === color
    }
    return auto
}
