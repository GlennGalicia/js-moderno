// Modificar textos e imagenes con JS

const encabezadoTitulo = document.querySelector('.contenido-hero h1')

console.log(encabezadoTitulo.textContent);
console.log(encabezadoTitulo.innerHTML);

document.querySelector('.contenido-hero h1').textContent = "Nuevo titulo modificado"

const img = document.querySelector('.card img')
img.src = 'img/hacer2.jpg'