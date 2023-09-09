/*TIPOS DE DATOS
    string -- cadenas de Texto 
    number -- numero
    boolean -- booleanos(verdadero o falso)
    object -- objeto
    arrays -- arreglos
    function -- funciones
    null -- Valor nulo-- Normalmente lo usamos cuando queremos especificar que un valor es nulo
    undefined -- Valor sin definir
*/

//TEXTO
    let text = 'mi texto';
    let nombre = '';
    let libro = '"El libro de la selva"';//---->Escape de comillas
    console.log(nombre)
    console.log(libro);
    

//NUMEROS
    let number = 10;
    let negativo = -1;
    let decimal = 1.20;
    let decimalNegativo = -3.90;
    console.log(decimalNegativo);

//BOOLEANOS-----NORMALMENTE SE LO TRABAJA CON CONDICIONES, PRESENTADO ESCENARIOS DONDE PUEDE SER POSITIVO O NEGATIVO NUESTRA CONDICION
    let usersConnect = true;
    usersConnect = false;
    console.log(usersConnect)
        //EJEMPLO PRACTICO
        const password = 'luis0202';
        const passwordInsert = 'luis0201';
        let passConfirm = password==passwordInsert;
        if(passConfirm===true){
            console.log('acceso concedido');
        }else{
            console.log('acceso denegado');
        }

        //EJEMPLO 2-----TAMBIEN SE LO USA CON OPERADORES DE COMPARACION
        let comparacion = 9 > 4;
        console.log(comparacion);

//ARRAYS O ARREGLOS
    let miLista = ['tomate', 'cebolla', 'pimiento'];
    console.log(miLista);

    let lista2 = [10, 'luis', true, {color: 'rojo'}, [1,'jose']];
    console.log(lista2)

//OBJETOS---GUARDA INFORMACION EN PAREJAS, CLAVE:VALOR / PROPIEDAD:VALOR
    let persona = {   
        nombre:'luis',    //PROPIEDAD NOMBRE : CLAVE NOMBRE_PERSONA
        edad: 20,
        carro:{
            marca: 'DongFeng',
            año: 2016,
            modelo: 'C37',
            color:'dorado'
        }
    };
    console.log(persona.carro.marca)

//FUNCIONES----SON BLOQUES DE CODIGO QUE SE PUEDEN REUTILIZAR
    function hola(){
        console.log('hola');
    }
    hola();

    
    function suma(num1,num2){
        let resultado = num1+num2;
        console.log(resultado)
    }
    suma(4,4);
    
//UNDEFINED--NO SE RECOMIENDA TENER VARIABLES SIN DEFINIR
let variable;
console.log(variable)

/*EJERCICIOS PRACTICOS
CREAR UNA LISTA DE ATRIBUTOS SUYOS Y PRESENTARLOS POR CONSOLA
*/

/*EJERCICIO 2
CREAR UN OBJETO, ESTE OBJETO DEBE GUARDAR LAS CARACTERISTICAS DE UNA PELICULA, YA SEA TITULO, GENERO, DURACION, ETC
*/ 

/*EJERCICIO 3
CREAR UNA FUNCION QUE ME PERMITA SUMAR 2 NUMEROS, PRESENTAR EL RESULTADO POR CONSOLA
*/ 

/*EJERCICIO 4
CREA UNA FUNCION QUE CALCULE EL PRECIO TOTAL DE UN PRODUCTO A PARTIR DE SU PRECIO BASICO
*/

