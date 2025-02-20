/*
Problema: Crear objeto a partir de un Libro

Crear un objeto libro que contenga varias propiedades 
y un método para imprimir la información básica del libro.

*/

class Book{
    constructor(title, author, year, state){
        this.title = title;
        this.author = author;
        this.year = year;
        this.state = state;
        this.chapters = []; //Inicializamos la lista de capítulos vacía
    }

    descriptionBook(){
        console.log(`Libro titulado: ${this.title}, escrito por: ${this.author} en el año: ${this.year} el estado es: ${this.state} `);
    }

    addChapter(chapter){
        this.chapters.push(chapter);
        console.log(`---------------------\nAgregado: ${chapter} al libro: ${this.title}`);
        this.showChapter();
    }

    showChapter(){
        console.log(`Libro: ${this.title}\nChapters: ${this.chapters.join(", ")} \n--------------------\n`);
    }

    deleteChapter(chapter){
        let index = this.chapters.indexOf(chapter);
        if(index > -1){
            this.chapters.splice(index, 1); 
            console.log(`-------------------\nActualización de: ${this.title}, ${chapter} Eliminado `);
            
        }else{
            console.log(`--------------------\nLibro: ${this.title} - No existe ${chapter}`);
        }
        this.showChapter();
       
    }
}

// Ejemplo de uso creando varios libros individualmente
let book1 = new Book("Agua Roja", "Fernando Trujillo", 2015, "disponible");
let book2 = new Book("La Guerra de los Cielos", "Fernando Trujillo", 2018, "prestado");
let book3 = new Book("El visitante", "Stephen King", 2018, "disponible");

// Descripción de cada libro
book1.descriptionBook();
book2.descriptionBook();
book3.descriptionBook();

// Agregando capítulos a cada libro
book1.addChapter("Capítulo 1");
book1.addChapter("Capítulo 2");
book1.addChapter("Capítulo 3");

book2.addChapter("Capítulo 1");
book2.addChapter("Capítulo 2");

book3.addChapter("Capítulo 1");
book3.addChapter("Capítulo 2");


// Eliminando capítulos de cada libro
book1.deleteChapter("Capítulo 2");
book2.deleteChapter("Capítulo 2");
book3.deleteChapter("Capítulo 10");



 
