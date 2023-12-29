// Prevenir event bubbling con delegation

document.querySelector('.card').addEventListener('click', evt => {

    if (evt.target.classList.contains('titulo')) {
        console.log('Diste click en el titulo');
    }

    if (evt.target.classList.contains('precio')) {
        console.log('Diste click en el precio');
    }

    if (evt.target.classList.contains('card')) {
        console.log('Diste click en el Card');
    }
})

