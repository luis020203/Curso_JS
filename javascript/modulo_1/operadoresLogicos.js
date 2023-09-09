/* 
    OPERADORES LOGICOS
        && AND
        || OR 
        ! NOT

    OPERADORES DE COMPARACION:  DEVUELVEN VALOR TRUE O FALSE
        ==IGUAL QUE
        === IGUAL EN VALOR Y TIPO DE DATO
        != DIFERENTE
        !== DIFERENTE EN VALOR Y TIPO DE DATO
        < MENOR QUE
        > MAYOR QUE
        <= MENOR O IGUAL QUE
        >= MAYOR O IGUAL QUE


        ? OPERADOR TERNIARIO
*/

/*EJEMPLO 1 AND(&&)
VERIFICAR SI LA PERSONA PUEDE ENTRAR AL CONCIERTO, DEBE SER MAYOR DE EDAD Y DEBE TENER SU BOLETO.
MOSTRAR POR CONSOLA SI TIENE O NO EL ACCESO PERMITIDO.
*/
 let nombre = 'Luis';
 let edad = 20;
 let boleto = false;
 let permisoPadres = !false;
 //const permitirAcceso = edad >=18 && boleto;
 //console.log(`ACCESO PERMITIDO: ${permitirAcceso}`  );

/*EJEMPLO 1.2 OR(||)
DEL EJEMPLO ANTERIOR, AHORA VERIFICAR SI TIENE EL PERMISO DE LOS PADRES, SI TIENE EL PERMISO SE LE PERMITE EL ACCESO,
CASO CONTRARIO SE LE NIEGA LA ENTRADA AL CONCIERTO.
*/
const permitirAcceso = (edad >=18 && boleto) || (permisoPadres && boleto) ;
console.log(`ACCESO PERMITIDO: ${permitirAcceso}`  );
