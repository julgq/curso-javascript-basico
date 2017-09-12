//npm is the package manage for javascript

/*

¿Qué es NPM?
NPM es un package manager para JavaScript. Eso quiere decir que es un lugar donde están guardas aquellas librerías o dependencias que usaremos en nuestros proyectos, y de hecho, tu puedes crear y compartir las tuyas.
¿Qué tipo de dependencias?, muchas, tanto de backend y front-end que utilicen JavaScript, quizás unas ya las conoces, las puedes consultar las más populares en:
https://www.npmjs.com/
¿Qué necesito para publicar un módulo de NPM?
Lo primero es tener una cuenta en el sitio, solo necesitas correo y contraseña, lo obtienes en:
https://www.npmjs.com/signup
Lo siguiente es tener instalado Node.js, ya que entre otras cosas, es la plataforma que nos ayuda a tener instaladas las herramientas de NPM en nuestra terminal. Si aún no lo tienes, lo puedes hacer desde:
https://nodejs.org/en/download/
Teniendo cuenta lo anterior, tenemos que decirle a NPM quienes somos, para ello, necesitamos pasar unos datos desde la terminal:
npm set init.author.name “Tu nombre”
npm set init.author.email “Tu correo”
npm set init.author.url “Una url de tu sitio, inclusive puede ser una red social”
De inmediato ejecutamos npm login y agregaremos las credenciales que obtuvimos en el sitio. Si alguno de nuestros datos no es correcto, se va a mostrar en la terminal. Si todo está bien, se vera algo como lo siguiente:
npm login
*/



// Creando nuestro paquete
/*

Para que NPM entienda que es nuestro proyecto, necesitamos configurar una serie de parámetros, para ello, en la carpeta donde vamos a iniciar nuestro proyecto, utilizamos el comando:
npm init
A partir de ese momento, estaremos en un tipo formulario en el cual se podrán agregar una serie de parámetros, los cuales son:
Nombre: “ Aquí pones el nombre del paquete “
Version: “ Aquí agregas la versión de tu librería, es recomendado que si es la primera iteración sea la versión 0.1.0, si el producto ya esta completo, tienes test y de ahi no va a cambiar algo usamos 1.0.0, si son cambios mas grandes que rompen lo que teníamos seria un cambio a la version 2.0.0, etc. Esto se llama en software semantic versions, puedes leer más en http://semver.org/"
Description: “Aquí es donde vamos a explicar que hace nuestro modulo, puedes ser tan extenso como sea necesario, esto es lo que va a leer la comunidad”
Entry point: “Es el archivo principal de nuestra librería, por defecto es index.js”
Test command: “Si nosotros tenemos test, aquí declaramos el comando en el cual podemos ejecutar este test”
Git repository: “Aqui agregamos la URL del repositorio de Github en donde estará el código de nuestro proyecto, no es obligatorio pero es recomendado para que otras personas puedan colaborar en tu proyecto de ser necesario”
License: Una de las partes mas importantes y que no deberías omitir, es básicamente donde indicamos que tenemos todos los derechos intelectuales del software y que pueden usar nuestra librería de acuerdo a ciertos términos y condiciones, acá la opción recomendada es MIT.
Una vez que pasamos por todos estos parámetros, notaras que en la carpeta tendremos un nuevo archivo llamado package.jsno, el cuál contiene toda la información que acabamos de llegar y que podemos modificar en caso de ser necesario.
El archivo Readme
Nosotros podemos documentar nuestro plugin haciendo uso de README.md
Este archivo será lo primero que leerán tus usuarios al no entender algo de tu proyecto. No olvides que sera necesario usar markdown, lo cual tienes una guía aquí mismo:
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet


Creando:

npm init

*/