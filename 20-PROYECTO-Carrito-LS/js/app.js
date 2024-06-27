// Variables
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')
let articulosCarrito = []

registarEventListeners()

function registarEventListeners() {

    // cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', identificarCursos)

    // mostrar los cursos de LocalStorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || []
        showShoppingCart()
    })
    // eliminar curso del carrito
    carrito.addEventListener('click', deleteCurso)

    // vaciar carrito de compras
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []
        cleanHTML()
    })
}

// Funciones

function identificarCursos(e) {

    e.preventDefault()

    if (e.target.classList.contains('agregar-carrito')) {
        addCourse(e.target.parentElement.parentElement)
    }
}

function addCourse(curso) {

    // crear un objeto con el contenido del curso actual
    const infoCurso = {
        img: curso.querySelector('img').src,
        title: curso.querySelector('h4').textContent,
        price: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        count: 1
    }

    // revisar si curso existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
    if (existe) {
        // actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.count++ // retorna objeto actualizado
                return curso
            } else {
                return curso // retirba los objetos que no son duplicados
            }
        })

        articulosCarrito = [...cursos]
    } else {
        // añadimos al carrito
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    // poblar HTML
    showShoppingCart()
}

// eleminar curso del carrito
function deleteCurso(e) {
    const cursoId = e.target.getAttribute('data-id')

    // eliminar curso del carrito
    articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)

    showShoppingCart()
}

// Muestra carrito de compras en HTML
function showShoppingCart() {

    // limpiar HTML
    cleanHTML()

    // recorre el HTML
    articulosCarrito.forEach(curso => {

        // destructuring
        const { img, title, price, count, id } = curso

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${img}" width=100>
        </td>
        <td>
            ${title}
        </td>
        <td>
            ${price}
        </td>
        <td>
            ${count}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id=${id}> x </a>
        </td>
        `
        contenedorCarrito.appendChild(row)
    })
    sincronizarStorage()
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
}

// limpiar el HTML del tbody
function cleanHTML() {

    // forma lenta
    //carritoCompras.innerHTML = ''

    // forma rapida
    while (contenedorCarrito.firstChild)
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
}