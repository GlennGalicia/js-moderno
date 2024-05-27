// Variables
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')

registarEventListeners()

function registarEventListeners() {
    // Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso)
}

// Funciones

function agregarCurso(e) {

    e.preventDefault()

    if (e.target.classList.contains('agregar-carrito')) {
        leerCurso(e.target.parentElement.parentElement)
    }
}

function leerCurso(curso) {
    console.log(curso)

    const infoCurso = {
        img: curso.querySelector('img').src,
        title: curso.querySelector('h4').textContent,
        price: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }

    console.log(infoCurso)
}