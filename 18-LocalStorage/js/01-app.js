localStorage.setItem('nombre', 'Glenn Galicia');

const producto = {
    'nombre': 'Monitor 24 Pulgadas',
    'precio': 300
}

const meses = ['Enero', 'Febrero', 'Marzo'];

localStorage.setItem('producto', JSON.stringify(producto));
localStorage.setItem('meses', JSON.stringify(meses));