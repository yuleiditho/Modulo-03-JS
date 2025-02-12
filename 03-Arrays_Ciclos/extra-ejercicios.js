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

let contador=0;

/* do{
    contador = parseInt(prompt("Ingresa un no. mayor a 20: "));
}while(contador <=20);

alert("El número es: " + contador);
 */

let numUser = 0;

numUser = parseInt(prompt("Ingresa un número: "));
for(let i=1; i<=10; i++){
    console.log(numUser, '*', i, '=', i*numUser);
}

// Contar los dígitos de un número


// Obtener la suma de los dígitos de un número

let sumNum = prompt("Ingresa un número: ");
let suma = 0; // Inicializar la variable suma en 0

for (let i = 0; i < sumNum.length; i++) {
    // Asegurarse de que cada carácter sea un dígito antes de convertirlo a número
    if (!isNaN(parseInt(sumNum[i]))) {
        suma += parseInt(sumNum[i]);
    }
}

console.log("La suma es:", suma);


//Contador 
function mostrarDigitosFor(numero) {
    let numStr = numero.toString(); // Convertimos el número a string
    console.log(`Los dígitos de ${numero} son:`);
    for (let i = 0; i < numStr.length; i++) {
        console.log(numStr[i]);
    }
}
// Llamar a la función con el número deseado
mostrarDigitosFor(960913);
//Suma de digitos 
function sumarDigitos(numero) {
    let numStr = numero.toString(); // Convertimos el número a string
    let suma = 0;
    for (let i = 0; i < numStr.length; i++) {
        suma += parseInt(numStr[i]); // Convertimos cada carácter a número y lo sumamos
    }
    console.log(`La suma de los dígitos de ${numero} es: ${suma}`);
}
// Llamar a la función con el número deseado
sumarDigitos(960913);


//contar digitos de un numero
let numero = "aaa1122aa22";
let numeros = "1234567890"
let i = 0;
contador =0;
resultado=0;
while (i < numero.length){
    if (numeros.includes(numero[i])) {
        contador++;
        //suma de los digitos de un numero
        resultado += parseInt(numero[i]);
    }
    i++;
}
console.log("Tiene : " + contador + " digitos");
console.log("El resultado es : " + resultado);