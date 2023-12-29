// Eventos con el mouse

// Registrar un evento para la navegación
const nav = document.querySelector('.navegacion')

nav.addEventListener('click', () => {
    console.log('Click en el nav');
})

nav.addEventListener('mouseenter', () => {
    console.log('Entrando con el mouse a la navegación');
    nav.style.backgroundColor = 'white'
})

nav.addEventListener('mouseout', () => {
    console.log('Saliendo con el mouse de la navegación');
    nav.style.backgroundColor = 'transparent'
})