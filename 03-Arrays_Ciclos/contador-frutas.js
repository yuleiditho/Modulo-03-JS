/*
Problema: Clasificación de Frutas
Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.
*/

//Función para contar las frutas con el uso del Ciclo For
function countFruits(array){
    let contadorFrutas = {}; // Objeto para almacenar la cantidad de cada tipo de fruta
    for(let i in array){
        let fruta = array[i]; // Obtener la fruta actual del arreglo
        if(contadorFrutas[fruta]){  // IF: la fruta ya existe en el objeto
            contadorFrutas[fruta]++; // Incrementa el contador de esa fruta
        }else{
            contadorFrutas[fruta] = 1; // Se inicializa el contador de esa fruta 
        }
    }
    return contadorFrutas; // Devuelve el objeto con el conteo de frutas
}

//Función para contar las frutas con el uso del Ciclo While
function countItems(array){
    let contadorItems = {};
    let i = 0;
    while( i < array.length){
        let count = array[i];
        if(contadorItems[count]){
            contadorItems[count]++;
        }else{
            contadorItems[count] = 1;
        }
        i++;
    }
    return contadorItems;
}


//Función para imprimir los datos en la consola
function impressData(array){
    for (let element in array) {
        console.log(`${element}\t\t| ${array[element]}`);
    }
} 

// Arreglo llamado frutas con varios tipos de frutas
let frutas = ["manzana", "fresa", "manzana", "naranja", "fresa", "uvas", "manzana", "pera", "naranja", "uvas", "guayaba"];
let contadorFrutas = countFruits(frutas); //Uso del ciclo for
impressData(contadorFrutas);
console.table(countFruits(frutas)); //Imprime en formato tabla 


let frutas2 =["sandía", "piña", "manzana", "mango", "pera", "limon", "fresa", "manzana", "piña", "mango", "mango", "pera", "fresa", "fresa"];
let contadorItems = countItems(frutas2); //Uso del ciclo While
impressData(contadorItems);
console.table(countItems(frutas2));

