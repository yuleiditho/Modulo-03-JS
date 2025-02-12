/*Problem 2.0 Contador de Frutas
Clasifica las frutas, asigna un precio aleatorio a cada tipo de fruta y
calcula el costo total basado en la cantidad y el precio de cada fruta
*/

// Función para generar precios aleatorios
function generarPrecioAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para contar las frutas y asignar precios aleatorios
function countFruits(array){
    let contadorFrutas = {}; // Crear un objeto para almacenar la cantidad de cada tipo de fruta
    
    for(let i in array){
        let fruta = array[i];
        if(contadorFrutas[fruta]){
            contadorFrutas[fruta].cantidad++;
        }else {
            contadorFrutas[fruta] = {
                cantidad: 1,
                precio: generarPrecioAleatorio(10, 30),
            };
        }
    }

    for(let i in contadorFrutas){
        contadorFrutas[i].total = contadorFrutas[i].cantidad * contadorFrutas[i].precio;
    }

    return contadorFrutas;
}

function impressData(array){
    console.log("Elemento\t| Cantidad\t| Precio\t| Total");
    console.log("----------------------------------------------");
    for (let element in array) {
        console.log(`${element}\t\t| ${array[element].cantidad}\t\t\t| ${array[element].precio}\t\t | ${array[element].total}`);
    }
}

// Declarar un arreglo llamado frutas con varios tipos de frutas
let frutas = ["manzana", "fresa", "manzana", "naranja", "fresa", "uvas", "manzana", "pera", "naranja", "uvas", "guayaba"];
let contadorFrutas = countFruits(frutas); 
impressData(contadorFrutas);
console.table(countFruits(frutas));
