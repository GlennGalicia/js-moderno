const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']

console.table(meses)

meses[0] = 'nuevo mes'
meses[10] = 'ultimo mes'

console.table(meses)