// Las promesas con ES 2015 ya estan soportadas nativamente.
// Viene a resolver los problemas del callback hell

// Las promesas son objetos y están asociados alguna tarea asicrónica
// Existen 3 estados internos de las Promesas:

/*
	1.- Pending
	2.- Fullfiled
	3.- Rejected
*/

const promise = new Promise(function(resolve, reject){
	setTimeout(function(){
		resolve()
	}, 1000)
})

promise
	.then(function(){

	})
	.catch(function(err){

	})

// Ejemplo con promesas:


//Las promesas pueden tener tres estados y estan asociados 
// con tareas asincronicas, los tres estados son pending, fullfill
//rejected - se produjo un error
const promise = newPromise(function(resolve, reject) {
  //En esta funcion debemos realizar una tarea asincrona
  //Esimportante llamar a resolve o reject, a cualquiera de los
  // dos, detro de este cuerpo de la funcion de promise
  setTimeout(function() {
    reject(newError('Se produjo un error'))
  }, 1000)
})

//con then podemos obtener el resultado exitoso y en caso
// de tener un resultado no exitoso lo atrapamos con catch
promise
 .then(function() {
  
 })
 .catch(function(err) {
  
 })


//Para este caso ya no vamos a necesitar los callback 
// Pues con promise nos podemos ahorrar estas peticiones y solo 
// vamos a necesitar la URL de las peticiones que necesitaremos
function get(URL/*, callback*//*onfinish*/) {
  // Usando promesas
  return new Promise(((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
    const DONE = 4;
    const OK = 200;
    if (this.readyState == DONE) {
      if (this.status == OK) {
        //TODO OK
        //Primero va el error y despues la respuesta ya sea que se haya cumplido o no con el request
        // JSON.parse(argumento) convierte un texto plano a formato JSON.
        resolve(JSON.parse(this.responseText));
        //response text contiene todos los parametros de la respuesta de la peticion y se convierte a formato JSON.
        } else {
        //HUBO UN ERROR
          reject(newError("Se produjo un Error al realizar el request" + this.status)
          );
          console.log(xhr.status);
        }
      }
    };

    xhr.open("GET", URL);
    xhr.send(null);
  }))
//   Utilizando Callbacks
//   const xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function() {
//     const DONE = 4;
//     const OK = 200;
//     if (this.readyState == DONE) {
//       if (this.status == OK) {
        //TODO OK
        //Primero va el error y despues la respuesta ya sea que se haya cumplido o no con el request
        // JSON.parse(argumento) convierte un texto plano a formato JSON.
        // callback(null, JSON.parse(this.responseText));
        //response text contiene todos los parametros de la respuesta de la peticion.
      // } else {
        //HUBO UN ERROR
        // callback(
          // new Error("Se produjo un Error al realizar el request" + this.status)
        // );
        // console.log(xhr.status);
      // }
    // }
  // };

  // xhr.open("GET", URL);
  // xhr.send(null);
}

function _handleError(error) {
  console.log(`Resquested failed: ${error}`);
}
//En este caso then recibe una funcion la cual a su vez 
//recibe como parametro lo que nos devuelve la promesa cuando 
// fue exitosa en este caso el JSON.parse

let luke;
get("https://swapi.co/api/people/1/")
  .then((response) => {
  luke = response;
  return get('https://swapi.co/api/planets/1/')
})
  .then((homeworld) => {
  luke.homeworld = homeworld; 
  console.log(`${luke.name} nació en ${homeworld.name}`);
  console.log(`${luke.name} nació en ${luke.homeworld.name}, codigo con igualdad de objeto`);
})
.catch((err) => _handleError(err));

//Utilizando el metodo Fetch 
//Fetch realiza algo similar a get y que funciona tambien con 
// promesas, es soportado de manera nativa en mucho de los navegadores, el cual soporta formatos AJAX, POST, REQUEST.
var lukeFetch;
fetch("https://swapi.co/api/people/1/")
  .then(response =>  
//Este response me regresa un JSON 
    response.json())
  .then(json => {
    lukeFetch = json; 
    return fetch('https://swapi.co/api/planets/1/');
  })
  .then((response) => response.json())
  .then(json => {
    lukeFetch.homeworld = json; 
    console.log(`${lukeFetch.name} nació en ${json.name}, código con FETCH`);
    console.log(`${lukeFetch.name} nació en ${lukeFetch.homeworld.name}, codigo con igualdad de objeto con FETCH`);
  })
  .catch((err) => _handleError(err));

