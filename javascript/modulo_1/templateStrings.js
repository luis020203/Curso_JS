/*
LOS TEMPLATE STRINGS SON UNA MANERA MAS EFICIENTE Y RAPIDA DE MOSTRAR UN MENSAJE CON LOS VALORES DE LAS VARIABLES.
SE TRABAJA CON LAS COMILLAS INVERTIDAS `` PARA PODER TRABAJAR CON LAS VARIABLES EN UNA CADENA DE TEXTO
*/

let nombre = 'luis';
let pais = 'ecuador';
let ciudad = 'guayaquil';

console.log('La persona es ' + nombre + ' es de ' + pais);
console.log(`La persona es ${nombre} es de ${pais}/${ciudad}`)