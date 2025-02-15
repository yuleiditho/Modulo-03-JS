// Operaciones básicas

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

// Llamadas a las funciones
console.log("Suma: " + sumar(5, 3));
console.log("Resta: " + restar(5, 3));
console.log("Multiplicación: " + multiplicar(5, 3));
console.log("División: " + dividir(5, 0));


//Conversor de Temperaturas

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Llamadas a las funciones

console.log("20°C en Fahrenheit es: " + celsiusAFahrenheit(20));
console.log("68°F en Celsius es: " + fahrenheitACelsius(68));


