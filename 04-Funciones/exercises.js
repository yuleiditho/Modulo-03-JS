//Palíndromo 
function compareArrays(value){
    let lowerCaseValue = value.toLowerCase().split(' ').join('');
    let reversedValue = '';

    lowerCaseValue.split('').forEach((char) => {
        reversedValue = char + reversedValue;
    });

    if(lowerCaseValue === reversedValue){
        return console.log("Es palíndromo:", value); 
    }else{
        return console.log("No es palíndromo:", value);
    }
}

compareArrays("Anita lava la tina");
compareArrays("Hoy es jueves");




//Números mayores

function numMayor(array, num){
    let arrayMayor = [];
    for(let element of array){
        let value = element;
        if(value > num){
            arrayMayor.push(value);
        }
    }

    return arrayMayor;
}

function printArray(array, num){
    console.log("\n-----------------");
    console.log("Exercise 2. Filtrar los números mayores de un número");
    console.log("Números mayores a", num, ":");


    for (const element of array) {
        console.log(element);
    }

    //console.log(array.join(", ")); //Imprimir en una sola línea el array
    
}

let arrayNumeros = [5, 12, 145, 23, 70, 23, 21, 3, 2, 45, 100];
let numFiltro = 12;
let numsMayor = numMayor(arrayNumeros, numFiltro);

printArray(numsMayor, numFiltro);


// Función arrow filtrado de un arreglo
const edades = [20, 23, 43, 58, 33, 28, 31, 18];
let age = 23; 
const mayoresDe = edades.filter(edad => edad > age);
console.log("\n--------------\nEdades mayores de", age,"son:", mayoresDe.join(", "));



function areaCirculo(radio){
    const PI = 3.1416;
    return radio*radio*PI;
}

let radio = 5;
console.log("\n-----------------");
console.log("Exercise 3. Área de un círculo");
console.log(`El Área del círculo con radio: ${radio} es ${areaCirculo(radio).toFixed(2)} `);


// Funciones como objetos de 1era clase

let multiplicar = (x, y) => x * y;
let suma = (num1, num2) => num1 + num2;
let division = (num, num2) => num / num2;
let resta = (num1, num2) => num1 - num2 ;

let num = 12;
let num2 = 2;


console.log("\n-----------------");
console.log(`Suma ${num} + ${num2} = ${suma(num, num2)} `);
console.log(`Resta ${num} - ${num2} = ${resta(num, num2)} `);
console.log(`Multiplicación ${num} x ${num2} = ${multiplicar(num, num2)} `);
console.log(`División ${num} / ${num2} = ${division(num, num2)} `);





