//OBJETOS 
const persona = {
    nombre: 'luis', 
    edad: 20, 
    correo:'juniorveinte@gmail.com',
    subscripcion:{
        canal:true,
        web:false
    },
    coloresFavoritos: ['Negro', 'rojo'],
    saludo: function(){
        console.log(2+2);
    },
};
console.log(persona.edad);
console.log(persona['edad']);

let correo = 'subscripcion';
console.log(persona[correo]);

persona.pais = 'Ecuador';     ///AGREGO UN NUEVO OBJETO
persona.pais = 'España';

console.log(persona.pais);

persona.saludo(); //ACCEDEMOS AL METODO(FUNCION DEL OBJETO)





