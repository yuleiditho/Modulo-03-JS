/*
Ejercicio Práctico:
-Crea un ciclo while que cuente del 10 al 1 y lo imprima en la consola.
-Modifica el ciclo para que imprima solo los números pares.
*/

function impressData(){
    let count = 1;
    while(count <= 10){
        if(count%2 === 0){
            console.log(count);
        }
        count++;       
    }
}

impressData();


/*
Ejercicios Ciclo FOR: para Resolver
Contador Inverso: Crea un programa que cuente del 10 al 1 y lo imprima en la consola.
Suma de Pares: Modifica el ciclo para que solo sume los números pares del 1 al 20 y muestre el resultado.
*/


function countDown(){
    console.log('\nContador Inverso: ')
    for(let i=10; i>0; i--){
        console.log(i);
    }
}

function sumPares(){
    let sumaPares=0;
    for(let i=1; i<=20; i++){
        if(i%2 === 0){
           sumaPares+= i;
        }
    }
    return sumaPares;
}

countDown();
let resultado = sumPares();
console.log('\nSuma de Pares', resultado);




//1. Crear un Array: Crea un array llamado colores con al menos cuatro colores diferentes.
let colores = ['rojo', 'verde', 'azul', 'amarillo'];

//2. Imprimir el Segundo Color: Imprime el segundo color del array.
console.log(colores[1]); // Imprime: verde

//3. Modificar el Tercer Color: Cambia el tercer color a otro color de tu elección.
colores[2] = 'naranja'; // Cambia 'azul' a 'naranja'

//4. Añadir un Nuevo Color: Añade un nuevo color al final del array.
colores.push('violeta');

//5. Eliminar el Primer Color: Elimina el primer color del array y muestra el resultado.
colores.shift();

colores.pop();

console.log('Cantidad de colores =', colores.length);
console.log(colores); // Muestra el array modificado
