/*
Problema: Clasificación de Frutas
Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.
*/

//Función para clasificar y contar las frutas por categorías
function countFruits(array){
    //Objeto que contiene las listas de frutas clasificadas por categorías
    let clasificacionFrutas = {
        acidas: ["kimi", "limón", "pomelo", "naranja", "manzana", "uva", "arándano", "piña"],
        semiacidas: ["fresa", "membrillo", "níspero", "ciruela", "melocotón", "mango", "mandarina", "frambuesa"],
        neutras: ["coco", "aguacate", "aceituna","almendra", "avellana", "cacahuate", "nuez"],
        dulces: ["plátano", "cereza", "higo", "melón", "sandía", "pera", "granada", "chirimaya"]
    };

    //Objeto que almacena los contadores de cada categoría de fruta
    let contadorCategorias = {
        acidas: {cantidad:0, frutas:[]},
        semiacidas: {cantidad:0, frutas:[]},
        neutras: {cantidad:0, frutas:[]},
        dulces: {cantidad:0, frutas:[]},
    };
    
    //Recorrer el array de frutas para clasificar y contar
    for(let i in array){
        let fruta = array[i]; // Obtener la fruta actual
        let tipo = null;      // Inicializar la variable tipo

        //Determinar el tipo de fruta
        for(let valor in clasificacionFrutas){
            if(clasificacionFrutas[valor].includes(fruta)) {
                tipo = valor;       //Asignar la categoría que corresponde a la fruta
                break;              //Detiene el bucle una vez que encuentra la categoría de la fruta
            }
        }

        //Si el tipo es válido incrementa el contador de la categoría
        if(tipo){
            contadorCategorias[tipo].cantidad++;
            contadorCategorias[tipo].frutas.push(fruta);
        }
        
    }
    return contadorCategorias; 
}


// Función para imprimir los datos en formato tabla
function impressData(array) {
    console.log("Categoría\t\t| Cantidad\t| Frutas");
    console.log("------------------------------------------------------");

    for (let element in array) {
        console.log(`${element}\t\t\t| ${array[element].cantidad}\t\t\t| ${array[element].frutas.join(", ")}`);
    }
}


// Arreglo llamado frutas con varios tipos de frutas
let frutas = ["sandia","almendra", "kiwi", "fresa", "ciruela", "naranja", "fresa", "higo", "nuez", "melón", "pera", "naranja", "melocotón", "mango", "uva", "membrillo"];
let contadorCategorias = countFruits(frutas); 
impressData(contadorCategorias);
console.table(contadorCategorias); //Imprime en formato tabla 


