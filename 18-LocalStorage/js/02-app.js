const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoString = localStorage.getItem('producto');
console.log(JSON.parse(productoString));

const mesesString = localStorage.getItem('meses');
console.log(JSON.parse(mesesString));