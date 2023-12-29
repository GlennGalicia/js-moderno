// Eventos al dar scroll con el mouse

window.addEventListener('scroll', scrolling)

function scrolling(evt) {
    // const scrollY = window.scrollY
    // console.log(scrollY);

    const premium = document.querySelector('.premium')
    const ubicacion = premium.getBoundingClientRect()
    // console.log(ubicacion);

    if (ubicacion.top < 784) {
        console.log('El elemento ya esta visible')
    } else {
        console.log('Aún no, da más scroll');
    }
}