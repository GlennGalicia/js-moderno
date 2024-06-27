localStorage.removeItem('nombre');

// actualiza el valor de un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray.push('Abril');
localStorage.setItem('meses', JSON.stringify(mesesArray));

// limpiar todo el localStorage
localStorage.clear();