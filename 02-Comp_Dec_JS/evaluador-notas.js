//Programa que evalua notas de un estudiante y genera un mensaje personalizado

function evaluarAlumno(nota){
    //Validar que la nota esté en el rango de 0 a 100
    if (nota >= 0 && nota <= 100){
        console.log("El alumno obtuvo una nota de: " + nota);
        if(nota >= 90){
            console.log("Excelente");
        }else if(nota >= 75 && nota <= 89){
            console.log("Bien");   
        }else if(nota >= 60 && nota <= 74){
            console.log("Suficiente");
        }else{
            console.log("No aprobado");
        }
    }else {
        console.log("La nota es inválida: " + nota);
    }
}


//Ejecución de la función con diferentes notas
let nota1 = 45;
evaluarAlumno(nota1);

let nota2 = 74;
evaluarAlumno(nota2);

let nota3 = -50;
evaluarAlumno(nota3);

//Generar una nota aleatoria y evaluarla
let notaAleatoria = Math.floor(Math.random() * 101);
evaluarAlumno(notaAleatoria);
