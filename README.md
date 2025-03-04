# Módulo 3: Javascript

**JavaScript** es el lenguaje de programación que hace que las páginas web sean interactivas. Desde efectos visuales y animaciones hasta la gestión de datos y la interacción con el usuario, JavaScript es el motor que impulsa la web moderna.

## Contenido del Módulo

### Clase 01 - Introducción a JS

<details>
  <summary>Datos primitivos</summary>

  <br>Son los tipos de datos más simples y directos que existen en el lenguaje.

  *   **Números:** Representan números, tanto enteros como decimales.
  *   **Cadenas (Strings):** Representan texto.
  *   **Booleanos (Booleans):** Representan valores lógicos: `true` (verdadero) o `false` (falso). Se utilizan para tomar decisiones en el código.
  *   **Null:** Es un valor asignado explícitamente a una variable para indicar que no tiene un valor.
  *   **Undefined:** Representa una variable a la que no se le ha asignado un valor.
  *   **BigInt:** Se utiliza para representar números enteros muy grandes.
  *   **Symbol:** Se utiliza para crear identificadores únicos.

  [Enlace al código](https://github.com/yuleiditho/Modulo-03-JS/blob/main/01-%20Intro%20JS/tipo-de-datos.js)<br>

  ![Código de la clase 01](media/class-01.png)
  
</details>

### Clase 02 - Comparaciones y Decisiones

<details>
  <summary>Evaluador de Notas con Mensajes Personalizados</summary>

   <br>Crear un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota.

  **Objetivos:**

  *   Declaración de variables.
  *   Uso de condicionales `if`, `else if` y `else`.
  *   Uso de operadores de comparación (`<`, `>`, `<=`, `>=`) para determinar el rango de la nota.
  *   Impresión de mensajes personalizados en la consola.


  [Enlace al código](https://github.com/yuleiditho/Modulo-03-JS/blob/main/02-Comp_Dec_JS/evaluador-notas.js)<br>

  ![Código](media/class-02.png)

</details>

### Clase 03 - Ciclos y Arreglos

<details>
  <summary>Problema: Clasificación de Frutas</summary>

   <br>Crear un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

  **Objetivos:**

  *   Practicar la lógica de control de flujo: `for` y `while`.
  *   Aprender a usar arreglos para almacenar datos.
  *   Utilizar objetos para contar y clasificar elementos.


  [Enlace al código](https://github.com/yuleiditho/Modulo-03-JS/blob/main/03-Arrays_Ciclos/contador-frutas.js)<br>

  ![Código](media/code-03.png)

</details>


### Clase 04 - Funciones

<details>
  <summary>Problema: Seguimiento de Libros</summary>

   <br>Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

  **Objetivos:**

  *   **Modularidad**: Dividir el código en partes más pequeñas y manejables.
  *   **Reutilización**: Crear funciones reutilizables para evitar la duplicación de código.
  *   **Parámetros y Argumentos**: Utilizar parámetros para recibir información externa y argumentos para pasar datos a las funciones.


  [Enlace al código](https://github.com/yuleiditho/Modulo-03-JS/blob/main/04-Funciones/books.js)<br>

  ![Código](media/code-04.png)

</details>

### Clase 05 - Objetos

<details>
  <summary>Problema: Crear un objeto a partir de un Libro</summary>

   <br>Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.


  **Objetivos:**

  *   **Objetos**: Son instancias de clases. Un objeto es una entidad indepediente con propiedades y métodos definidos por su clase.
  *   **Clases**: Son plantillas para crear objetos, facilitan la organización del código y permiten la reutilización de estructuras.
  *   **Propiedades de Clase**: Son variables que pertenecen a una clase y almacenan datos específicos para cada instancia de la clase.
  *   **Métodos**: Son funciones que pertenecen a una clase y definen comportamientos específicos para las instancias de la clase.


  [Enlace al código](https://github.com/yuleiditho/Modulo-03-JS/blob/main/05-Intro_Objects/library.js)<br>

  ![Código](media/code-05.png)

</details>

### Clase 06 - Intro DOM

<details>
  <summary>Problema: Comment Box</summary>

   <br>Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página.
   
  <a href="https://modulo-03-js.vercel.app/" target="_blank">Live DEMO</a><br>

  *   **DOM**: Aprender a navegar y manipular DOM para modificar el contenido y la estructura de una página web.
  *   **Eventos en Formularios**: Aprender a capturar eventos de formularios, como el envío de datos. <br><br>

  ![Vista Previa](media/code-06.png)
  [Enlace al código](https://github.com/yuleiditho/Modulo-03-JS/tree/main/06-Intro_DOM/comment_box)<br>
  

</details>

### Clase 07 - DOM

<details>
  <summary>Problema: Password Generator</summary>

   <br>Crear un sitio que nos permita generar una contraseña segura, basado en el proyecto de frontend mentor:<a href="https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh" target="_blank"> link</a><br>
   
  <a href="https://modulo-03-js-p8ef.vercel.app/" target="_blank">Live DEMO</a><br>

  **Objetivos:**

  *   Generar una contraseña basada en las opciones seleccionadas
  *   Copiar la contraseña generada en el portapapeles
  *   Ver la clasificación de seguridad 
  *   Elementos interactivos de la página  <br><br>


  ![Vista Previa](media/code-07.png)
  [Enlace al código](https://github.com/yuleiditho/Modulo-03-JS/tree/main/07-DOM/password_generate)<br>

</details>

### Proyecto Final

<details>
  <summary>App Comment Box</summary>
  <br>
  Caja de comentarios donde los usuarios pueden escribir, agregar y eliminar comentarios de forma local.
  <br><br>

  **Objetivos:**

  * **DOM**: Implementar modificaciones dinámicas en la página web, como cambiar el contenido o el estilo de los elementos.
  * **LocalStorage**: Aprender a almacenar y recuperar datos del localStorage.
  <br><br>

  **Usuarios Predefinidos:** 

  | Username | Password |
  | -------- | -------- |
  | denisse  | 1234     |
  | mario    | abc      |
  | luz22    | abc      |

  ### login.html
  <img src="media/login.png" alt="App" width="800">
  
  ### home.html
  <img src="media/final.png" alt="App" width="800">

  [Enlace al código](https://github.com/yuleiditho/Modulo-03-JS/tree/main/08-Final_Project)<br>
</details>
