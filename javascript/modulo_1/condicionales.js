/*CONDICIONALES
Sentencia que permite validar una condicion
 OPERADORES LOGICOS
    && AND
    || OR 
    ! NOT

 OPERADORES DE COMPARACION:
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

//ESTRUCTURA
    if(true){
        //codigo a ejecutar si la condicion se cumple
    }else{
        //codigo a ejecutar si la condicion no se cumple
    };

/*EJEMPLO 1--- 
PARA ENTRAR AL CONCIERTO EL USUARIO DEBE SER MAYOR DE EDAD Y CONTAR CON SU TICKET.
SI RESULTA SER MENOR DE EDAD DEBE CONTAR CON EL PERMISO DE SUS PADRES PARA PODER ENTRAR CASO CONTRARIO SE LE NIEGA EL ACCESO.
MOSTRAR POR CONSOLA CADA ESCENARIO ESPECIFICADO
*/
    const usuario = {
        edad: 18,
        pais: 'belgica',
        ticket: true,
        permiso: true,
    };

//CONDICION NORMAL 
                                                                                   //SI ES MAYOR DE EDAD Y TIENE SU TICKET PASA
    if((usuario.edad>=18 && usuario.ticket) || (usuario.permiso && usuario.ticket) ){  //SI ES MENOR DE EDAD, TIENE TICKET Y PERMISO PASA
        console.log('acceso concedido');
    }else{
        console.log('acceso denegado');           //SI ES MAYOR DE EDAD PERO NO TIENE TICKET NO PASA
    }                                             //SI ES MENOR DE EDAD Y NO TIENE PERMISO NO PASA(NADIE PASA SIN TICKET)                                                                                                                           



//CONDICION ANIDADA
    if(usuario.edad >= 18){  //SI ES MAYOR DE EDAD Y
        if(usuario.ticket){ //TIENE SU TICKET
            console.log('Mayor de edad y tiene su ticket');//SE LE PERMITE PASAR
        }else{
            console.log('Mayor de edad pero no tiene un ticket');//ES MAYOR DE EDAD PERO NO TIENE TICKET SE LE NIEGA EL ACCESO
        }
    }if(usuario.edad < 18){ //SI ES MENOR DE EDAD
        if(usuario.ticket){ //CUENTA CON TICKET Y
            if(usuario.permiso){//CUENTA CON EL PERMISO
                console.log('es menor de edad, tiene su ticket y cuenta con el permiso de sus padres');//SE LE CONCEDE EL ACCESO
            }else{//SI NO TIENE EL PERMISO SE LE NIEGA EL ACCESO
                console.log('no cuenta con el permiso de sus padres');
            }
        }else{//SI NO TIENE EL TICKET SE LE NIEGA EL ACCESO
            console.log('es menor de edad y no tiene ticket');
        }
    }

//ELSE IF
    if(usuario.pais == 'Ecuador'){
        console.log('Es ecuatoriano');
    }else if(usuario.pais == 'Colombia'){
        console.log('Es colombiano');
    }else if(usuario.pais == 'España'){
        console.log('Es español');
    }else{
        console.log('El usuario es de otro pais');
    }