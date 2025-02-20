/* Objeto: Representan estructuras de datos que agrupan
información relacionada, es un conjunto de pares CLAVE - VALOR

Clave: es una cadena que actúa como un identificador 
Valor: puede ser de cualquier tipo, datos primitivos y complejos

Permiten organizar y encapsular información

*/

/*
1) Sintaxís de objeto literal: consiste en encerrar una lista de propiedades entre {}
   Método es intuitivo y directo, para objetos simples y estáticos
   Invocar funciones
*/ 

const persona = {
    name: "Anie",
    age: 30,
    worked: "Developer Jr."
};

/*
2) Constructor: Se puede crear un objeto vacío y luego añadirle propiedades 
    y métodos de forma programática
    - Facilitan la creación de objetos en bucles o cuando se trabaja con datos 
      que provienen de fuentes externas -> APIS
*/

const coche = new Object();
coche.marca = "Toyota",
coche.modelo = "Corolla";
coche.anio = 2020;


/*  
3) ES6 Clases: Podemos establecer múltiples instancias del mismo tipo de objeto
                cada uno con sus propiedades y métodos
     Permiten: la herencia, se pueden crear clases derivadas que heredan 
                características de una clase base
    Enfoque modular y escalable
*/

class Animal{
    constructor(especie, sonido){
        this.especie = especie; //this. Se refiere al objeto que contiene el método
        this.sonido = sonido;
    }
    hacerSonido(){
        console.log(this.sonido);
        
    }
}

const dog = new Animal("Perro", "Guau");
//dog.hacerSonido();

class Auto{
    constructor(marca, modelo, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    mostrarDatos(){
        console.log('Marca:', this.marca, '| Modelo:', this.modelo, '| Año:', this.anio);
    }
}

class Library{
    constructor(titulo, autor, rated){
        this.titulo = titulo;
        this.tipo = autor;
        this.rated = rated;
    }

    isAvailable(){
        console.log('Libros disponible:', this.titulo, "| Autor:", this.autor);
    }
}



const auto1 = new Auto("Volkswagen", "Jetta", "2015");
auto1.mostrarDatos();

const libro1 = new Library("Agua Roja", "Trujillo, F.", "5/5");
libro1.isAvailable();

// Acceso a Propiedades

console.log(persona.name); //1) Notación de punto: 

console.log(persona["worked"]); //2) Notación de corchetes: Nos permiten acceder a propiedades usando cadenas


//Modificación de propiedades
console.log('Nombre:', persona.name, 'Edad:', persona.age);
persona.age = 18;
console.log('Nombre:', persona.name, '| Edad Modificada:', persona.age);

//Agregar las propiedades
persona.email = "anie@example.com";
console.log('Nombre:', persona.name, '| Email:', persona.email);


// Métodos de Objetos
const calculadora = {
    sumar: function(a, b) {
        return a + b;
    },
    restar: function(a, b) {
        return a - b;
    }
};

console.log(calculadora.sumar(5, 3)); // 8

