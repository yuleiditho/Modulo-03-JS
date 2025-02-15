/*
Problema: Seguimiento de Libros
-Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.
*/

//Función para agregar libros al arreglo
function addBook(library, title, autor, rated){
    //Si el libro no existe, se inicializa un arreglo vacío
    if(!library[title]){
        library[title] = []; //objeto
    }
    // Push: agrega el libro al arreglo de la categoría
    library[title].push( {
            title: title,
            autor: autor,
            rated: rated
        });
}

//Función para imprimir 
function printData(library){
    console.log("Título\t\t\t\t Autor\t\t\t Rated");
    console.log("-------------------------------------------------------");
    
    for(let title in library){
        for(let book of library[title]){
             console.log(`${book.title}\t|${book.autor}\t | ${book.rated}`);
        }
    }
}

// Función para imprimir los datos de la biblioteca en formato tabla
function printDataTable(library) {
    let allBooks = [];
    for (let title in library) {
        allBooks = allBooks.concat(library[title]);
    }
    console.table(allBooks);
 }




let myLibrary = {}; //Inicializar el objeto de biblioteca 

//llamada de la función agregar libros
addBook(myLibrary, "Agua Roja ", "Trujillo, F.", "3/5");
addBook(myLibrary, "El visitante ", "King, S.    ", "3/5");
addBook(myLibrary, "La Prisión de Black Rock", "Trujillo, F.", "4/5");
addBook(myLibrary, "La Guerra de los Cielos ", "Trujillo, F.", "3/5");
addBook(myLibrary, "El visitante ", "Katzenbach, J.", "4/5");
//Llamada para imprimir 
printData(myLibrary);

printDataTable(myLibrary);
