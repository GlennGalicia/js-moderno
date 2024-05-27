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

    // agregar elementos al carrito de compra
    articulosCarrito = [...articulosCarrito, infoCurso]

    // poblar HTML
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

}

// limpiar el HTML del tbody
function cleanHTML() {

    // forma lenta
    carritoCompras.innerHTML = ''

    // forma rapida
    while (contenedorCarrito.firstChild)
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
}