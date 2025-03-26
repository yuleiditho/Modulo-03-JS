/*
Problema: Clasificación de Frutas
Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.
*/

// Función para clasificar y contar las frutas por categorías
const countFruits = (array) => {
    // Objeto que contiene las listas de frutas clasificadas por categorías
    const clasificacionFrutas = {
        acidas: ["kiwi", "limón", "pomelo", "naranja", "manzana", "uva", "arándano", "piña"],
        semiacidas: ["fresa", "membrillo", "níspero", "ciruela", "melocotón", "mango", "mandarina", "frambuesa"],
        neutras: ["coco", "aguacate", "aceituna", "almendra", "avellana", "cacahuate", "nuez"],
        dulces: ["plátano", "cereza", "higo", "melón", "sandía", "pera", "granada", "chirimoya"]
    };

    // Objeto que almacena los contadores de cada categoría de fruta
    const contadorCategorias = {
        acidas: { cantidad: 0, frutas: [] },
        semiacidas: { cantidad: 0, frutas: [] },
        neutras: { cantidad: 0, frutas: [] },
        dulces: { cantidad: 0, frutas: [] }
    };

    // Recorrer el array de frutas para clasificar y contar
    array.forEach((fruta) => {
        let tipo = Object.keys(clasificacionFrutas).find((categoria) =>
            clasificacionFrutas[categoria].includes(fruta)
        );

        // Si el tipo es válido, incrementa el contador de la categoría
        if (tipo) {
            contadorCategorias[tipo].cantidad++;
            contadorCategorias[tipo].frutas.push(fruta);
        }
    });

    return contadorCategorias;
};

// Función para imprimir los datos en formato tabla
const impressData = (categorias) => {
    console.log("Categoría\t\t| Cantidad\t| Frutas");
    console.log("------------------------------------------------------");

    Object.entries(categorias).forEach(([categoria, datos]) => {
        console.log(`${categoria.padEnd(15)} | ${datos.cantidad}\t\t| ${datos.frutas.join(", ")}`);
    });
};

// Arreglo llamado frutas con varios tipos de frutas
const frutas = ["sandía", "almendra", "kiwi", "fresa", "ciruela", "naranja", "fresa", "higo", "nuez", "melón", "pera", "naranja", "melocotón", "mango", "uva", "membrillo"];
const contadorCategorias = countFruits(frutas);
impressData(contadorCategorias);
//console.table(contadorCategorias); // Imprime en formato tabla
