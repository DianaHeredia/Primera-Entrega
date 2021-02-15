const {cursos, imprimirDatos} = require ('./datos');
const {argv, opciones} = require('./inscripcion')
const fs = require('fs');


if(argv.id == null){
    console.log(imprimirDatos());
}else{
    let argumentos = cursos.find(argumentos => argumentos.id == argv.id);
    var infoCurso;
    let cursoElegido = (idE) => {
        if(argumentos){
            for(i=0; i<=2; i++){
                if(cursos[i].id == idE){
                    (function(ind){
                        infoCurso = 'Curso ' + cursos[ind].id + ': ' + cursos[ind].nombre + ', tiene una duración de ' + cursos[ind].duracion + ' horas, y un precio de $' + cursos[ind].precio;
                    }) (i);
                }
            }
        }
    }
    cursoElegido(argv.id);

    let crearArchivo = (estudiante) =>{
        texto= 'NUEVO ESTUDIANTE \n Nombre: ' + argv.nombre + '\n Cédula: ' + argv.cedula + 
                '\n El estudiante se matriculó en el ' + infoCurso;
        fs.writeFile('matricula.txt', texto, (err) =>{
            if (argv.id>3 || argv.id<1) {
                (console.log('El ID seleccionado no corresponde a ningún curso, favor seleccionar otro: \n' + imprimirDatos()));
            }else{
                console.log('Se ha creado el archivo');
            }
        
        })
    }

    crearArchivo(argv);
}
