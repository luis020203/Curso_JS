/*VARIABLES
    Espacio que se guarda en memoria
DECLARACION DE VARIABLES
    var -- Tiene problemas con el alcance de bloques, se recomienda usar let y const
    let -- el valor dentro de la variable puede ser cambiado
    const -- el valor dentro de la variable NO puede ser cambiado
TIPOS DE DATOS QUE PODEMOS GUARDAR EN VARIABLES:
    string -- cadenas de Texto 
    number -- numero
    boolean -- booleanos(verdadero o falso)
    object -- objeto
    function -- funciones
    null -- Valor nulo
    undefined -- Valor sin definir
*/
var edad = 20;

let nombre = 'luis';

const fechaNacimiento = '02-02-03';
console.log("Edad: "+edad + " fechaNacimiento: " + fechaNacimiento + " Nombre: " + nombre);//---->Concatenacion

let pais, ciudad, sector;
pais = 'ecuador';
ciudad = 'quito';
sector = 'sur;'
console.log(pais);

console.log(`Nombre:${nombre} fecha de nacimiento:${fechaNacimiento} pais:${pais}`);//---TemplateStings: Se trabaja con BackTips, no con comillas

let numOne = 10;
let numTwo = 5;

let sum = numOne + numTwo;
console.log(sum);


/*EJERCICIO 1
PRESENTAR POR CONSOLA SU NOMBRE, APELLIDO, EDAD Y NACIONALIDAD CON UN SALUDO INCLUIDO
*/

/*EJERCICIO 2
SUMAR, RESTAR, MULTIPLICAR Y DIVIDIR DOS NUMEROS Y PRESENTAR EL RESULTADO POR CONSOLA
*/

/*EJERCICIO 3
CREAR UN CORREO Y UNA CONTRASEÑA, EL CORREO NO PUEDE CAMBIAR UNA VES ASIGNADO, LA CONTRASEÑA NO SERA CONSTANTE
*/