// Eliminar elementos en el DOM

const a = document.querySelector('a')
a.remove()

// Eliminar elemento desde el padre
const nav = document.querySelector('.navegacion')
nav.removeChild(nav.children[2])